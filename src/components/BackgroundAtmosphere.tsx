import React from 'react';

export const BackgroundAtmosphere: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Subtle Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-60" />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] rounded-full bg-cyan-600/10 dark:bg-cyan-500/10 blur-[130px]" />
      <div className="absolute top-[35%] right-[-5%] w-[600px] h-[600px] rounded-full bg-purple-600/10 dark:bg-purple-600/12 blur-[150px]" />
      <div className="absolute bottom-[10%] left-[-10%] w-[550px] h-[550px] rounded-full bg-blue-600/10 dark:bg-blue-600/10 blur-[140px]" />
      <div className="absolute bottom-[-15%] right-[20%] w-[500px] h-[500px] rounded-full bg-pink-600/10 dark:bg-pink-600/08 blur-[160px]" />
    </div>
  );
};
