import { Outlet } from "react-router";

export default function Sidebar() {
    return (
        <aside 
            className="w-105 shrink-0 h-full bg-[#1E1E1E] border rounded-sm border-secondary flex flex-col p-5 overflow-y-auto no-scrollbar">
                <Outlet/>
            <span 
                className="font-geist mt-2">
                    Source Data:
                    <a 
                        href="https://data.bmkg.go.id/gempabumi/"
                        className="ml-2 cursor-pointer underline underline-offset-2"
                        >BMKG</a></span>
        </aside>
    )
}