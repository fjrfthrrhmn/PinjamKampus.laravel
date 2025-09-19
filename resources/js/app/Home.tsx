import { Navigation } from '@/shared';
import { Head } from '@inertiajs/react';
import { AboutSetion, HeroSection } from '@/features/home';

export default function HomePage() {
    return (
        <>
            <Head title="Beranda" />
            <Navigation />

            <div className='pt-10 pb-20 space-y-24 lg:space-y-32'>
                <HeroSection />
                <AboutSetion />
            </div>
        </>
    );
}
