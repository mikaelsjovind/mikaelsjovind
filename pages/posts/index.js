import Head from 'next/head';
import Link from 'next/link';

export default function Home({ posts }) {

  return (
      <>
      <Head>
        <title>Posts by Mikael Sjövind</title>
        <meta name="description" content="Post by Mikael Sjövind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen-sm mx-auto my-12 px-6">
        <h1 className="font-bold leading-tight text-gray-900 text-3xl">
          Posts by Mikael Sjövind
        </h1>
        <ul className="space-y-4 divide-y divide-solid divide-gray-300">
          {posts.map((post, index) => {
            return (
              <li className="pt-4" key={index}>
                <Link key={post.id} href={`/posts/${post.id}`}>
                  <span className="flex mb-1 cursor-pointer hover:underline">{post.title}</span>
                </Link>
                <p className="text-sm text-gray-500">
                  {post.body}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      </>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}