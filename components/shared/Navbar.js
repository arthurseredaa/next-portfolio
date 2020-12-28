import Link from "next/link";
import { useRouter } from "next/router";
import { ButtonGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";

export const AppNavbar = () => {
  const router = useRouter();

  return (
    <div className="navbar-wrapper">
      <Navbar bg="black" expand="lg" className="navbar-dark fj-mw9">
        <Link href="/" passHref>
          <Navbar.Brand style={{outline: "none"}} className="navbar-brand mr-3 font-weight-bold">
            .arthurseredaa
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle style={{outline: "none"}} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href={"/portfolios"} passHref>
              <Nav.Link
                style={
                  router.pathname === "/portfolios"
                    ? { color: "#90CAF9" }
                    : null
                }
              >
                Portfolios
              </Nav.Link>
            </Link>
            <Link href={"/forum/categories"} passHref>
              <Nav.Link
                style={
                  router.pathname === "/forum/categories"
                    ? { color: "#90CAF9" }
                    : null
                }
              >
                Forum
              </Nav.Link>
            </Link>
            <Link href={"/cv"} passHref>
              <Nav.Link
                className="nav-link"
                style={router.pathname === "/cv" ? { color: "#90CAF9" } : null}
              >
                Cv
              </Nav.Link>
            </Link>
            <Link href={"/ask-me"} passHref>
              <Nav.Link
                className="nav-link mr-3"
                style={
                  router.pathname === "/ask-me" ? { color: "#90CAF9" } : null
                }
              >
                Ask me
              </Nav.Link>
            </Link>
          </Nav>
          <Nav>
            <Link href={"/register"} passHref>
              <Nav.Link
               className="nav-link mr-3"
                style={router.pathname === "/login" ? { color: "#000" } : null}
              >
                Sign Up
              </Nav.Link>
            </Link>
            <Link href={"/login"} passHref>
              <Nav.Link className="btn btn-success bright bg-green-2">
                Sign In
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
