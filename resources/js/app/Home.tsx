import { AboutSetion, FaqSection, HeroSection } from '@/features/home';
import { Navigation, Footer } from '@/shared';
import { Head } from '@inertiajs/react';

export default function HomePage() {
    return (
        <>
            <Head title="Beranda" />
            <Navigation />

            <div className="space-y-24 pt-4 lg:space-y-36 lg:pt-10">
                <HeroSection />
                <AboutSetion />
                <FaqSection />
                <Footer />
            </div>
        </>
    );
}
