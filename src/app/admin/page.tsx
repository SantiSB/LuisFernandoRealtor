'use client';

import AdminDashboard from '../../components/admin/AdminDashboard';

export const dynamic = 'force-dynamic';

export default function AdminPage() {
  return (
          <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-primary-50/30 dark:from-zinc-900 dark:via-black dark:to-primary-900/10">
      <AdminDashboard />
    </div>
  );
} 