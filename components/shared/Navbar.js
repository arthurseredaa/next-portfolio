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
          <Navbar.Brand className="navbar-brand mr-3 font-weight-bold">
            .arthurseredaa
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link href="/portfolios" passHref>
              <a
                className="nav-link"
                style={
                  router.pathname === "/portfolios"
                    ? { color: "#90CAF9" }
                    : null
                }
              >
                Portfolios
              </a>
            </Link>
            <Link href={"/forum/categories"} passHref>
              <a
                className="nav-link"
                style={
                  router.pathname === "/forum/categories"
                    ? { color: "#90CAF9" }
                    : null
                }
              >
                Forum
              </a>
            </Link>
            <Link href={"/cv"} passHref>
              <a
                className="nav-link"
                style={
                  router.pathname === "/cv" ? { color: "#90CAF9" } : null
                }
              >
                CV
              </a>
            </Link>
            <Link href={"/ask-me"} passHref>
              <a
                className="nav-link mr-3"
                style={
                  router.pathname === "/ask-me" ? { color: "#90CAF9" } : null
                }
              >
                Ask me
              </a>
            </Link>
            <ButtonGroup>
              <Link href={"/register"} passHref>
                <Button
                  variant="dark"
                  style={
                    router.pathname === "/login" ? { color: "#000" } : null
                  }
                >
                  Sign Up
                </Button>
              </Link>
              <Link href={"/login"} passHref>
                <Button
                  variant="link"
                  style={
                    router.pathname === "/login" ? { color: "#000" } : null
                  }
                >
                  Sign In
                </Button>
              </Link>
            </ButtonGroup>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
