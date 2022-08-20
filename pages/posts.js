import Head from 'next/head'
import Link from 'next/link'
import { gql } from '@apollo/client';
import {Navbar} from '../components/Navbar';
import Image from 'next/image';

import { getApolloClient } from '../lib/apollo-client';

import styles from '../styles/Home.module.css'

export default function Home({ page, posts }) {
  const { title, description } = page;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Navbar />

      <div className='flex justify-center'>
      <div className='pt-20 flex flex-wrap w-11/12 self-center flex-row justify-center justify-evenly'>
      {posts.map(post => {
        return (
          <div key={post.title} className="border-prim border-solid border-2 w-1/3 mx-2 my-2" >
            <a href={post.path}>
            <Image src={post.featuredImage.node.mediaItemUrl} layout='responsive' width={100} height={65} alt={post.title} />
            <h2 className='text-3xl text-prim mx-3'>{post.title}</h2>
            <p className='mx-3'>{post.blogFields.body}</p>
          </a>
          </div>
          
        )
      })}
      </div>
    </div>


      {/* <main className={styles.main}>
       
        <h1 className={styles.title}>{title}</h1>

        <p className={styles.description}>{ description }</p>

        <ul className={styles.grid}>
          {posts && posts.length > 0 && posts.map(post => {
            return (
              <li key={post.slug} className={styles.card}>
                <Link href={post.path}>
                  <a>
                    <h3 dangerouslySetInnerHTML={{
                      __html: post.title
                    }} />
                  </a>
                </Link>
                <div dangerouslySetInnerHTML={{
                  __html: post.excerpt
                }} />
              </li>
            );
          })}

          {!posts || posts.length === 0 && (
            <li>
              <p>
                Oops, no posts found!
              </p>
            </li>
          )}
        </ul>
      </main> */}


    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
      {
        generalSettings {
          title
          description
        }
        posts {
          edges {
            node {
              title
              uri
              content
              excerpt
              slug
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
              blogFields {
                body
              }
            }
          }
        }
      }
    `,
  });



  const posts = data?.data.posts.edges.map(({ node }) => node).map(post => {
    return {
      ...post,
      path: `/posts/${post.slug}`
    }
  });

  const page = {
    ...data?.data.generalSettings
  }

  return {
    props: {
      page,
      posts
    }
  }
}
