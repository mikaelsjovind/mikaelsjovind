import Breadcrumbs from 'nextjs-breadcrumbs';

const Id = ({post}) => {
  return (
    <div className="px-6 max-w-screen-lg mx-auto mt-4 mb-12">
      <Breadcrumbs 
        rootLabel="Home" 
        inactiveItemClassName="text-gray after:content-['/'] after:ml-2 whitespace-nowrap hover:underline"
        activeItemClassName="text-gray-dark whitespace-nowrap truncate hover:underline"
        listClassName={`flex space-x-2 font-light text-xs mx-auto overflow-x-auto py-2`}
      />
      <article class="prose">
        <h1 class="font-bold leading-tight text-gray-900 text-3xl">{post.title}</h1>
        <p>{post.body}</p>
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await res.json()

  return { props: { post } }
}

export default Id;