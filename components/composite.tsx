import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import AppSidebar from "@/components/app-sidebar"
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
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Composite({ team, children }: any) {

    return (
        <>
            <SidebarProvider defaultOpen={false} >
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center gap-2 px-4 ">
                        <div className="flex w-full items-center justify-center ">
                            <h1 className="text-5xl font-bold text-left justify-center">{team}</h1>
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
                            </div>
                        </div>
                        <SidebarTrigger className="-mr-1 ml-auto rotate-180" />
                    </header>
                    {children}
                </SidebarInset>
                <AppSidebar />
            </SidebarProvider>

        </>
    )
}