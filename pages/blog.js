import Head from "next/head";

function Blog({ posts, hello }) {
  return (
    <div style={{ padding: 20 }}>
      <Head>
        <title>Blog</title>
      </Head>
      <h4>Hallo nama saya adalah {hello.name}</h4>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const postsRes = await fetch("http://localhost:3000/api/posts");
  const posts = await postsRes.json();

  const helloRes = await fetch("http://localhost:3000/api/hello");
  const hello = await helloRes.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
      hello,
    },
  };
}

export default Blog;
