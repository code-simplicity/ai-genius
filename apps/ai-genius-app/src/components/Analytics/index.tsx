import GoogleAnalytics from '@components/Analytics/GoogleAnalytics.tsx';
import GoogleTagManager from '@components/Analytics/GoogleTagManager.tsx';
import VercelAnalytics from '@components/Analytics/VercelAnalytics.tsx';
import { analyticsEnv } from '@config/analytics.ts';

const Analytics = () => {
  return (
    <>
      {analyticsEnv.ENABLED_VERCEL_ANALYTICS && <VercelAnalytics />}
      {analyticsEnv.ENABLED_GOOGLE_ANALYTICS && <GoogleAnalytics />}
      {analyticsEnv.ENABLED_GOOGLE_TAG_MANAGER && <GoogleTagManager />}
    </>
  );
};

export default Analytics;
