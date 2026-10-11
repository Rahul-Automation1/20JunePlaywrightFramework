import { test, expect } from "../../fixture/baseFixture.js";
import env from "../../config/env.config.js";
import { TITLES } from "../../utils/constants.js";

test("Valid user can login", async ({ loginPage, inventoryPage }) => {
  await loginPage.open();
  await loginPage.login(env.users.standard, env.password);
  await expect(inventoryPage.pageTitle).toHaveText(TITLES.PRODUCTS);
});

//DEV QA STG PROD
//ITF SIT PREF UAT

//logging
//data driver - test data
//report
//debu
