import React from 'react';
import { Terminal, Home } from 'lucide-react';

interface NotFoundProps {
  onReturnHome: () => void;
}

export const NotFoundPage: React.FC<NotFoundProps> = ({ onReturnHome }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 text-center">
      <div className="glass-panel max-w-lg w-full p-8 rounded-3xl border border-cyan-500/30 shadow-[0_0_50px_rgba(0,242,254,0.15)] space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto">
          <Terminal className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            ERROR 404 // NODE NOT FOUND
          </span>
          <h1 className="text-4xl font-extrabold text-slate-100 mt-2">
            Signal Lost in Space
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
            The coordinate or route you requested does not exist on Pradeep Kumar's portfolio system. Return to the main command deck.
          </p>
        </div>

        <button
          onClick={onReturnHome}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:from-cyan-300 hover:to-blue-400 transition-all shadow-[0_0_20px_rgba(0,242,254,0.3)]"
        >
          <Home className="w-4 h-4" />
          <span>Return to Portfolio Deck</span>
        </button>
      </div>
    </div>
  );
};
