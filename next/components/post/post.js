import Link from "next/link";
export default function Post({ post }){
    return (
        <Link href={`/posts/${post.id}`}>
            <div className="p-4 m-2 cursor-pointer">
                <img alt="post" className="object-cover" src={post.image} />
                
                <div className="text-center m-4">
                    <p>{post.title}</p>
                </div>
            </div>
        </Link>
    )
}