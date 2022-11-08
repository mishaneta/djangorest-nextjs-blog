import { useSession } from "next-auth/react"
import { getSession } from "next-auth/react"

export default function Profile({ user }) {
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    return(
        <div className="flex flex-col items-center">
            <h1 className="text-3xl m-3 font-bold">Profile</h1>
            <div className="border w-14 mb-5"></div>
            <img src={user.image} className="rounded-full mb-3"></img>
            <p>Signed in as {user.name}</p>
            <p>Signed in as {user.email}</p>

        </div>
    )
    //  <p>Signed in as {session.user.email}</p>
  }
  return <a href="/api/auth/signin">Sign in</a>
}

export async function getServerSideProps(context) {
    const session = await getSession(context)
    if(!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    return {
        props: {
            user: session.user,
        }
    }
}