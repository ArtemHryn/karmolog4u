import { Open_Sans, Unbounded } from 'next/font/google';

export const open_Sans = Open_Sans({
  subsets: ['cyrillic'],
  variable: '--font-open_sans',
  weight: ['700', '600', '500', '400'],
  adjustFontFallback: false,
});

export const unbounded = Unbounded({
  subsets: ['cyrillic'],
  variable: '--font-unbounded',
  weight: ['700', '600', '500', '400'],
  adjustFontFallback: false,
});
