import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import { Map, Menu } from "lucide-react";
import Link from 'next/link';
import { EB_Garamond } from "next/font/google";

const garamond = EB_Garamond({ subsets: [] })

export default function Header() {
    return (
        <header className="text-gray-500 py-4 px-6 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <img src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/blob-6c0c2e0.png/:/rs=h:167,cg:true,m/qt=q:95" alt="logo" className='w-50 h-16' />
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="">
                                <Button variant="outline" size="icon"><Map /></Button>
                            </Link>
                        </li>
                        <li>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="outline" size="icon"><Menu /></Button>
                                </SheetTrigger>
                                <SheetContent side='left' className="w-70">
                                    <div className='grid place-items-center py-14'>
                                        <ul className='space-y-5 w-full flex flex-col items-center'>
                                            <li className={`${garamond.className} font-medium text-xl hover:font-semibold cursor-pointer`}>Home</li>
                                            <li className={`${garamond.className} font-medium text-xl hover:font-semibold cursor-pointer`}>Listings</li>
                                            <li className={`${garamond.className} font-medium text-xl hover:font-semibold cursor-pointer`}>About Us</li>
                                            <li className={`${garamond.className} font-medium text-xl hover:font-semibold cursor-pointer`}>Contact</li>
                                        </ul>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};