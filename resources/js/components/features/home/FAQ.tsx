import { Badge, Container, FaqItem, Title } from "@/ui"
import { FAQs } from "@/data/home"

export const FAQ = () => {
    return (
        <Container>
            <div className="space-y-10 lg:space-y-20">
                <div className="space-y-4">
                    <Badge>FAQs</Badge>
                    <Title text="Jawaban dari Pertayaan Anda" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, quaerat!" />
                </div>

                <div className="space-y-4">
                    {FAQs.map((item, i) => {
                        return (
                            <FaqItem key={i} question={item.question} answer={item.answer} defaultOpen={item.defaultOpen} />
                        )
                    })}
                </div>
            </div>
        </Container>
    )
}
