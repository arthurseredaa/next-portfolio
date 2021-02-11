import { Layout } from "@/components/Layout/Layout";
import { Button, makeStyles } from "@material-ui/core";
import { useForm } from "react-hook-form";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#222",
    color: "#fff",
    "&:hover": {
      color: "#222",
    },
  },
});

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Register = () => {
  const classes = useStyles();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Layout page="Sign up">
      <div className="bwm-form mt-5">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <h1 className="page-title" style={styles}>
              Sign up
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group" style={styles}>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="raised-button-file"
                  multiple
                  type="file"
                  name="avatar"
                  ref={register()}
                  onChange={(e) => {
                    console.log(e.currentTarget.value);
                  }}
                />
                <label htmlFor="raised-button-file">
                  <Button
                    variant="outlined"
                    component="span"
                    className={classes.button}
                  >
                    Upload avatar
                  </Button>
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="email">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  ref={register()}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Username</label>
                <input
                  type="username"
                  className="form-control"
                  id="username"
                  ref={register()}
                  name="username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name={"email"}
                  ref={register()}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  ref={register()}
                />
              </div>
              <div className="form-group">
                <label htmlFor="passwordConfirmation">
                  Password confirmation
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  ref={register()}
                />
              </div>
              <button type="submit" className="btn btn-main bg-blue py-2 ttu">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
