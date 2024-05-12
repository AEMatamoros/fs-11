import Header from "../components/shared/Header";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}
