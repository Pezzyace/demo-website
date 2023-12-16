import Logo from "../assets/logo.svg";

export default  function Navbar() {
  return(
    <div className="navbar">
      <div className="left">
        <img src={Logo} alt="React Logo" />
        <p>ReactFacts</p>
      </div>
      <div className="right">
        <p>React Course - Project 1</p>
      </div>
    </div>
  )
}

