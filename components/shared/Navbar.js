import Link from "next/link";
import {useRouter} from 'next/router';

export const Navbar = () => {
  const router = useRouter()

  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark fj-mw9">
        <Link href="/" passHref>
          <a className="navbar-brand mr-3 font-weight-bold" style={{userSelect: "none"}}>.arthurseredaa</a>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item mr-3">
              <Link href="/portfolios" passHref>
                <a className='nav-link' style={router.pathname === "/portfolios" ? {color: "#90CAF9"} : null}>Portfolios</a>
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link href={"/courses"} passHref>
                <a className="nav-link" style={router.pathname === "/courses" ? {color: "#90CAF9"} : null}>Courses</a>
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link href={"/cv"} passHref>
                <a className="nav-link" style={router.pathname === "/cv" ? {color: "#90CAF9"} : null}>CV</a>
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link href={"/askme"} passHref>
                <a className="nav-link" style={router.pathname === "/askme" ? {color: "#90CAF9"} : null}>Ask me</a>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-3">
              <Link href={'/register'} passHref>
                <a className="nav-link">Sign Up</a>
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link href={'/login'} passHref>
                <a className="nav-link btn btn-success bg-green-2 bright">Sign In</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
