'use client'

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useSelStory } from "@/app/teams/[team]/page";

export default function StoryDetails() {

    const { story, setDescription } = useSelStory()

    return (
        <Card className="w-90 border-dashed border-2 bg-chart-6 rounded-xl flex flex-col">
            {/* <Card className="w-full max-w-md mx-auto shadow-lg rounded-2xl"> */}
            <CardHeader>
                <CardTitle className="text-xl font-semibold">{story.title}</CardTitle>
                {story.description ? (
                    <CardDescription className="text-sm text-muted-foreground">
                        <Textarea className="resize-none" inputMode="text" value={story.description} onChange={(e) => setDescription(e.target.value)} />
                    </CardDescription>
                ) : (<></>)}
            </CardHeader>
            {/* </Card> */}
        </Card>

    )
}

function useState(description: string | null): { desc: any; setDesc: any; } {
    throw new Error("Function not implemented.");
}
