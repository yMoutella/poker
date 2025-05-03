
import FibonacciCards from "@/components/fibonacci"
import StoryListCard from "@/components/stories"
import TableComponent from "@/components/table"
import StoryDetails from "@/components/storyDetails"
import { create } from "zustand";

interface PageProps {
    params: {
        team: string
    }
}

export interface Story {
    id: string | null;
    title: string | null;
    description: string | null;
}

export interface StoryState {
    story: Story;
    setStory: (story: Story) => void;
    setDescription: (description: string) => void;
}

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
            <header className="mb-12 pl-10">
                <h1 className="text-5xl font-bold text-left">{team} Team</h1>
            </header>
            <div className="flex flex-row justify-around">
                <div className="w-full flex justify-start">
                    <StoryListCard></StoryListCard>
                </div>
                <div className="w-full ">
                    <TableComponent></TableComponent>
                </div>
                <div className="w-full flex justify-end ">
                    <StoryDetails ></StoryDetails>
                </div>
            </div>
            <FibonacciCards></FibonacciCards>

        </div >
    )
}