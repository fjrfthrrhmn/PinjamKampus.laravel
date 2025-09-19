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
