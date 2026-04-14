// https://playwright.dev/docs/auth#basic-shared-account-in-all-tests
// tests/auth.setup.ts
import { test as setup } from '@playwright/test'

const authFile = 'playwright/.auth/user.json'

setup('authenticate', async ({ page }) => {
  // 1. ログインページへ移動
  await page.goto('/login')

  // 2. ログイン操作（AmplifyのAuthenticatorなど）
  await page.locator('#signin-username').fill('user@example.com');
  await page.locator('#signin-passwd > input').fill('password123');
  await page.getByRole('button', { name: 'Log in' }).click();

  // 3. ログイン完了を待機（ダッシュボードへの遷移）
  await page.waitForURL('/dashboard')

  // 4. Cookieを含むストレージ状態を保存
  await page.context().storageState({ path: authFile })
})
