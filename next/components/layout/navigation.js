import Link from "next/link";

export default function Navigation(){
    return(

        <header className="container flex flex-row items-center bg-slate-200 mx-auto px-5 py-14 max-w-screen-lg">
             <ul className="flex bg-slate-200border-t m-auto">
                <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800" href="/">Home</Link>
                </li>
                <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800" href="/about">About</Link>
                </li>
                <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800" href="#">Link</Link>
                </li>
                <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800" href="#">Link</Link>
                </li>
                <li className="mr-6">
                <Link className="text-gray-400 cursor-not-allowed" href="#">Disabled</Link>
                </li>
            </ul>
        </header>
       
    );
    
}