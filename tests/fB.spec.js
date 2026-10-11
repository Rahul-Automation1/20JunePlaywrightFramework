import { test, expect } from "@playwright/test";

test("FB login Functionality", async ({ page }) => {
  await page.goto("https://www.facebook.com/");

  await expect(page.locator('//span[text()="Log in to Facebook"]')).toHaveText(
    /Facebook/,
  );

  await page.getByRole("textbox", { name: "email" }).fill("Rahul");
  await page.getByRole("textbox", { name: "pass" }).type("Padole");
  await page.keyboard.press("Enter");

  await expect(
    page.locator(
      '//span[text()="The login information you entered is incorrect. "]',
    ),
  ).toContainText(/incorrect/);
});
