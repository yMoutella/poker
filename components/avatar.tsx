import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { auth, signOut } from "@/auth"

export default async function AvatarComponent() {

    const session = await auth()


    return (
        <Popover>
            <PopoverTrigger asChild>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-50 flex flex-col gap-4">
                < Button className="w-full cursor-pointer" variant="outline" onClick={async () => {
                    "use server"
                    await signOut({
                        redirect: true,
                        redirectTo: "/login",
                    })
                }}> Sign out</Button>
                < Button className="w-full cursor-pointer" variant="outline" onClick={async () => {
                    "use server"
                    console.log(session)
                }}> teste </Button>
            </PopoverContent>
        </Popover >

    )

}