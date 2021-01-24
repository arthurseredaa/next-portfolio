import { BlogCard } from "../../components/Blog/BlogCard";
import { Layout } from "../../components/Layout/Layout";
import classes from "../../styles/Blog.module.scss";

export default function Blog() {
  return (
    <Layout page="Blog">
      <div className={classes.blogPostWrapper}>
        <BlogCard id={1} />
        <BlogCard id={2} />
        <BlogCard id={3} />
        <BlogCard id={4} />
        <BlogCard id={5} />
      </div>
    </Layout>
  );
}
