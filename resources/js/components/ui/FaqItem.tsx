import { useState } from "react"
import { ChevronDown, ChevronDownIcon } from "lucide-react"
import { Typography } from "./typography"

type FaqItemProps = {
    question: string
    answer: string
    defaultOpen?: boolean
}

export const FaqItem = ({ question, answer, defaultOpen = false }: FaqItemProps) => {
    const [open, setOpen] = useState(defaultOpen)

    return (
        <div className="border rounded-lg shadow-sm">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center px-4 py-3 text-left font-medium"
            >
                <Typography.Title variant="6/bold">{question}</Typography.Title>
                <ChevronDownIcon className={`transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 px-4 pb-4" : "max-h-0"}`}
            >
                <Typography.Text>{answer}</Typography.Text>
            </div>
        </div>
    )
}
