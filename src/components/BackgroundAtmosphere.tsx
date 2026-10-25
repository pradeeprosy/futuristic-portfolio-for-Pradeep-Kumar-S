import React from 'react';

export const BackgroundAtmosphere: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Subtle Solar Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-70" />

      {/* Atmospheric Solar & Amber Glows */}
      <div className="absolute top-[-10%] left-[10%] w-[550px] h-[550px] rounded-full bg-amber-500/10 dark:bg-amber-400/10 blur-[140px]" />
      <div className="absolute top-[30%] right-[-5%] w-[650px] h-[650px] rounded-full bg-orange-500/10 dark:bg-orange-500/12 blur-[160px]" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-yellow-500/10 dark:bg-yellow-400/08 blur-[150px]" />
      <div className="absolute bottom-[-15%] right-[20%] w-[550px] h-[550px] rounded-full bg-amber-600/10 dark:bg-amber-600/10 blur-[160px]" />
    </div>
  );
};
