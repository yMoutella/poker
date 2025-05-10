

import FibonacciCards from "@/components/fibonacci"
import TableComponent from "@/components/table"
import { PageProps } from "./interface"
import Composite from "@/components/composite";
import { auth } from "@/auth"
import { redirect } from "next/navigation";

export default async function Table({ params }: PageProps) {

    const session = await auth()

    if (!session) {
        redirect('/login')
    }
    const { team } = await params

    return (

        <div className="min-h-screen">
            <Composite team={team}>
                <div className="flex flex-row min-h-max justify-around">
                    <div className="w-full">
                        <TableComponent></TableComponent>
                    </div>
                </div>
                <FibonacciCards></FibonacciCards>
            </Composite>
        </div >
    )
}