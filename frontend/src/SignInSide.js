import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const navigate = useNavigate();
  // const [user, setUser] = useState([])
  const handleLoginSuccess = async (credentialResponse) => {
    const userCredentials = jwtDecode(credentialResponse.credential);
    const userObject = JSON.parse(JSON.stringify(userCredentials));
    // create user object
    const user = {
      first_name: userObject.given_name,
      last_name: userObject.family_name,
      email: userObject.email,
    };
    try {
      const userDBResponse = await fetch('http://localhost:3001/users/oauth/' + user.email)

      const userJsonResponse = await userDBResponse.json()


      // if user doesn't exist yet, then add the user to the DB
      if (Object.keys(userJsonResponse).length === 0) {

        // use the post api endpoint
        const currentDate = new Date().toISOString().split('T')[0];
        try {
          const response = await fetch('http://localhost:3001/users/oauth/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstName: user.first_name,
              lastName: user.last_name,
              emailAddress: user.email,
              accountCreationDate: currentDate
            })
          })
          if (response.ok) {
            const addedUser = await fetch('http://localhost:3001/users/oauth/' + user.email)
            const addedUserJson = await addedUser.json()
            sessionStorage.setItem("user", JSON.stringify(addedUserJson[0]));
            localStorage.setItem("user", JSON.stringify(addedUserJson[0]));
            navigate('/explore')
          }
          else {
            // show notif snackbar
          }
        } catch (error) {
          // show notif snackbar
        }
      }
      // if user Exists, then login the user
      else {
        sessionStorage.setItem("user", JSON.stringify(userJsonResponse[0]));
        localStorage.setItem("user", JSON.stringify(userJsonResponse[0]));
        navigate('/explore')
      }
    } catch (error) {
      // show notif snackbar
    }
  };
  const handleLoginFailure = () => { };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box> */}



            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={handleLoginFailure}
            />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
