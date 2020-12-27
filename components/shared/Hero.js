import Link from "next/link";
import Image from 'next/image';

export const Hero = () => (
  <section className="fj-hero">
    <div className="fj-hero-wrapper row">
      <div className="hero-left col-md-6">
        <h1 className="white hero-title">
          Hey I'm Arthur. Experienced React developer
        </h1>
        {/* <h2 className="white hero-subtitle">Check my portfolio and video tutorials</h2> */}
        <div className="button-container">
          <Link href="/portfolio" passHref>
            <a
              href=""
              className="btn btn-main bg-blue ttu"
              style={{ marginTop: "50px" }}
            >
              See my work
            </a>
          </Link>
        </div>
      </div>
      <div className="hero-right col-md-6">
        <div className="hero-image-container" style={{overflow: "hidden", borderRadius: "50%", height: "300px", width: "300px"}}>
          <a className="grow hero-link">
            <Image src="/hero-avatar.jpg" width="300px" height="300px" alt="Author avatar" />
          </a>
        </div>
      </div>
    </div>
  </section>
);
