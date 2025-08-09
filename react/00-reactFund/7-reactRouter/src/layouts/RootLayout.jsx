import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";

// 2 TIPE APLIKASI
// SPA - Single Page Application : pindah halaman lain hanya render childrennya
// MPA - Multi Page Application : pindah halaman lain akan render semuanya

function RootLayout() {
  return (
    <>
      {/* navbar */}
      <NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink>
      {/* Semua pages ada di Outlet */}
      <Outlet />
    </>
  );
}
// teorinya begini, tapi si NavLink udah otomatis nambahin class saat active
// className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : "" }

export default RootLayout;
