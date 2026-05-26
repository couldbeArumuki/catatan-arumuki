export const siteProfile = {
  name: 'Catatan Arumuki',
  owner: 'Arumuki',
  tagline: 'Warm diary notes for quiet days.',
  description:
    'A personal notebook of diary entries, travel moments, and short stories written slowly for cozy reading.',
  aboutBio:
    'Hi, I\'m Arumuki. I write diary notes, travel snippets, and little stories about ordinary days that deserve to be remembered.',
  topics: ['Diary', 'Travel', 'Short Stories', 'Slow Living', 'Coffee Walks'],
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/arumuki' },
    { label: 'X / Twitter', href: 'https://x.com/arumuki' },
    { label: 'Email', href: 'mailto:hello@arumuki.dev' },
  ],
} as const;

export const navLinks = [
  { label: 'Home', href: '' },
  { label: 'Diary', href: `category/${encodeURIComponent('Diary')}/` },
  { label: 'Travel', href: `category/${encodeURIComponent('Travel')}/` },
  { label: 'Short Stories', href: `category/${encodeURIComponent('Short Stories')}/` },
  { label: 'About', href: 'about/' },
] as const;

export const defaultAvatar = '/images/avatar-arumuki.svg';
export const defaultCoverImage = '/images/default-cover.svg';
