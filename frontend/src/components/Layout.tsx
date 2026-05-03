import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/Sidebar';

export default function Layout() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
        <Outlet />
      </main>
    </div>
  );
}
