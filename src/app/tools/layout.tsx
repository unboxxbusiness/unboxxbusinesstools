import React from 'react';

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50/90 dark:bg-neutral-900 min-h-screen">
      {children}
    </div>
  );
}
