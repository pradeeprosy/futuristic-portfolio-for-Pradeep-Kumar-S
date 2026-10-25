import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { skillsData } from '../data/skills';

/**
 * Intelligent client-side response generator backed directly
 * by Pradeep's verified configuration files.
 * Zero external API key requirement, zero privacy leakage, 100% reliable.
 */
export async function getAiAssistantResponse(query: string): Promise<string> {
  const normalized = query.toLowerCase().trim();

  // If external backend endpoint is provided, try that first with graceful fallback
  const backendUrl = import.meta.env.VITE_AI_API_URL;
  if (backendUrl) {
    try {
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query }),
      });
      if (response.ok) {
        const data = await response.json();
        if (data && data.reply) return data.reply;
      }
    } catch {
      // Fallback seamlessly to verified local engine
    }
  }

  // Simulate realistic thinking delay for natural conversational rhythm
  await new Promise((resolve) => setTimeout(resolve, 600));

  // 1. Identity / Who is Pradeep
  if (
    normalized.includes('who is') ||
    normalized.includes('introduce') ||
    normalized.includes('about') ||
    normalized.includes('pradeep') ||
    normalized.includes('background')
  ) {
    return (
      `**${profileData.fullName}** is an enthusiastic **${profileData.education.degree} in ${profileData.education.field}** student in India.\n\n` +
      `He is an aspiring software developer passionate about building useful, scalable software systems, web applications, and practical AI tools. ` +
      `He is currently pursuing his degree (expected 2026) and seeking engineering roles in India and international hubs like Dubai.`
    );
  }

  // 2. Career goals / Dubai / Job opportunities
  if (
    normalized.includes('career') ||
    normalized.includes('goal') ||
    normalized.includes('dubai') ||
    normalized.includes('hire') ||
    normalized.includes('job') ||
    normalized.includes('relocation') ||
    normalized.includes('opportunity') ||
    normalized.includes('opportunities')
  ) {
    return (
      `**Career Goals & Aspirations:**\n\n` +
      `• **Role Targets:** ${profileData.aspirations.primaryTarget}.\n` +
      `• **Target Regions:** ${profileData.aspirations.regions.join(', ')}.\n` +
      `• **Availability:** ${profileData.contact.availability}.\n` +
      `• **Vision:** ${profileData.careerGoals}\n\n` +
      `Pradeep is eager to relocate and contribute to fast-paced engineering teams where he can build meaningful products.`
    );
  }

  // 3. Technologies / Skills
  if (
    normalized.includes('skill') ||
    normalized.includes('tech') ||
    normalized.includes('language') ||
    normalized.includes('stack') ||
    normalized.includes('python') ||
    normalized.includes('react') ||
    normalized.includes('java') ||
    normalized.includes('database')
  ) {
    const allSkills = skillsData
      .map(
        (group) =>
          `**${group.categoryName}:** ` +
          group.skills.map((s) => `${s.name} (${s.level})`).join(', ')
      )
      .join('\n\n');

    return (
      `Here is **Pradeep's verified technology stack** grouped by area:\n\n` +
      allSkills +
      `\n\n*Note: Pradeep's portfolio displays only confirmed technologies with honest experience levels, avoiding arbitrary percentage meters.*`
    );
  }

  // 4. Specific Projects or Projects Overview
  if (
    normalized.includes('project') ||
    normalized.includes('quotaguard') ||
    normalized.includes('chatbot') ||
    normalized.includes('food') ||
    normalized.includes('exam') ||
    normalized.includes('labour') ||
    normalized.includes('finance')
  ) {
    if (normalized.includes('quotaguard')) {
      const qg = projectsData.find((p) => p.id === 'quotaguard')!;
      return (
        `**${qg.title}** (${qg.status}):\n\n` +
        `${qg.shortDescription}\n\n` +
        `• **Technologies:** ${qg.technologies.join(', ')}\n` +
        `• **Key Highlights:** ${qg.features.join('; ')}.`
      );
    }
    if (normalized.includes('chatbot')) {
      const cb = projectsData.find((p) => p.id === 'ai-college-chatbot')!;
      return (
        `**${cb.title}** (${cb.status}):\n\n` +
        `${cb.shortDescription}\n\n` +
        `• **Technologies:** ${cb.technologies.join(', ')}\n` +
        `• **Features:** ${cb.features.join('; ')}.`
      );
    }
    if (normalized.includes('food')) {
      const fo = projectsData.find((p) => p.id === 'online-food-ordering')!;
      return (
        `**${fo.title}** (${fo.status}):\n\n` +
        `${fo.shortDescription}\n\n` +
        `• **Technologies:** ${fo.technologies.join(', ')}\n` +
        `• **Core Highlights:** ${fo.features.join('; ')}.`
      );
    }

    const projectSummary = projectsData
      .map((p) => `• **${p.title}** [${p.category} | ${p.status}]: ${p.shortDescription}`)
      .join('\n\n');

    return (
      `Pradeep has developed and conceptualized several key projects:\n\n` +
      projectSummary +
      `\n\nYou can click on any card in the **Project Showcase** to explore technical architecture highlights and details.`
    );
  }

  // 5. Contact information
  if (
    normalized.includes('contact') ||
    normalized.includes('email') ||
    normalized.includes('reach') ||
    normalized.includes('github') ||
    normalized.includes('linkedin') ||
    normalized.includes('message')
  ) {
    return (
      `You can connect with **Pradeep Kumar S** directly through:\n\n` +
      `• **Email:** [${profileData.contact.email}](mailto:${profileData.contact.email})\n` +
      `• **GitHub:** [${profileData.contact.githubUrl}](${profileData.contact.githubUrl})\n` +
      `• **LinkedIn:** [${profileData.contact.linkedinUrl}](${profileData.contact.linkedinUrl})\n` +
      `• **Location:** ${profileData.contact.location} (${profileData.contact.relocationTarget})\n\n` +
      `You can also use the contact form at the bottom of the page to send a direct message.`
    );
  }

  // 6. Resume
  if (normalized.includes('resume') || normalized.includes('cv') || normalized.includes('download')) {
    return (
      `**Resume Status:**\n\n` +
      `You can access the Resume section via the top navigation bar or the Hero button. ` +
      `A download modal will provide direct access to Pradeep's resume document or let him upload the latest version.`
    );
  }

  // 7. Education
  if (
    normalized.includes('education') ||
    normalized.includes('college') ||
    normalized.includes('degree') ||
    normalized.includes('study') ||
    normalized.includes('course')
  ) {
    return (
      `**Education & Academic Background:**\n\n` +
      `• **Degree:** ${profileData.education.degree} in ${profileData.education.field}\n` +
      `• **Institution:** ${profileData.education.institution}\n` +
      `• **Period:** ${profileData.education.period}\n` +
      `• **Key Coursework:** ${profileData.education.keyCourses.join(', ')}.\n\n` +
      `Pradeep maintains a solid theoretical and practical foundation across operating systems, data structures, algorithms, and database systems.`
    );
  }

  // Default helpful response
  return (
    `I am **Pradeep's verified AI portfolio assistant**. I can answer questions about:\n\n` +
    `• Pradeep's background & education\n` +
    `• Verified technical skills in Python, Java, React, FastAPI, etc.\n` +
    `• Projects like QuotaGuard, AI College Chatbot, and Food Ordering\n` +
    `• Career goals & availability for opportunities (including Dubai & India)\n` +
    `• Contact methods & resume information\n\n` +
    `Feel free to click any suggestion below or ask me directly!`
  );
}

export const defaultAssistantSuggestions = [
  "Who is Pradeep Kumar S?",
  "What projects has he built?",
  "Which technologies does he use?",
  "What are his career goals in Dubai?",
  "How can I contact him?"
];
