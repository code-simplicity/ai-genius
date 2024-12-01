import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const createAnalyticsEnv = () => {
  return createEnv({
    server: {
      // 启用分析类型
      ENABLED_ANALYTICS: z.boolean(),
      // 启用 Vercel 分析
      ENABLED_VERCEL_ANALYTICS: z.boolean(),
      // 启用 Google 分析
      ENABLED_GOOGLE_ANALYTICS: z.boolean(),
      // Google 分析 ID
      GOOGLE_ANALYTICS_MEASUREMENT_ID: z.string().optional(),
      // 启用 Google Tag Manager
      ENABLED_GOOGLE_TAG_MANAGER: z.boolean(),
      // Google Tag Manager ID
      GOOGLE_TAG_MANAGER_ID: z.string().optional(),
    },
    runtimeEnv: {
      // 启用分析
      ENABLED_ANALYTICS: !!process.env.ENABLED_ANALYTICS,
      // 启用 Vercel 分析
      ENABLED_VERCEL_ANALYTICS: process.env.ENABLED_Vercel_ANALYTICS === '1',
      // 启用 Google 分析
      ENABLED_GOOGLE_ANALYTICS: process.env.ENABLED_GOOGLE_ANALYTICS === '1',
      // Google 分析 ID
      GOOGLE_ANALYTICS_MEASUREMENT_ID: process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID,
      // 启用 Google Tag Manager
      ENABLED_GOOGLE_TAG_MANAGER: process.env.ENABLED_GOOGLE_TAG_MANAGER === '1',
      // Google Tag Manager ID
      GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID,
    },
  });
};

export const analyticsEnv = createAnalyticsEnv();
