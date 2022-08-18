import Head from 'next/head'
import { Navbar } from "../components/Navbar";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


export default function blogs({ posts }) {
 return (
  <>
    <Head>
      <title>Scott Davis</title>
    </Head>
    <Navbar />
    <div className='pt-10 flex flex-wrap w-4/5 self-center'>
    {posts.map(post => {
      return (
        <div key={post.title} className="border-prim border-solid border-2 w-1/4" >
          <a >
          <h2 className='text-3xl text-prim'>{post.title}</h2>
          <p>{post.excerpt}</p>
        </a>
        </div>
        
      )
    })}
    </div>
  </>
 )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://dev-scottdavisxx.pantheonsite.io/graphql',
    cache: new InMemoryCache(),
  });

  const response = await client.query({
    query: gql`
      query blogs {
        posts {
          edges {
            node {
              title
              uri
              content
              excerpt
            }
          }
        }
      }
    `,
  })
  
  const posts = response.data.posts.edges.map(({ node }) => node);

  return {
    props: {
      posts
    }
  }
}