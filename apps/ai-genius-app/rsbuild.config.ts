import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import TanStackRouterRspack from '@tanstack/router-plugin/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: {
      plugins: [TanStackRouterRspack({ target: 'react', autoCodeSplitting: true })],
    },
  },
  performance: {
    // 代码拆分
    chunkSplit: {
      strategy: 'split-by-experience',
    },
  },
});
