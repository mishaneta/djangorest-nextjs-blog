import { useSession, signIn, signOut } from "next-auth/react"
// import { signIn, signOut, useSession } from 'next-auth/react'
// next-auth/client is renamed to next-auth/react
import Link from "next/link";

export default function Navigation(){
    const { data: session, status } = useSession()
    if (session) {
        console.log(session);
        console.log("jeee");
    }
    // if (status === "authenticated") {
    //     return <p>AUTHENTICATED!</p>
    // }
    
    return(

        <header className="container flex flex-row items-center bg-slate-200 mx-auto px-5 py-14 max-w-screen-lg">
             <ul className="flex bg-slate-200border-t m-auto">
                <li className="mr-6">
                </li>
                <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800" href="/">Home</Link>
                </li>
                <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800" href="/about">About</Link>
                </li>
                
                {session ? (
                    <>
                    <li className="mr-6">
                    <Link className="text-blue-500 hover:text-blue-800" href="" onClick={() => signOut()}>Sign out</Link>
                    </li>
                    <li className="mr-6">
                    <Link className="text-blue-500 hover:text-blue-800" href="/"><p>Signed in as {session.user.email}</p></Link>
                    </li>
                    </>
                ):(
                <>
                {/* <button onClick={() => signIn("google")}>Sign in with Google</button> */}
                <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800" href="#"  onClick={() => signIn()}>Sign In</Link>
                </li>
                </>
                )}
             
                {session && session.accessToken ? (
                    <>
                     <li className="mr-6">
                        <Link className="text-gray-400 cursor-not-allowed" href="#" onClick={() => signOut()}>session && session.accessToken</Link>
                    </li>
                    </>
                ):(
                    <>
                    <li className="mr-6">
                        {/* <Link className="text-gray-400 cursor-not-allowed" href="#" onClick={() => signOut()}>Helloo Sign, out</Link> */}
                    </li>
                
                    </>
                )}

            </ul>
        </header>
       
    );
    
}


// export default function Navigation() {
//   const { data: session } = useSession()
//   if (session) {
//     return (
//       <>
//         Signed in as {session.user.name} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     )
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   )
// }

/*
export default function Navigation(){
    const { data: session } = useSession()
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
                


                {session && session.accessToken ? (
                    <>
                    <li>
                        <Link className="text-gray-400 hover:text-blue-800" href="/profile">Profile</Link>
                        <div className='inline-block cursor-pointer' onClick={() => signOut()}>
                            Logout
                        </div>

                    </li>
                    </>
                ):(
                    <>
                     <li>
                        <div className='inline-block cursor-pointer' onClick={() => signIn()}>
                            Login
                        </div>

                    </li>
                    </>
                )}
            </ul>
        </header>
       
    );
    
}

*/