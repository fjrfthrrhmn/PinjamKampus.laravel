import { Button, Container, Typography } from "@/ui";
import { ChevronRightIcon } from "lucide-react";

export const Hero = () => {
    return (
        <Container>
            <div className="grid gap-12 lg:grid-cols-2">

                <div className="lg:order-last flex justify-center items-center w-full h-full">
                    <div className="w-72 h-72 bg-zinc-900 rounded-2xl" />
                </div>

                <div className="flex flex-col gap-6 w-full">
                    <span className="font-mono bg-blue-500/25 text-blue-500 w-max px-2 rounded">Ada Kami</span>

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
                        <Button>Ajaukan Sekarang <ChevronRightIcon /></Button>
                    </div>
                </div>

            </div>
        </Container>
    );
};
