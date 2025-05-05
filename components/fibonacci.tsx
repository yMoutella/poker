import { Card, CardContent } from "@/components/ui/card";


const fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, '?'];

export default function FibonacciCards() {
    return (
        <div className="flex gap-4 flex-wrap justify-center items-center py-10 w-screen ">
            {fibonacci.map((num, i) => (
                <Card key={i} className="w-16 h-20 flex items-center justify-center border-dashed border-2 cursor-pointer hover:bg-accent hover:border-accent-foreground transition duration-300 ease-in-out">
                    <CardContent className="flex items-center justify-center w-full h-full text-white font-bold text-lg">
                        {num}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
