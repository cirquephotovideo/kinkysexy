import { EmergencyContactsClient } from '@/components/EmergencyContactsClient';

export const dynamic = 'force-static';
export const metadata = { title: 'Mes contacts d\'urgence — Kinky' };

export default function EmergencyContactsPage() {
  return <EmergencyContactsClient />;
}
