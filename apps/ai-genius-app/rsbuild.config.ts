import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import TanStackRouterRspack from '@tanstack/router-plugin/rspack';
import { pluginBabel } from '@rsbuild/plugin-babel';

// 支持react19 compiler
const ReactCompilerConfig = {};

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
      babelLoaderOptions(opts) {
        opts.plugins?.unshift(['babel-plugin-react-compiler', ReactCompilerConfig]);
      },
    }),
  ],
  source: {
    entry: {
      // 入口调整成main.tsx
      index: './src/main.tsx',
    },
  },
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
