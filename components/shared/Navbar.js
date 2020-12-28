import { Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

const AppLink = ({ children, className, href }) => (
  <Link href={href} passHref>
    <a className={className}>{children}</a>
  </Link>
);

export const AppNavbar = () => (
  <div className="navbar-wrapper">
    <Navbar bg="black" expand="lg" className="navbar-dark fj-mw9">
      <AppLink href="/" className="navbar-brand mr-3 font-weight-bold">
        .arthurseredaa
      </AppLink>
      <Navbar.Toggle
        style={{ outline: "none" }}
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <AppLink href="/portfolios" className={"nav-link"}>
            Portfolios
          </AppLink>
          <AppLink href="/forum/categories" className={"nav-link"}>
            Forum
          </AppLink>
          <AppLink href="/cv" className={"nav-link"}>
            Cv
          </AppLink>
        </Nav>
        <Nav>
          <AppLink href="/login" className="nav-link">
            Sign In
          </AppLink>
          <AppLink
            href="/register"
            className="btn btn-success bright bg-green-2"
          >
            Sign Up
          </AppLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);
