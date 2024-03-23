import AirbnbLogo from '/airbnb.png'

export default function Navbar(){
    return(
        <nav className=' py-2 px-4 border shadow-md w-full'>
           <img className='w-32 h-12' src={AirbnbLogo} alt="airbnb"/>
        </nav>
    )
}