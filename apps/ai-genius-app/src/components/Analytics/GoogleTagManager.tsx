import { analyticsEnv } from '@config/analytics.ts';
import { GoogleTagManager as GTM } from '@next/third-parties/google';
import { memo } from 'react';

const GoogleTagManager = memo(() => {
  return <GTM gtmId={analyticsEnv.GOOGLE_TAG_MANAGER_ID!} />;
});

export default GoogleTagManager;
