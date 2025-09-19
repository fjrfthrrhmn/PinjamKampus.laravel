import { buttonVariants } from '@/ui';
import { VariantProps } from 'class-variance-authority';
import { UserPlus } from 'lucide-react';

export const NAV_ITEMS: { name: string; href: string }[] = [
    {
        name: 'Beranda',
        href: '#',
    },
    {
        name: 'Tentang Kami',
        href: '#about',
    },
    {
        name: 'FAQ',
        href: '#faq',
    },
    {
        name: 'Kontak',
        href: 'contact',
    },
];

export const BUTTONS: { name: string; href: string; variant: VariantProps<typeof buttonVariants>['variant']; icon?: React.ElementType }[] = [
    {
        name: 'Masuk',
        href: '/auth/login',
        variant: 'default',
    },
    {
        name: 'Daftar',
        href: '/auth/register',
        variant: 'outline',
        icon: UserPlus,
    },
];

export const FAQs: { question: string; answer: string; defaultOpen?: boolean }[] = [
    {
        question: 'Lorem ipsum dolor, sit amet consectetur?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis ea dolore vitae magnam enim dolorem, officia architecto dignissimos illo.',
    },
    {
        question: 'Lorem ipsum dolor, sit amet consectetur?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis ea dolore vitae magnam enim dolorem, officia architecto dignissimos illo.',
        defaultOpen: true
    },
    {
        question: 'Lorem ipsum dolor, sit amet consectetur?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis ea dolore vitae magnam enim dolorem, officia architecto dignissimos illo.',
    },
    {
        question: 'Lorem ipsum dolor, sit amet consectetur?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis ea dolore vitae magnam enim dolorem, officia architecto dignissimos illo.',
    },
    {
        question: 'Lorem ipsum dolor, sit amet consectetur?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis ea dolore vitae magnam enim dolorem, officia architecto dignissimos illo.',
    },
];
