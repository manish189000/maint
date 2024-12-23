// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Grid, Link, Button, Paper, TextField, Typography } from "@mui/material";

// function Login({ setIsLoggedIn, isLoggedIn }) {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     const handleLogin = (e) => {
//         e.preventDefault();
//         axios.post("http://localhost:3001/login", { email, password }, { withCredentials: true })
//             .then(result => {
//                 if (result.data === "Success") {
//                     axios.get('http://localhost:3001/user', { withCredentials: true })
//                         .then(response => {
//                             if (response.data.user) {
//                               setIsLoggedIn(true);
//                               navigate("/home", { state: { user: response.data.user } });
//                             }
//                         });
//                 } else {
//                     alert("Login failed");
//                 }
//             })
//             .catch(err => console.log(err));
//     };

//     const paperStyle = { padding: "2rem", margin: "100px auto", borderRadius: "1rem", boxShadow: "10px 10px 10px" };
//     const heading = { fontSize: "2.5rem", fontWeight: "600" };
//     const row = { display: "flex", marginTop: "2rem" };
//     const btnStyle={marginTop:"2rem", fontSize:"1.2rem", fontWeight:"700", backgroundColor:"blue", borderRadius:"0.5rem"};
//     const label = { fontWeight: "700" };

//     return (
//         <div>
//             <Grid align="center" className="wrapper">
//                 <Paper style={paperStyle} sx={{ width: { xs: '80vw', sm: '50vw', md: '40vw', lg: '30vw', xl: '20vw' }, height: { lg: '50vh' } }}>
//                     <Typography component="h1" variant="h5" style={heading}>Login</Typography>
//                     <form onSubmit={handleLogin}>
//                         <span style={row}>
//                             <TextField sx={{ label: { fontWeight: '700', fontSize: "1.3rem" } }} style={label} label="Email" fullWidth variant="outlined" type="email" placeholder="Enter Email" name="email" onChange={(e) => setEmail(e.target.value)} />
//                         </span>
//                         <span style={row}>
//                             <TextField sx={{ label: { fontWeight: '700', fontSize: "1.3rem" } }} label="Password" fullWidth variant="outlined" type="password" placeholder="Enter Password" name="password" onChange={(e) => setPassword(e.target.value)} />
//                         </span>
//                         <Button style={btnStyle} variant="contained" type="submit">Login</Button>
//                     </form>
//                     <p>Don't have an account? <Link href="/signup">SignUp</Link></p>
//                 </Paper>
//             </Grid>
//         </div>
//     );
// }

// export default Login;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Grid, Link, Button, Paper, TextField, Typography, FormControlLabel, Checkbox } from "@mui/material";

// function Login({ setIsLoggedIn, isLoggedIn }) {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [errors, setErrors] = useState({});
//     const [rememberMe, setRememberMe] = useState(false);
//     const navigate = useNavigate();

//     const handleValidation = () => {
//         let tempErrors = {};
//         let isValid = true;

//         if (!email) {
//             isValid = false;
//             tempErrors["email"] = "Email is required!";
//         } else if (!/\S+@\S+\.\S+/.test(email)) {
//             isValid = false;
//             tempErrors["email"] = "Email is invalid!";
//         }

//         if (!password) {
//             isValid = false;
//             tempErrors["password"] = "Password is required!";
//         } else if (password.length < 6) {
//             isValid = false;
//             tempErrors["password"] = "Password must be at least 6 characters long!";
//         }

//         setErrors(tempErrors);
//         return isValid;
//     };

//     const handleLogin = (e) => {
//         e.preventDefault();
//         if (handleValidation()) {
//             axios.post("http://localhost:3001/login", { email, password }, { withCredentials: true })
//                 .then(result => {
//                     if (result.data === "Success") {
//                         axios.get("http://localhost:3001/user", { withCredentials: true })
//                             .then(response => {
//                                 if (response.data.user) {
//                                     setIsLoggedIn(true);
//                                     navigate("/home", { state: { user: response.data.user } });
//                                 }
//                             });
//                     } else {
//                         alert("Login failed");
//                     }
//                 })
//                 .catch(err => console.log(err));
//         }
//     };

//     const paperStyle = {
//         padding: "2rem",
//         margin: "2rem auto",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         borderRadius: "1rem",
//         boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.1)",
//     };
//     const imageStyle = { width: "100%", height: "100%", objectFit: "cover", borderRadius: "1rem 0 0 1rem" };
//     const formContainer = { padding: "2rem", width: "100%" };
//     const btnStyle = { marginTop: "1.5rem", fontSize: "1rem", fontWeight: "700", backgroundColor: "blue", borderRadius: "0.5rem" };
//     const errorStyle = { color: "red", fontSize: "0.9rem", marginTop: "0.5rem" };

//     return (
//         <div>
//             <Grid container alignItems="center" justifyContent="center">
//                 <Paper style={paperStyle} sx={{ width: { xs: "90vw", sm: "70vw", md: "60vw", lg: "50vw" } }}>
//                     {/* Left Side Image */}
//                     <div style={{ width: "50%" }}>
//                         <img
//                             src="https://via.placeholder.com/400x400" // Replace with your image URL
//                             alt="Login Visual"
//                             style={imageStyle}
//                         />
//                     </div>
//                     {/* Right Side Form */}
//                     <div style={formContainer}>
//                         <Typography component="h1" variant="h5" style={{ fontWeight: "600", marginBottom: "1rem" }}>
//                             Login
//                         </Typography>
//                         <form onSubmit={handleLogin}>
//                             <TextField
//                                 label="Email"
//                                 variant="outlined"
//                                 fullWidth
//                                 type="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 error={!!errors.email}
//                                 helperText={errors.email}
//                                 style={{ marginBottom: "1rem" }}
//                             />
//                             <TextField
//                                 label="Password"
//                                 variant="outlined"
//                                 fullWidth
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 error={!!errors.password}
//                                 helperText={errors.password}
//                                 style={{ marginBottom: "1rem" }}
//                             />
//                             <FormControlLabel
//                                 control={
//                                     <Checkbox
//                                         checked={rememberMe}
//                                         onChange={(e) => setRememberMe(e.target.checked)}
//                                         name="rememberMe"
//                                         color="primary"
//                                     />
//                                 }
//                                 label="Remember Me"
//                             />
//                             <Button style={btnStyle} variant="contained" type="submit" fullWidth>
//                                 Login
//                             </Button>
//                         </form>
//                         <Typography style={{ marginTop: "1rem" }}>
//                             Don't have an account?{" "}
//                             <Link href="/signup" style={{ color: "blue" }}>
//                                 Sign Up
//                             </Link>
//                         </Typography>
//                     </div>
//                 </Paper>
//             </Grid>
//         </div>
//     );
// }

// export default Login;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Grid, Link, Button, Paper, TextField, Typography, Checkbox, FormControlLabel } from "@mui/material";

// function Login({ setIsLoggedIn }) {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [errors, setErrors] = useState({});
//     const [rememberMe, setRememberMe] = useState(false);
//     const navigate = useNavigate();

//     const validate = () => {
//         const newErrors = {};
//         if (!email.trim()) newErrors.email = "Email is required";
//         if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email format";
//         if (!password.trim()) newErrors.password = "Password is required";
//         if (password.length < 6) newErrors.password = "Password must be at least 6 characters long";
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleLogin = (e) => {
//         e.preventDefault();
//         if (!validate()) return;

//         axios.post("http://localhost:3001/login", { email, password }, { withCredentials: true })
//             .then((result) => {
//                 if (result.data === "Success") {
//                     axios.get("http://localhost:3001/user", { withCredentials: true })
//                         .then((response) => {
//                             if (response.data.user) {
//                                 setIsLoggedIn(true);
//                                 navigate("/home", { state: { user: response.data.user } });
//                             }
//                         });
//                 } else {
//                     alert("Login failed");
//                 }
//             })
//             .catch((err) => console.log(err));
//     };

//     const containerStyle = {
//         display: "flex",
//         height: "100vh",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "#f5f5f5",
//         padding: "1rem",
//     };

//     const cardStyle = {
//         display: "flex",
//         flexDirection: "row",
//         maxWidth: "800px",
//         width: "100%",
//         borderRadius: "1rem",
//         overflow: "hidden",
//         boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
//     };

//     const imageContainerStyle = {
//         flex: 2,
//         background: "url('https://via.placeholder.com/400x600') center center / cover no-repeat",
//     };

//     const formContainerStyle = {
//         flex: 3,
//         padding: "2rem",
//         backgroundColor: "#fff",
//     };

//     const inputStyle = {
//         margin: "1rem 0",
//     };

//     const buttonStyle = {
//         marginTop: "1rem",
//         padding: "0.8rem",
//         fontSize: "1rem",
//         fontWeight: "bold",
//         backgroundColor: "#3f51b5",
//         color: "white",
//         borderRadius: "1rem",
//     };

//     const linkStyle = {
//         marginTop: "1rem",
//         display: "block",
//         textDecoration: "none",
//         color: "#3f51b5",
//     };

//     return (
//         <div style={containerStyle}>
//             <Paper style={cardStyle}>
//                 <div style={imageContainerStyle}></div>
//                 <div style={formContainerStyle}>
//                     <Typography component="h1" variant="h5" style={{ marginBottom: "1rem", fontWeight: 600 }}>
//                         Login
//                     </Typography>
//                     <form onSubmit={handleLogin}>
//                         <TextField
//                             style={inputStyle}
//                             fullWidth
//                             label="Email"
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             error={!!errors.email}
//                             helperText={errors.email}
//                         />
//                         <TextField
//                             style={inputStyle}
//                             fullWidth
//                             label="Password"
//                             type="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             error={!!errors.password}
//                             helperText={errors.password}
//                         />
//                         <FormControlLabel
//                             control={
//                                 <Checkbox
//                                     checked={rememberMe}
//                                     onChange={(e) => setRememberMe(e.target.checked)}
//                                     name="rememberMe"
//                                     color="primary"
//                                 />
//                             }
//                             label="Remember Me"
//                         />
//                         <Button style={buttonStyle} variant="contained" type="submit" fullWidth>
//                             Login
//                         </Button>
//                     </form>
//                     <Typography>
//                         Don't have an account?{" "}
//                         <Link href="/signup" style={linkStyle}>
//                             Sign Up
//                         </Link>
//                     </Typography>
//                 </div>
//             </Paper>
//         </div>
//     );
// }

// export default Login;


import React, { useState } from "react";
import Logiimage from "../images/login.jpg"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid, Link, Button, Paper, TextField, Typography, Checkbox, FormControlLabel, useMediaQuery } from "@mui/material";

function Login({ setIsLoggedIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const isMobile = useMediaQuery("(max-width:600px)"); // Detect if the screen width is less than 600px

    const validate = () => {
        const newErrors = {};
        if (!email.trim()) newErrors.email = "Email is required";
        if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email format";
        if (!password.trim()) newErrors.password = "Password is required";
        if (password.length < 6) newErrors.password = "Password must be at least 6 characters long";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (!validate()) return;

        axios.post("http://localhost:3001/login", { email, password }, { withCredentials: true })
            .then((result) => {
                if (result.data === "Success") {
                    axios.get("http://localhost:3001/user", { withCredentials: true })
                        .then((response) => {
                            if (response.data.user) {
                                setIsLoggedIn(true);
                                navigate("/home", { state: { user: response.data.user } });
                            }
                        });
                } else {
                    alert("Login failed");
                }
            })
            .catch((err) => console.log(err));
    };

    const containerStyle = {
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        padding: "1rem",
    };

    const cardStyle = {
        display: "flex",
        flexDirection: "row",
        maxWidth: "800px",
        width: "100%",
        borderRadius: "1rem",
        overflow: "hidden",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    };

    const imageContainerStyle = {
        flex: 2,
        background: `url(${Logiimage}) center center / cover no-repeat`,
        display: isMobile ? "none" : "block", // Hide image on mobile
    };

    const formContainerStyle = {
        flex: 3,
        padding: "2rem",
        backgroundColor: "#fff",
    };

    const inputStyle = {
        margin: "1rem 0",
    };

    const buttonStyle = {
        marginTop: "1rem",
        padding: "0.8rem",
        fontSize: "1rem",
        fontWeight: "bold",
        backgroundColor: "#3f51b5",
        color: "white",
        borderRadius: "1rem",
    };

    const linkStyle = {
        marginTop: "1rem",
        display: "block",
        textDecoration: "none",
        color: "#3f51b5",
    };

    return (
        <div style={containerStyle}>
            <Paper style={cardStyle}>
                {/* Left Image Container, hidden on mobile */}
                <div style={imageContainerStyle}></div>

                {/* Right Form Container */}
                <div style={formContainerStyle}>
                    <Typography component="h1" variant="h5" style={{ marginBottom: "1rem", fontWeight: 600 }}>
                        Login
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <TextField
                            style={inputStyle}
                            fullWidth
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                        <TextField
                            style={inputStyle}
                            fullWidth
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={!!errors.password}
                            helperText={errors.password}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    name="rememberMe"
                                    color="primary"
                                />
                            }
                            label="Remember Me"
                        />
                        <Button style={buttonStyle} variant="contained" type="submit" fullWidth>
                            Login
                        </Button>
                    </form>
                    <Typography>
                        Don't have an account?{" "}
                        <Link href="/signup" style={linkStyle}>
                            Sign Up
                        </Link>
                    </Typography>
                </div>
            </Paper>
        </div>
    );
}

export default Login;
