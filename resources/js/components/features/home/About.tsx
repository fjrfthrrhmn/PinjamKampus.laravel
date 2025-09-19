import { Container, Marquee, Title, Typography } from "@/ui"

export const About = () => {
    return (
        <>
            <Container>
                <div className="space-y-10 lg:space-y-20">
                    <Title text="Tentang Kami" center />

                    <div className="grid gap-12 lg:grid-cols-2">

                        <div className="flex justify-center items-center w-full h-full">
                            <div className="w-full h-72 bg-zinc-900 rounded-2xl" />
                        </div>

                        <div className="flex flex-col gap-4">
                            <Typography.Text>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores itaque, illum odit tenetur eveniet nobis ratione consectetur dolor omnis inventore exercitationem recusandae animi vitae earum necessitatibus! Vitae reiciendis harum eveniet.
                            </Typography.Text>

                            <Typography.Text>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In natus consectetur explicabo nam quos laboriosam qui laborum nulla sapiente fugiat.
                            </Typography.Text>
                        </div>
                    </div>

                    <Marquee className="[--duration:40s]" pauseOnHover>
                        {[...Array(4)].map((_, index) => {
                            return (
                                <div className="w-[400px] h-44 bg-zinc-900 rounded-2xl" key={index} />
                            )
                        })}
                    </Marquee>

                </div>
            </Container>
        </>
    )
}
