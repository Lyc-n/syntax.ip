"use client"

import * as React from "react"
import Link from "next/link"
import { MdOutlineSearch } from "react-icons/md"
import * as motion from "motion/react-client"
import Search from "./search"


export default function Navbar () {
    const [isActive, isInactive] = React.useState(false)
    const area = React.useRef()
    const handleToggle = () => {
        isInactive(!isActive)
    }

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (area.current && !area.current.contains(event.target)) {
                isInactive(false)
            }}
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [area])

    return (
        <header className="flex flex-wrap justify-center w-full h-15 bg-slate-700 sticky top-0 z-50">
            <nav className="w-120 sm:w-150 md:w-190 lg:w-250 xl:w-300 rounded-b-xl px-7 py-4 flex items-center justify-between text-white">
                <Link href={'/'} className="font-black italic text-xl">Syntax.ip</Link>
                <div className="text-2xl flex gap-5 origin-right items-center ">
                    <div className="relative" ref={area}>
                        <motion.div whileTap={{scale: 0.7}} onClick={handleToggle} className="cursor-pointer">
                            <MdOutlineSearch/>
                        </motion.div>
                        <Search isActive={isActive}/>
                    </div>
                </div>
            </nav>
        </header>
    )
}