import { test, expect, ConsoleMessage } from '@playwright/test';

const BASE = process.env.BASE_URL || 'http://localhost:3000';
let consoleErrors: string[];
let pageErrors: Error[];

test.beforeEach(async ({ page }) => {
  consoleErrors = [];
  pageErrors = [];
  // Hydration mismatch & React warning muncul sebagai console error
  page.on('console', (msg: ConsoleMessage) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', (err) => pageErrors.push(err));
});

test.afterEach(async () => {
  expect(pageErrors, `page errors: ${pageErrors.join('\n')}`).toHaveLength(0);
  const hydration = consoleErrors.filter((e) => /hydrat/i.test(e));
  expect(hydration, `hydration errors:\n${hydration.join('\n')}`).toHaveLength(0);
});

test('homepage: nav anchors scroll to sections', async ({ page }) => {
  await page.goto(BASE);
  for (const [label, hash] of [['About', '#about'], ['Work', '#work'], ['Words', '#testimonials']]) {
    await page.getByRole('link', { name: label, exact: true }).first().click();
    await expect(page.locator(hash)).toBeInViewport();
  }
});

test('mobile: nav links reachable via hamburger', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${BASE}/`);
  const menuButton = page.getByRole('button', { name: /menu/i });
  await expect(menuButton).toBeVisible();
  await menuButton.click();
  for (const label of ['About', 'Work', 'Words']) {
    await expect(page.getByRole('link', { name: label, exact: true })).toBeVisible();
  }
  await page.getByRole('link', { name: 'Work', exact: true }).click();
  await expect(page.locator('#work')).toBeInViewport();
});

test('work carousel: counter and progress advance', async ({ page }) => {
  await page.goto(BASE);
  const track = page.locator('#work');
  await track.scrollIntoViewIfNeeded();
  await page.mouse.wheel(0, 1200); // menggerakkan carousel yang digerakkan scroll
  await expect(page.getByText(/0[2-5] \/ 05/)).toBeVisible({ timeout: 5000 });
});

test('project page: tabs + lightbox', async ({ page }) => {
  await page.goto(`${BASE}/projects/cvku`);
  const tab = page.getByRole('button', { name: /View feature/i }).first();
  await tab.click();
  await expect(page.locator('[role="tabpanel"], [data-tab-panel]')).toBeVisible();
  const enlarge = page.getByRole('button', { name: /enlarge image/i }).first();
  await enlarge.click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
});

test('external links resolve', async ({ page, request }) => {
  await page.goto(BASE);
  const hrefs = await page.locator('a[href^="http"]').evaluateAll((els) =>
    els.map((e) => (e as HTMLAnchorElement).href),
  );
  for (const url of [...new Set(hrefs)]) {
    const res = await request.head(url).catch(() => null);
    expect(res?.ok() ?? true, `broken external link: ${url}`).toBeTruthy();
  }
});

test('404: single title, branded page', async ({ page }) => {
  await page.goto(`${BASE}/this-page-does-not-exist-xyz`);
  await expect(page.getByText(/could not be found|not found/i).first()).toBeVisible();
  const titles = await page.locator('head > title').count();
  expect(titles).toBe(1); // Single title
});

test('seo: one h1, canonical, single JSON-LD per type', async ({ page }) => {
  await page.goto(BASE);
  await expect(page.locator('h1')).toHaveCount(1);
  const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
  expect(canonical).toBe(`${BASE}/`);
  const types = await page.locator('script[type="application/ld+json"]').evaluateAll((els) =>
    els.map((e) => JSON.parse(e.textContent || '{}')['@type']),
  );
  expect(types.filter((t) => t === 'Person')).toHaveLength(1);
  expect(types.filter((t) => t === 'WebSite')).toHaveLength(1);
});
