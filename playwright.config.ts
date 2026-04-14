// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    // 認証セットアッププロジェクト
    { name: 'setup', testMatch: /.*\.setup\.ts/ },

    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        // 保存されたストレージ状態を使用
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'], // setupが完了してから実行
    },
  ],
});
