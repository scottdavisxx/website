import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';
import { gql } from '@apollo/client';
import { getApolloClient } from '../../lib/apollo-client';
import { Navbar } from '../../components/Navbar';

export default function Post({ post, site }) {
  return (
  
    <div className="flex">
      <Head>
        <title>{ post.title }</title>
        <meta name="description" content={`Read more about ${post.title} on ${site.title}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
        <div className="bg-white mt-8 pt-8 flex flex-col xl:px-12">
          <div className="flex flex-col xl:mx-12 mx-4">
            <h1 className="text-4xl text-comp my-1">
              { post.title }
            </h1>
            <div className="" dangerouslySetInnerHTML={{
              __html: post.content
            }} />
            </div>
        <p className="text-lg flex">
          <Link href="/posts">
            <a>
            <Image src="/back-arrow.svg" layout='intrinsic' width={20} height={20} alt='back arrow' />
              Blogs
            </a>
          </Link>
        </p>
      </div>
    </div>
  )
}

export async function getStaticProps({ params = {} } = {}) {
  const { postSlug } = params;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
      query PostBySlug($slug: String!) {
        generalSettings {
          title
        }
        postBy(slug: $slug) {
          id
          content
          title
          slug
        }
      }
    `,
    variables: {
      slug: postSlug
    }
  });

  const post = data?.data.postBy;

  if ( !post ) {
    return {
      props: {},
      notFound: true
    }
  }

  const site = {
    ...data?.data.generalSettings
  }

  return {
    props: {
      post,
      site
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}