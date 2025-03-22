import { GoogleAnalytics as GA } from '@next/third-parties/google';
import { memo } from 'react';

const GoogleAnalytics = memo(() => {
  return <GA gaId={process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID!} />;
});

export default GoogleAnalytics;
