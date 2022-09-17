import { bootstrapApplication } from '@unifocus/react-application';
import messages from './localized-messages';

const rootComponentModule = () => import('./App');

bootstrapApplication({
                        applicationId: 'GUEST_SCOPE_DASHBOARD',
                        messages: messages,
                        rootComponentModule: rootComponentModule
                     });
