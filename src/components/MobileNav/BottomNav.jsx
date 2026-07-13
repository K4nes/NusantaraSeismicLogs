import { NavLink } from "react-router";

const styles = {
  activeBtn: "flex-1 flex flex-col items-center justify-center border px-4 py-2",
  inActiveBtn: "flex-1 flex flex-col items-center justify-center border border-transparent px-4 py-2"
};

export default function ButtomNav() {
    return (
    <nav className="h-16 p-1 flex-none bg-[#1E1E1E] flex md:hidden">
      <NavLink 
        to="/" 
        className={({isActive}) => isActive ? styles.activeBtn : styles.inActiveBtn}
      >
        <span className="text-xs font-jetbrains">Terbaru</span>
      </NavLink>
      <NavLink 
        to="/magnitude" 
        className={({isActive}) => isActive ? styles.activeBtn : styles.inActiveBtn}
      >
        <span className="text-xs font-jetbrains">M 5.0+</span>
      </NavLink>
      <NavLink 
        to="/felt" 
        className={({isActive}) => isActive ? styles.activeBtn : styles.inActiveBtn}
      >
        <span className="text-xs font-jetbrains">Dirasakan</span>
      </NavLink>
    </nav>
    );
}