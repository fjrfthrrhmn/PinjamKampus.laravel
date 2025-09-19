import { Container, FaqItem, Title } from "@/ui"

const FAQS = [
    {
        question: "Lorem ipsum dolor, sit amet consectetur?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis ea dolore vitae magnam enim dolorem, officia architecto dignissimos illo."
    },
    {
        question: "Lorem ipsum dolor, sit amet consectetur?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis ea dolore vitae magnam enim dolorem, officia architecto dignissimos illo."
    },
    {
        question: "Lorem ipsum dolor, sit amet consectetur?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis ea dolore vitae magnam enim dolorem, officia architecto dignissimos illo."
    },
    {
        question: "Lorem ipsum dolor, sit amet consectetur?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis ea dolore vitae magnam enim dolorem, officia architecto dignissimos illo."
    },
    {
        question: "Lorem ipsum dolor, sit amet consectetur?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis ea dolore vitae magnam enim dolorem, officia architecto dignissimos illo."
    },
]

export const FAQ = () => {
    return (
        <Container>
            <div className="space-y-10 lg:space-y-20">
                <Title text="Frequently Asked Questions" center />

                <div className="space-y-4">
                    {FAQS.map((item, i) => {
                        return (
                            <FaqItem key={i} question={item.question} answer={item.answer} />
                        )
                    })}
                </div>
            </div>
        </Container>
    )
}
