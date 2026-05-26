export const siteProfile = {
  name: 'Catatan Arumuki',
  owner: 'Arumuki',
  tagline: 'Catatan kecil sehari-hari, kopi, dan cerita pelan.',
  description:
    'Ini rumah kecilku di internet. Tempat buat nyimpen hal-hal sederhana: dari hari biasa, perjalanan singkat, sampai potongan cerita yang ingin kuingat lagi.',
  aboutBio:
    'Aku Arumuki. Blog ini kubikin biar hal-hal kecil yang sering lewat gitu aja tetap punya tempat untuk pulang.',
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
