import config from '@/tailwind.config';
import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export const lusitana = Lusitana({ 
    weight: ['400', '700'],
    subsets: ['latin'],
});