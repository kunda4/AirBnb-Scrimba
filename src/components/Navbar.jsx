import AirbnbLogo from '/airbnb.png'

export default function Navbar(){
    return(
        <nav className="">
           <img src={AirbnbLogo} alt="airbnb" />
           <h3>Hello Africa</h3>
        </nav>
    )
}