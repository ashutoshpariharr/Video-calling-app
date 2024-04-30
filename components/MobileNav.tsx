"use client"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link";
import { SidebarData } from "@/constant/sidebar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function MobileNav() {

    const pathname = usePathname();

    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <Image
                        src="/svg/hemburger.svg"
                        width={40}
                        height={40}
                        alt="hemburger menu"
                    />
                </SheetTrigger>
                <SheetContent className=" bg-gray-600">
                    <SheetHeader>
                        {
                            SidebarData.map((link) => {
                                const isActive = pathname === link.path || pathname.startsWith(link.label);

                                return (
                                    <SheetClose asChild>
                                        <Link
                                            href={link.path}
                                            key={link.label}
                                            className={cn('flex gap-4 mt-[5rem] items-center p-3 rounded-lg justify-start text-white', { 'bg-blue-1': isActive })}>
                                            <Image src={link.icon} alt='working find' width={15} height={15} />
                                            <p>{link.label}</p>
                                        </Link>
                                    </SheetClose>

                                )
                            })
                        }
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    )
}

export default MobileNav
