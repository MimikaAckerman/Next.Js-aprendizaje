const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.json()
  );
};

export default async function ListOfPosts() {
  const posts = await fetchPosts();

  return posts.map((post) => (
    <article key={post.id}>
      <h2 style={{color:"yellow"}}>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  ));
}
