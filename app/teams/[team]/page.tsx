
import FibonacciCards from "@/components/fibonacci"
import TableComponent from "@/components/table"
import { PageProps, StoryState, Story } from "./interfaces"
import { create } from "zustand";
import Composite from "@/components/composite";

export const useSelStory = create<StoryState>((set) => ({
    story: {
        id: null,
        title: null,
        description: null
    },
    setStory: (story: Story) => set({ story }),
    setDescription: (description: string) => set((state) => ({
        story: {
            ...state.story,
            description: description
        }
    }
    ))
}));



export default async function Table({ params }: PageProps) {

    const { team } = await params

    return (

        <div className="min-h-screen pt-10 ">
            <Composite team={team}>
                <div className="flex flex-row  min-h-max justify-around">
                    <div className="w-full">
                        <TableComponent></TableComponent>
                    </div>
                </div>
                <FibonacciCards></FibonacciCards>
            </Composite>


        </div >
    )
}