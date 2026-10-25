import React, { useState } from 'react';
import { 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare, 
  Globe 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import confetti from 'canvas-confetti';
import { profileData } from '../data/profile';
import { soundFx } from '../utils/soundEffects';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const { contact } = profileData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Anti-bot honeypot field
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [hasCopiedEmail, setHasCopiedEmail] = useState(false);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) {
      errors.subject = 'Please provide a subject line.';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please write your message.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check for bots
    if (formData.honeypot) {
      return;
    }

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    try {
      // Simulate submission or handle mailto
      await new Promise((resolve) => setTimeout(resolve, 800));
      
      // Trigger festive celebration with golden embers
      try {
        confetti({
          particleCount: 65,
          spread: 75,
          origin: { y: 0.7 },
          colors: ['#ffd60a', '#ffb703', '#fb8500', '#ff5400', '#fff3b0'],
        });
      } catch {
        // Safe fallback
      }

      soundFx.playGoldSuccess();
      setSubmissionSuccess(true);
      onShowToast('Transmission dispatched! Pradeep will respond promptly.');
      
      // Also open user's email client as guaranteed delivery channel
      const mailtoLink = `mailto:${contact.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;
      
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 800);

    } catch {
      onShowToast('Could not send message automatically. Please email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(contact.email);
      setHasCopiedEmail(true);
      soundFx.playGoldSuccess();
      onShowToast('Email address copied to clipboard!');
      try {
        confetti({ 
          particleCount: 35, 
          spread: 55, 
          origin: { y: 0.8 },
          colors: ['#ffd60a', '#ffb703', '#fb8500']
        });
      } catch {
        // Ignore
      }
      setTimeout(() => setHasCopiedEmail(false), 3000);
    }
  };

  return (
    <section id="contact" className="relative py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-amber-500 dark:text-amber-400 border border-amber-500/20 bg-amber-950/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 // INITIATE TRANSMISSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Get In <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Interested in connecting for software roles, college projects, internships, or engineering discussions? Send a direct transmission.
          </p>
        </div>

        {/* Contact Grid: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Channels & Social Profiles (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-amber-500/20 relative overflow-hidden">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                Connect Directly
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                I am actively seeking software development opportunities in India and globally, with a strong focus on Dubai.
              </p>

              {/* Email Copy Box */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2 mb-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 block font-semibold">
                  Primary Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a 
                    href={`mailto:${contact.email}`}
                    className="text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 hover:text-amber-500 dark:hover:text-amber-300 break-all transition-colors"
                  >
                    {contact.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors shrink-0"
                    title="Copy Email to Clipboard"
                    aria-label="Copy Email address"
                  >
                    {hasCopiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Geographic Relocation Tag */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                <Globe className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 block">Relocation Status</span>
                  <span className="text-slate-600 dark:text-slate-400 mt-0.5 block">{contact.relocationTarget}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-6 pt-6 border-t border-slate-800/80">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
                  Professional Profiles
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={contact.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium border border-slate-800 hover:border-amber-500/40 bg-slate-900/50 text-slate-300 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-amber-400" />
                    <span>GitHub Profile</span>
                  </a>

                  <a
                    href={contact.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium border border-slate-800 hover:border-amber-500/40 bg-slate-900/50 text-slate-300 hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-orange-400" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
              
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono mb-4 font-semibold">
                <MessageSquare className="w-4 h-4" />
                <span>DIRECT MESSAGE FORM</span>
              </div>

              {submissionSuccess ? (
                <div className="p-8 text-center space-y-4 rounded-2xl bg-amber-950/20 border border-amber-500/30">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-100">
                    Transmission Dispatched
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out! A direct email prompt was prepared for your email client. Pradeep will review your message and reply soon.
                  </p>
                  <button
                    onClick={() => {
                      setSubmissionSuccess(false);
                      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {/* Honeypot field (hidden from genuine visitors) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="hp_field">Do not fill this</label>
                    <input
                      id="hp_field"
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-medium">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-2.5 rounded-xl text-xs bg-white dark:bg-slate-900/80 border ${
                          formErrors.name ? 'border-rose-500' : 'border-slate-300 dark:border-slate-800'
                        } text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors`}
                      />
                      {formErrors.name && (
                        <p className="text-[11px] text-rose-500 mt-1">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-medium">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl text-xs bg-white dark:bg-slate-900/80 border ${
                          formErrors.email ? 'border-rose-500' : 'border-slate-300 dark:border-slate-800'
                        } text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors`}
                      />
                      {formErrors.email && (
                        <p className="text-[11px] text-rose-500 mt-1">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-medium">
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g., Software Engineering Role / Project Discussion"
                      className={`w-full px-4 py-2.5 rounded-xl text-xs bg-white dark:bg-slate-900/80 border ${
                        formErrors.subject ? 'border-rose-500' : 'border-slate-300 dark:border-slate-800'
                      } text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors`}
                    />
                    {formErrors.subject && (
                      <p className="text-[11px] text-rose-500 mt-1">{formErrors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-medium">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note or project inquiry here..."
                      className={`w-full px-4 py-2.5 rounded-xl text-xs bg-white dark:bg-slate-900/80 border ${
                        formErrors.message ? 'border-rose-500' : 'border-slate-300 dark:border-slate-800'
                      } text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-y`}
                    />
                    {formErrors.message && (
                      <p className="text-[11px] text-rose-500 mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-mono">
                      Spam protected &amp; direct routing
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 shadow-[0_0_25px_rgba(255,184,0,0.35)] transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Routing...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
