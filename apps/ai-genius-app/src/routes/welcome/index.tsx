import { createFileRoute } from '@tanstack/react-router';
import WelcomePage from '@views/welcomePage';

export const Route = createFileRoute('/welcome/')({
  component: WelcomePage,
});
