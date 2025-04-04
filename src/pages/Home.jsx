import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { PhoneCall, MoveUpRight } from "lucide-react";
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({ subsets: [] })

export default function Home() {
    return (
        <main className="w-screen h-screen">
            <div className="w-full h-full grid grid-cols-2">
                <div className="">
                    <Header />
                    <div className="">
                        <div className="grid justify-center py-50 mb-44">
                            <div className="text-center flex flex-col items-center">
                                <h2 className={`${garamond.className} font-medium`}>MARCI METZGER - THE RIDGE REALTY GROUP</h2>
                                <h1 className={`${garamond.className} font-medium text-6xl`}>PAHRUMP REALTOR</h1>
                                <div className="w-3/4 my-4">
                                    <p className={`${garamond.className} font-extralight text-5xl text-pretty`}>Find Your Perfect Dream House</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center px-6">
                            <div className="">
                                <Button className="rounded-full">
                                    <PhoneCall/> Contact Us Now
                                </Button>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <p className={`${garamond.className} text-pretty w-24 font-medium`}>
                                    Explore All Our Properties
                                </p>
                                <div className="h-full relative">
                                    <div className="absolute right-0 bg-gray-200 rounded-full flex w-6 h-6 items-center content-center">
                                        <MoveUpRight/>
                                    </div>
                                    <img className="rounded-full w-16 h-16" src="https://images.unsplash.com/photo-1649344155749-3c1a9d2914f6?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid place-items-center py-2  pr-6">
                    <div className="w-full h-full rounded-xl">
                        <img className="rounded-xl h-[970px] w-full" src="https://images.unsplash.com/photo-1561026000-94e070de0909?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="real-estate" />
                    </div>
                </div>
            </div>
        </main>
    )
}
