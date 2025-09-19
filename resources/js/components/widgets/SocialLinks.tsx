import { ArrowRight, Mail, MoveRightIcon } from "lucide-react"
import { Typography } from "../ui"
import { Link } from "@inertiajs/react"

export const SocialLinks = () => {
  return (
    <>
      <div className="flex gap-4 flex-col">

        {[...Array(1)].map(item => {
          return (
            <div key={item} className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Mail />
                <Typography.Text>Email</Typography.Text>
              </div>

              <Link href={"#"} className="group flex items-end gap-2">
                <Typography.Text variant="sm/semibold" className="underline underline-offset-8">pinjamkampus@gmail.com</Typography.Text>
                <ArrowRight className="group-hover:-rotate-45 transition-all duration-200" />
              </Link>
            </div>
          )
        })}
      </div>

    </>
  )
}
