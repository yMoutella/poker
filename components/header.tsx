import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
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


export default function Header(params: { team: string }) {

    const { team } = params

    return (
        <header className="pl-10 pr-10 mb-10 flex flex-row w-full justify-center">
            <div className="flex w-full justify-start">
                <h1 className="text-5xl font-bold text-left justify-center ">{team}</h1>
            </div>

            <div className="flex w-full items-center justify-center ">
                <h2 className="text-3xl font-bold justify-center">Something goes here</h2>
            </div>
            <div className="flex w-full items-center justify-end">
                <div className="flex gap-4">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent className="w-50">
                            <h1>User setup</h1>
                            <Label>Next feature</Label>
                        </PopoverContent>
                    </Popover>

                    <Button className="cursor-pointer">Invite players</Button>
                    <Button className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                    </svg>
                    </Button>
                </div>
            </div>
        </header >
    )
}