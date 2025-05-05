
import FibonacciCards from "@/components/fibonacci"
import TableComponent from "@/components/table"
import { PageProps, StoryState, Story } from "./interfaces"
import { create } from "zustand";
import Header from "@/components/header";

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

            <Header team={team}></Header>

            <div className="flex flex-row  min-h-max justify-around">
                {/* <div className="w-full flex justify-start">
                    <StoryListCard></StoryListCard>
                </div> */}
                <div className="w-full">
                    <TableComponent></TableComponent>
                </div>
                {/* <div className="w-full flex justify-end ">
                    <StoryDetails ></StoryDetails>
                </div> */}
            </div>
            <div className="">
                <FibonacciCards></FibonacciCards>
            </div>

        </div >
    )
}