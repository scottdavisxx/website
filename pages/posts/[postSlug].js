import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';
import { Navbar } from '../../components/Navbar';

export default function Post({ post, site }) {
  // console.log(post, 'post');
  return (
    <div className="flex pb-8">
      <Head>
        <title>{ post.title }</title>
        <meta name="description" content={`Read more about ${post.title} on ${site.title}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
        <div className="bg-white mt-8 pt-8 flex flex-col xl:px-12">
          <div className="flex flex-col xl:mx-12 mx-4">
          <div className="text-lg flex">
          <Link href="/posts">
            <a className='flex'>
            <Image src="/back-arrow.svg" layout='intrinsic' width={15} height={15} alt='back arrow' />
              <span className='px-1'>Back</span>
            </a>
          </Link>
        </div>
            <h1 className="text-4xl text-comp my-1">
              { post.title }
            </h1>
            <Image src={post.featuredImage.node.mediaItemUrl} layout='responsive' width={100} height={65} alt={post.title} />
            <div className="" dangerouslySetInnerHTML={{
              __html: post.content
            }} />
            </div>
        <div className="text-lg flex">
          <Link href="/posts">
            <a className='flex'>
            <Image src="/back-arrow.svg" layout='intrinsic' width={15} height={15} alt='back arrow' />
              <span className='px-1'>Blogs</span>
            </a>
          </Link>
        </div>
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
          featuredImage {
            node {
              mediaItemUrl
            }
          }
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