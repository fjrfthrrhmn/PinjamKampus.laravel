import { AboutSetion, HeroSection } from '@/features/home';
import { Navigation } from '@/shared';
import { Head } from '@inertiajs/react';

export default function HomePage() {
    return (
        <>
            <Head title="Beranda" />
            <Navigation />

            <div className="space-y-24 pt-4 pb-20 lg:space-y-32 lg:pt-10">
                <HeroSection />
                <AboutSetion />
            </div>
        </>
    );
}
