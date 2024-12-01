import { Analytics } from '@vercel/analytics/react';
import { memo } from 'react';

const VercelAnalytics = memo(() => {
  return <Analytics />;
});

export default VercelAnalytics;
