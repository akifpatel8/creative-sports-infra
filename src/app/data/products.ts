export type Product = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  /** Indicative rate in INR per square foot */
  pricePerSqFt: number;
};

export const PRODUCTS: Product[] = [
  {
    id: 'badminton',
    title: 'Badminton court',
    description:
      'Indoor wooden or synthetic flooring with proper line marking, lighting, and net systems for club and academy play.',
    imageSrc:
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=900&auto=format&fit=crop&q=80',
    pricePerSqFt: 185,
  },
  {
    id: 'basketball',
    title: 'Basketball court',
    description:
      'Acrylic or PU-based outdoor and indoor surfaces with hoop mounting, drainage planning, and shock-absorbing layers where needed.',
    imageSrc:
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=900&auto=format&fit=crop&q=80',
    pricePerSqFt: 210,
  },
  {
    id: 'cricket',
    title: 'Cricket pitch & outfield',
    description:
      'Natural turf or hybrid pitches with match-grade soil profiles, nets, and outfield grassing for schools and clubs.',
    imageSrc:
      'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=900&auto=format&fit=crop&q=80',
    pricePerSqFt: 95,
  },
  {
    id: 'volleyball',
    title: 'Volleyball floor',
    description:
      'Sprung wood or cushioned synthetic systems designed for knee-friendly play and FIVB-style court dimensions.',
    imageSrc:
      'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=900&auto=format&fit=crop&q=80',
    pricePerSqFt: 198,
  },
  {
    id: 'tennis',
    title: 'Tennis court',
    description:
      'Hard court acrylics or cushioned systems with fencing, windscreens, and LED-friendly surfacing options.',
    imageSrc:
      'https://images.unsplash.com/photo-1554068864-24f776c8782c?w=900&auto=format&fit=crop&q=80',
    pricePerSqFt: 225,
  },
  {
    id: 'futsal',
    title: 'Futsal / multi-sport turf',
    description:
      'FIFA-style artificial turf or modular tiles for small-sided football and multi-use school yards.',
    imageSrc:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&auto=format&fit=crop&q=80',
    pricePerSqFt: 165,
  },
];
