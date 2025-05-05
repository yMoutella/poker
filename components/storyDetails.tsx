'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useSelStory } from "@/app/teams/[team]/page";

export default function StoryDetails() {

    const { story, setDescription } = useSelStory()

    return (
        <Card className="w-90 border-dashed border-2 bg-chart-6 rounded-xl flex flex-col">
            {/* <Card className="w-full max-w-md mx-auto shadow-lg rounded-2xl"> */}
            <CardHeader>
                <CardTitle className="text-xl font-semibold">{story.title}</CardTitle>
            </CardHeader>
            {story.description ? (
                <>
                    <CardDescription className="text-sm text-muted-foreground">
                        <Textarea className="resize-none min-h-80" inputMode="text" value={story.description} onChange={(e) => setDescription(e.target.value)} />
                    </CardDescription>
                    <CardFooter className="flex items-center justify-center py-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="  currentColor" className="size-8 cursor-pointer text-red-700 hover:text-red-900">
                            <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                        </svg>
                    </CardFooter>
                </>
            ) : (<></>)}
            {/* </Card> */}
        </Card>

    )
}

function useState(description: string | null): { desc: any; setDesc: any; } {
    throw new Error("Function not implemented.");
}
