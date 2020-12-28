import Link from "next/link";
import { useRouter } from "next/router";
import { ButtonGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {
  Nav,
  Navbar as NavigationBar,
} from "react-bootstrap";

export const Navbar = () => {
  const router = useRouter();

  return (
    <div className="navbar-wrapper">
      <NavigationBar expand="lg" className="navbar-dark fj-mw9 ">
        <Link href="/" passHref>
          <NavigationBar.Brand className="navbar-brand mr-3 font-weight-bold">
            .arthurseredaa
          </NavigationBar.Brand>
        </Link>
        <NavigationBar.Toggle aria-controls="basic-navbar-nav" />
        <NavigationBar.Collapse id="basic-navbar-nav">
          <Nav>
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
                style={router.pathname === "/cv" ? { color: "#90CAF9" } : null}
              >
                CV
              </a>
            </Link>
            <Link href={"/askme"} passHref>
              <a
                className="nav-link"
                style={
                  router.pathname === "/askme" ? { color: "#90CAF9" } : null
                }
              >
                CV
              </a>
            </Link>
            <ButtonGroup className={"mr-1"}>
              <Link href={"/register"} passHref>
                <Button
                  style={
                    router.pathname === "/login" ? { color: "#000" } : null
                  }
                >
                  Sign Up
                </Button>
              </Link>
              <Link href={"/login"} passHref>
                <Button
                  className={"ml-3"}
                  style={
                    router.pathname === "/login" ? { color: "#000" } : null
                  }
                >
                  Sign In
                </Button>
              </Link>
            </ButtonGroup>
          </Nav>
        </NavigationBar.Collapse>
      </NavigationBar>
    </div>
  );
};
