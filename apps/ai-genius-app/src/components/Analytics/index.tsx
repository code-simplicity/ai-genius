import GoogleAnalytics from '@components/Analytics/GoogleAnalytics.tsx';
import GoogleTagManager from '@components/Analytics/GoogleTagManager.tsx';
import VercelAnalytics from '@components/Analytics/VercelAnalytics.tsx';

const Analytics = () => {
  return (
    <>
      {process.env.ENABLED_VERCEL_ANALYTICS && <VercelAnalytics />}
      {process.env.ENABLED_GOOGLE_ANALYTICS && <GoogleAnalytics />}
      {process.env.ENABLED_GOOGLE_TAG_MANAGER && <GoogleTagManager />}
    </>
  );
};

export default Analytics;
