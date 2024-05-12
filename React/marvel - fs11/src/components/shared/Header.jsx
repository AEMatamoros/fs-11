import logo from "../../assets/img/logo.png";
export default function Header() {
  return (
    <nav className="flex justify-center items-center p-4">
      <img src={logo} alt="Logo" className="h-20" />
    </nav>
  );
}
