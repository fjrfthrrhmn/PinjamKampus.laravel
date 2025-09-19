import { Navigation } from '@/shared';
import { Head } from '@inertiajs/react';
import { HeroSection } from '@/features/home';

export default function HomePage() {
    return (
        <>
            <Head title="Beranda" />
            <Navigation />
            <HeroSection />
        </>
    );
}
