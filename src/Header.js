import Logo from "./assets/react-svgrepo-com.svg";

export default function Header() {
  return(
    <header>
        <nav className="nav">
          <img src={Logo} alt="React Logo" />
          <ul className="nav-items">
            <li>Home</li>
            <li>Classes</li>
            <li>About</li>
          </ul>
        </nav>
    </header>
  )
}