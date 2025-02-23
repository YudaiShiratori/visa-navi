import { Outlet } from "@remix-run/react";

export default function MapLayout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
} 