import { Link, NavLink } from "react-router"

const styles = {
    activeBtn: "border px-4 py-2",
    inActiveBtn: "border border-transparent px-4 py-2"
}

export default function Header() {
    return (
        <header className="flex justify-center md:justify-start gap-12 p-2 md:p-4 border-b border-secondary">
            <Link to="/" 
                className="flex justify-center items-center font-geist md:flex-col md:justify-normal md:items-start">
                    <span className="font-bold text-2xl md:text-5xl uppercase">
                            Nusantara</span>
                                <span className="text-base sm:text-xl ml-5 md:ml-0">Seismic Logs</span></Link>
            <nav className="hidden md:flex justify-between items-center gap-16 font-jetbrains">
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