import FibonacciCards from "@/components/fibonacci"
import StoryListCard from "@/components/stories"
import TableComponent from "@/components/table"
import React from "react"

export default async function Table(
    { params }: { params: { team: string } }
) {

    const { team } = await params

    return (
        <div className="min-h-screen pt-10 ">
            <header className="mb-12 pl-10">
                <h1 className="text-5xl font-bold text-left">{team} Team</h1>
            </header>
            <div className="flex flex-row justify-around">
                <div className="w-full "></div>
                <div className="w-full ">
                    <TableComponent></TableComponent>
                </div>
                <div className="w-full flex justify-end">
                    <StoryListCard></StoryListCard>
                </div>
            </div>
            <FibonacciCards></FibonacciCards>
        </div>
    )
}