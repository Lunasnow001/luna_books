"use client";
import { cn, getInitials } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Session } from "next-auth";
import dayjs from 'dayjs';
import 'dayjs/locale/th';

const Header = ({ session }: { session: Session }) => {
  const pathname = usePathname();
  const [currentTime, setCurrentTime] = React.useState(dayjs());
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Set locale to Thai
  dayjs.locale('th');
  
  return (
    <header className="flex justify-between gap-5 my-10">
      <Link href="/" className="">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
      </Link>

      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/library"
            className={cn(
              "text-base capitalize cursor-pointer",
              pathname === "/library" ? "text-light-200-200" : "text-light-100"
            )}
          >
            <div className="font-medium text-lg">
                {currentTime.format('HH:mm:ss')}
              </div>
          </Link>
        </li>

        <li>
          <Link href="/my-profile">
            <Avatar>
              <AvatarFallback className="bg-amber-100">
                {getInitials(session?.user?.name || "IN")}
                
              </AvatarFallback>
            </Avatar>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
