const fetchPosts = () =>{
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
}


export default async function PostsPage ({params}){
    const posts = await fetchPosts()
    
    
    return (
        <section>
            {posts.map(post =>(
                <article key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>


                </article>
            ))}
        </section>
    )
}