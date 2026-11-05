export interface Project {
  title: string;
  description: string;
  contribution: string;
  url: string;
}

// Only add projects and public links after Joaquin approves them.
export const projects: Project[] = [];

export const site = {
  name: 'Joaquin Ruiseñor',
  title: 'Joaquin Ruiseñor — Product, data & systems',
  description: 'Chilean Product Manager at Google, based in London. A background in analytics and data, a systems mindset, and a deep interest in AI.',
  intro: 'I’m a Chilean Product Manager at Google, based in London. My background is in analytics and data. I’m deeply interested in AI and approach problems with a systems mindset.',
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/joaquin-ruisenor/' },
    { label: 'GitHub', url: 'https://github.com/jaruisenor' },
  ],
  stack: [
    { name: 'Claude Code', icon: '/icons/claude-code.png' },
    { name: 'Antigravity', icon: '/icons/antigravity.svg' },
    { name: 'Codex', icon: '/icons/codex.png' },
    { name: 'Python', icon: '/icons/python.png' },
    { name: 'SQL', icon: '/icons/sql.svg' },
    { name: 'Linear', icon: '/icons/linear.svg' },
    { name: 'Figma', icon: '/icons/figma.svg' },
    { name: 'Supabase', icon: '/icons/supabase.svg' },
    { name: 'Postgres', icon: '/icons/postgres.png' },
    { name: 'Lovable', icon: '/icons/lovable.svg' },
    { name: 'AI Studio', icon: '/icons/ai-studio.png' },
  ],
  clouds: [
    { name: 'AWS', icon: '/icons/aws.png' },
    { name: 'GCP', icon: '/icons/gcp.svg' },
    { name: 'Azure', icon: '/icons/azure.svg' },
  ],
  // Company summaries and public links approved by Joaquin on 2026-11-05.
  career: [
    {
      company: 'Google',
      logo: '/icons/google.ico',
      tenure: '1 year (and counting)',
      role: 'Product Manager',
      url: 'https://google.com/',
      description: 'Part of the Android Telemetry team. Our mission is to make Android the most data-driven OS in the world.',
    },
    {
      company: 'OutThink',
      logo: '/icons/outthink.ico',
      tenure: '4 years',
      role: 'Senior Product Manager',
      url: 'https://outthink.io/',
      description: 'Part of the OutThink product team. Our mission is to minimize cyber human risk in large-scale organizations.',
    },
    {
      company: 'Deloitte',
      logo: '/icons/deloitte.ico',
      tenure: '2 years',
      role: 'Analytics Consultant',
      url: 'https://www.deloittedigital.com/es',
      description: 'Working with large European companies to unlock the power of their data and drive commercial value, across automotive, fast-moving consumer goods, technology and banking.',
    },
  ],
};
