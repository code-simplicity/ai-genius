import Auth from '@views/auth';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/')({
  component: Auth,
});
