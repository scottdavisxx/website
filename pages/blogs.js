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
    <div className='flex justify-center'>
      <div className='pt-20 flex flex-wrap w-11/12 self-center flex-row justify-center justify-evenly'>
      {posts.map(post => {
        return (
          <div key={post.title} className="border-prim border-solid border-2 w-1/3 mx-2 my-2" >
            <a >
            <h2 className='text-3xl text-prim'>{post.title}</h2>
            <p>{post.excerpt}</p>
          </a>
          </div>
          
        )
      })}
      </div>
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