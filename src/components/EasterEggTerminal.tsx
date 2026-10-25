import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { skillsData } from '../data/skills';
import { soundFx } from '../utils/soundEffects';

interface EasterEggTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EasterEggTerminal: React.FC<EasterEggTerminalProps> = ({ isOpen, onClose }) => {
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([
    {
      command: 'system.init',
      output: `Pradeep Kumar S (Rosy 👑) [Solar Core Engine v2.0]\nType 'help' for available terminal commands or 'crown' to ignite solar celebration.`,
    },
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    soundFx.playHoverChime();
    let output = '';

    switch (cmd) {
      case 'help':
        output = 
          `Available Commands:\n` +
          `  about       - Display Pradeep's background & status\n` +
          `  rosy        - Unveil the Rosy crown signature lore 👑\n` +
          `  crown       - Ignite radiant golden embers & chime\n` +
          `  skills      - List verified technical competencies\n` +
          `  projects    - List candidate engineering projects\n` +
          `  dubai       - Show career relocation & employment aspirations\n` +
          `  contact     - Display verified communication endpoints\n` +
          `  clear       - Clear terminal buffer\n` +
          `  exit        - Close terminal window`;
        break;

      case 'rosy':
      case 'crown':
        output = `👑 ROSY SIGNATURE IGNITED!\nRadiant golden neon ring & crown branding unlocked. Striving for software excellence and memorable digital experiences.`;
        soundFx.playGoldSuccess();
        confetti({
          particleCount: 90,
          spread: 90,
          origin: { y: 0.6 },
          colors: ['#ffd60a', '#ffb703', '#fb8500', '#ff5400', '#fff3b0'],
        });
        break;

      case 'about':
        output = `${profileData.fullName} (${profileData.preferredName} 👑)\n${profileData.professionalHeadline}\n${profileData.heroIntro}`;
        break;

      case 'skills':
        output = skillsData
          .map((g) => `[${g.categoryName}]\n  ${g.skills.map((s) => `${s.name} (${s.level})`).join(', ')}`)
          .join('\n\n');
        break;

      case 'projects':
        output = projectsData
          .map((p) => `• ${p.title} (${p.category} | ${p.status})\n  ${p.shortDescription}`)
          .join('\n\n');
        break;

      case 'dubai':
        output = 
          `RELOCATION TARGET: DUBAI & INTERNATIONAL TECH HUBS\n` +
          `Pradeep is actively seeking software engineering roles, internships, and technology graduate opportunities in Dubai and India.`;
        confetti({ particleCount: 45, spread: 65, colors: ['#ffd60a', '#ffb703', '#fb8500'] });
        break;

      case 'contact':
        output = 
          `Email:    ${profileData.contact.email}\n` +
          `GitHub:   ${profileData.contact.githubUrl}\n` +
          `LinkedIn: ${profileData.contact.linkedinUrl}\n` +
          `Location: ${profileData.contact.location}`;
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        output = `Command not recognized: '${cmd}'. Type 'help' for available commands.`;
        break;
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput('');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="easter-egg-terminal-title"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl h-[460px] flex flex-col bg-[#050402] rounded-2xl border border-amber-500/40 shadow-[0_0_50px_rgba(255,184,0,0.2)] overflow-hidden font-mono text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-amber-500/20 select-none">
          <div className="flex items-center gap-2 text-amber-400">
            <Terminal className="w-4 h-4" />
            <span id="easter-egg-terminal-title" className="font-semibold text-slate-200">
              pradeep-rosy@solar-core:~ 👑
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-400 transition-colors"
              title="Minimize"
              aria-label="Minimize terminal"
            />
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-400 transition-colors"
              title="Close"
              aria-label="Close terminal"
            />
          </div>
        </div>

        {/* Output Logs */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 text-slate-300">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-amber-400">
                <span className="text-orange-400">guest@rosy-core:~$</span>
                <span>{item.command}</span>
              </div>
              <div className="text-slate-300 whitespace-pre-wrap pl-4 border-l border-amber-500/30 leading-relaxed">
                {item.output}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Line */}
        <form onSubmit={handleCommand} className="flex items-center gap-2 p-3 bg-black border-t border-slate-900">
          <span className="text-orange-400 pl-1">guest@rosy-core:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or 'crown'..."
            className="flex-1 bg-transparent text-amber-300 focus:outline-none placeholder-slate-600"
          />
          <CornerDownLeft className="w-3.5 h-3.5 text-slate-500 mr-1" />
        </form>
      </div>
    </div>
  );
};
