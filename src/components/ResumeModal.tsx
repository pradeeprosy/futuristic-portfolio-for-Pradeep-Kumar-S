import React, { useState } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  ExternalLink, 
  CheckCircle2,
  FolderOpen
} from 'lucide-react';
import { profileData } from '../data/profile';
import { soundFx } from '../utils/soundEffects';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  if (!isOpen) return null;

  const { resumeFileName, resumeFileUrl } = profileData.contact;
  const [downloadAttempted, setDownloadAttempted] = useState(false);

  const handleDownloadClick = async () => {
    soundFx.playHoverChime();
    setDownloadAttempted(true);
    try {
      if (resumeFileUrl) {
        const res = await fetch(resumeFileUrl, { method: 'HEAD' });
        if (res.ok) {
          const link = document.createElement('a');
          link.href = resumeFileUrl;
          link.download = resumeFileName || 'Pradeep_Kumar_S_Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          soundFx.playGoldSuccess();
          onShowToast('Resume download initiated successfully!');
          return;
        }
      }
      onShowToast('Resume placeholder: Place your PDF in public/documents/');
    } catch {
      onShowToast('Resume placeholder: Place your PDF in public/documents/');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-resume-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg glass-panel rounded-3xl border border-amber-500/30 p-6 sm:p-8 shadow-[0_0_50px_rgba(255,184,0,0.18)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          aria-label="Close resume dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-amber-950/60 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(255,184,0,0.2)]">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 id="modal-resume-title" className="text-xl font-bold text-slate-100">
              Curriculum Vitae / Resume
            </h3>
            <p className="text-xs font-mono text-amber-400">
              {profileData.fullName} ({profileData.preferredName} 👑)
            </p>
          </div>
        </div>

        {/* Informative Content */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-300">
          <p className="leading-relaxed">
            This document summarizes Pradeep's engineering coursework, core competencies in Python, Java, React, and FastAPI, project prototypes, and academic credentials.
          </p>

          {/* Configuration & Upload Instructions Card */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-300">
              <FolderOpen className="w-4 h-4 text-amber-400" />
              <span>Resume File Location:</span>
            </div>
            <code className="block text-[11px] font-mono text-slate-400 bg-black/40 px-3 py-2 rounded-lg break-all">
              public/documents/{resumeFileName || 'Pradeep_Kumar_S_Resume.pdf'}
            </code>
            <p className="text-[11px] text-slate-400">
              To update your real resume, drop your PDF into the <span className="text-amber-300 font-mono">public/documents/</span> folder with this filename.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleDownloadClick}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 shadow-[0_0_20px_rgba(255,184,0,0.3)] transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </button>

            <a
              href={`mailto:${profileData.contact.email}?subject=Resume%20Request%20-%20Pradeep%20Kumar%20S`}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-medium text-slate-300 border border-slate-700 hover:border-amber-500/40 hover:text-amber-300 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Request by Email</span>
            </a>
          </div>

          {downloadAttempted && (
            <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-950/40 border border-amber-500/20 text-[11px] text-amber-300">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
              <span>If your local PDF is not yet saved to <code className="font-mono text-white">public/documents/</code>, you can drop it in whenever ready!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
