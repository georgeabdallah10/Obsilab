export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <main>{children}</main>
      </div>
    </div>
  );
}