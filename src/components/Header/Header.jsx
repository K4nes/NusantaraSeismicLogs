import { Link, NavLink } from "react-router"

const styles = {
    activeBtn: "border px-4 py-2",
    inActiveBtn: "border border-transparent px-4 py-2"
}

export default function Header() {
    return (
        <header className="flex gap-12 p-4 border-b border-secondary">
            <Link to="/" className="flex flex-col font-geist"><span className="font-bold text-5xl uppercase">Nusantara</span>Seismic Logs</Link>
            <nav className="flex justify-between items-center gap-16 font-jetbrains">
                <NavLink 
                    to="/" 
                    className={({isActive}) => isActive ? styles.activeBtn : styles.inActiveBtn}>
                        Terbaru</NavLink>
                <NavLink 
                    to="/magnitude" 
                    className={({isActive}) => isActive ? styles.activeBtn : styles.inActiveBtn}>
                        Magnitudo 5.0+</NavLink>
                <NavLink 
                    to="/felt" 
                    className={({isActive}) => isActive ? styles.activeBtn : styles.inActiveBtn}>
                        Dirasakan</NavLink>
            </nav>
        </header>
    )
}