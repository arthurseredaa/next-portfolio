import { Card } from "react-bootstrap";
import Image from "next/image";
import classes from "./BlogCard.module.scss";
import Link from "next/link"

export const BlogCard = ({id}) => {
  return (
    <Link href={`blog/${id}`}>
      <Card className={classes.post}>
        {/* <Image src={"/images/"} layout="fill" /> */}
        <h1>Title</h1>
        <p>Pre-read text</p>
      </Card>
    </Link>
  );
};
