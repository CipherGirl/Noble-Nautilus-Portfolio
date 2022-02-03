import Image from "next/image"
import logo from "../public/images/programming-svgrepo-com.svg"

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-gradient-to-bl from-indigo-200 via-red-200 to-yellow-100 pt-20'>
      <Image
          src={logo}
          alt='logo for noble nautilus'
          width="300"
        />
        <h1 className="font-Cinzel text-5xl">Noble Nautilus</h1>
        <p className="pt-5 text-2xl">Welcome to Pod Portfolio of 22.1.7 known as <span className="font-Cinzel">Noble Nautilus</span></p>
    </div>
  )
}
