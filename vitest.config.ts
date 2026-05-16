import type { TestUserConfig, ViteUserConfig } from 'vitest/config';

type VitestConfig = ViteUserConfig & {
  test?: TestUserConfig;
};

const config: VitestConfig = {
  test: {
    exclude: ['dist/**', 'node_modules/**'],
    reporters: ['default', 'junit'],           // 新增
    outputFile: { junit: './test-results/junit.xml' }  // 新增
  }
};

export default config;
