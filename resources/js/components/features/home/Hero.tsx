import { Button, Container, Typography } from '@/ui';
import { ChevronRightIcon } from 'lucide-react';

export const Hero = () => {
    return (
        <Container>
            <div className="w-full grid gap-y-12 lg:grid-cols-2">
                <div className="flex h-full items-center justify-center lg:order-last">
                    <div className="sm:h-72 w-full h-44 sm:w-72 rounded-2xl bg-zinc-900" />
                </div>

                <div className="flex flex-col gap-6">
                    <span className="w-max rounded bg-blue-500/25 px-2 font-mono text-blue-500">Ada Kami</span>

                    <div className="flex flex-col gap-4">
                        <Typography.Title variant="2/bold">
                            Dana Pendidikan <br /> Peluang Masa Depan.
                        </Typography.Title>
                        <Typography.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, accusantium consequuntur voluptate fuga esse assumenda.
                        </Typography.Text>
                    </div>

                    <div>
                        <ul className="list-disc ps-4">
                            <li>Khusus Mahasiswa Aktif Malang</li>
                            <li>Mudah, Cukup Pakai KTP dan KTM</li>
                            <li>Cair Cepat dalam 1 Jam</li>
                            <li>Cicilan Fleksibel: Harian / Mingguan / Bulanan</li>
                        </ul>
                    </div>

                    <div className="flex flex-col lg:flex-row">
                        <Button>
                            Ajaukan Sekarang <ChevronRightIcon />
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};
