// pages/washroom/layout.tsx
import React from 'react';

const WashroomLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4">
        <h1>Washroom Details</h1>
      </header>
      <main className="flex-grow p-6">
        {children}
      </main>
    </div>
  );
};

export default WashroomLayout;
