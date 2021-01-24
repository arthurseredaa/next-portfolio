import { Layout } from "@/components/Layout/Layout";

export default function BlogPost({query}) {
  return (
    <Layout>
      <div>
        <h1>Post: {query.id}</h1>
      </div>
    </Layout>
  )
}


BlogPost.getInitialProps = async ({query}) => ({query});
