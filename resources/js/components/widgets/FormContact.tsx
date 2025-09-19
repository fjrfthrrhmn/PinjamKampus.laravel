import { SendIcon } from "lucide-react"
import { Button, Input, Label, Textarea } from "@/ui"

export const FormContact = () => {
    return (
        <>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label>Nama</Label>
                    <Input placeholder="Masukan Nama Anda..." />
                </div>
                <div className="space-y-2">
                    <Label>Gmail</Label>
                    <Input placeholder="Masukan Gmail Anda..." />
                </div>
                <div className="space-y-2">
                    <Label>Pesan</Label>
                    <Textarea placeholder="Lorem Ipsum Dolor..." />
                </div>

                <div className="flex items-center justify-end">
                    <Button>Kirim <SendIcon /></Button>
                </div>
            </div>
        </>
    )
}
