import logo from '../assets/brand_logo.svg'

export default function Header(){
    return <div className="flex flex-row justify-between items-center mr-8 flex-wrap justify-items-center" >
    <div className="pl-14 pt-3">
     <img src={logo} alt="Logo" />
    </div>
    <nav>
     <ul className="flex flex-row  mx-2 font-medium">
        <li className='p-2'>MENU</li>
        <li className='p-2'>LOCATION</li>
        <li className='p-2'>ABOUT</li>
        <li className='p-2'>CONTACT</li>
     </ul>
    </nav>
    <div className='w-24 h-7 bg-red-500 text-center text-white'>
        <button>Login</button>
    </div>
    </div>
}