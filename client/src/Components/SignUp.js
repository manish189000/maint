// // import React, {useState} from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import { Grid, Link, Button, Paper, TextField, Typography } from "@mui/material";


// // function SignUp(){
// //     const [name, setName] = useState("");
// //     const [email, setEmail] = useState("");
// //     const [password, setPassword] = useState("");
// //     const navigate = useNavigate();

// //     const handleSignup = (e) => {
// //         e.preventDefault();
// //         axios.post("http://localhost:3001/signup", { name, email, password })
// //             .then(result => {
// //                 if (result.status === 201) {
// //                     navigate("/login");
// //                 }
// //             })
// //             .catch(err => {
// //                 if (err.response && err.response.status === 400) {
// //                     window.alert("Email already exists. Please use a different email.");
// //                 } else {
// //                     console.log(err);
// //                 }
// //             });
// //     };
// //     const paperStyle = {padding: "2rem", margin: "100px auto", borderRadius:"1rem", boxShadow: "10px 10px 10px"};
// //     const heading = {fontSize:"2.5rem", fontWeight:"600"}
// //     const row = {display:"flex", marginTop:"2rem"}
// //     const btnStyle={marginTop:"2rem", fontSize:"1.2rem", fontWeight:"700", backgroundColor:"blue", borderRadius:"0.5rem"};
// //     return (
// //         <div>
// //             <Grid align="center" className="wrapper">
// //                 <Paper style={paperStyle} sx={{width: {
// //                     xs: '80vw',     // 0
// //                     sm: '50vw',     // 600
// //                     md: '40vw',     // 900
// //                     lg: '30vw',     // 1200
// //                     xl: '20vw',     // 1536 
// //                 },
// //                 height:{
// //                     lg: '60vh',     // 1200px and up
// //                 }}}>
// //                     <Typography component="h1" variant="h5" style={heading}> Signup </Typography>
// //                     <form onSubmit={handleSignup}>
// //                         <TextField style={row} sx={{label: { fontWeight: '700', fontSize:"1.3rem" }}} fullWidth type="text" label="Enter Name" name="name" onChange={(e)=>setName(e.target.value)}></TextField>
// //                         <TextField style={row} sx={{label: { fontWeight: '700', fontSize:"1.3rem" }}} fullWidth label="Email" variant="outlined" type="email" placeholder="Enter Email" name="email" onChange={(e)=>setEmail(e.target.value)}/>                    
// //                         <TextField style={row} sx={{label: { fontWeight: '700', fontSize:"1.3rem" }}} fullWidth label="Password" variant="outlined" type="password" placeholder="Enter Password" name="password" onChange={(e)=>setPassword(e.target.value)} />
// //                         <Button style={btnStyle} variant="contained" type="submit">SignUp</Button>
// //                     </form>
// //                     <p>Already have an account?<Link href="/login"> Login</Link></p>
// //                 </Paper>
// //             </Grid>
// //         </div>
// //     )
// // }
// // export default SignUp;


// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import { Grid, Link, Button, Paper, TextField, Typography } from "@mui/material";

// // function SignUp() {
// //     const [name, setName] = useState("");
// //     const [email, setEmail] = useState("");
// //     const [password, setPassword] = useState("");
// //     const [errors, setErrors] = useState({});
// //     const navigate = useNavigate();

// //     const validate = () => {
// //         const newErrors = {};
// //         if (!name.trim()) newErrors.name = "Name is required";
// //         if (!email.trim()) newErrors.email = "Email is required";
// //         if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email format";
// //         if (!password.trim()) newErrors.password = "Password is required";
// //         if (password.length < 6) newErrors.password = "Password must be at least 6 characters long";
// //         setErrors(newErrors);
// //         return Object.keys(newErrors).length === 0;
// //     };

// //     const handleSignup = (e) => {
// //         e.preventDefault();
// //         if (!validate()) return;

// //         axios.post("http://localhost:3001/signup", { name, email, password })
// //             .then((result) => {
// //                 if (result.status === 201) {
// //                     navigate("/login");
// //                 }
// //             })
// //             .catch((err) => {
// //                 if (err.response && err.response.status === 400) {
// //                     window.alert("Email already exists. Please use a different email.");
// //                 } else {
// //                     console.log(err);
// //                 }
// //             });
// //     };

// //     const containerStyle = {
// //         display: "flex",
// //         height: "100vh",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         backgroundColor: "#f5f5f5",
// //     };

// //     const paperStyle = {
// //         padding: "2rem",
// //         margin: "auto",
// //         borderRadius: "1rem",
// //         boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
// //         maxWidth: "400px",
// //         width: "100%",
// //     };

// //     const headingStyle = {
// //         marginBottom: "1rem",
// //         fontSize: "2rem",
// //         fontWeight: 600,
// //     };

// //     const inputStyle = {
// //         margin: "1rem 0",
// //         borderRadius: "1rem",
// //     };

// //     const buttonStyle = {
// //         marginTop: "1rem",
// //         padding: "0.8rem",
// //         fontSize: "1rem",
// //         fontWeight: "bold",
// //         backgroundColor: "#3f51b5",
// //         color: "white",
// //         borderRadius: "1rem",
// //     };

// //     const linkStyle = {
// //         marginTop: "1rem",
// //         display: "block",
// //         textDecoration: "none",
// //         color: "#3f51b5",
// //     };

// //     return (
// //         <div style={containerStyle}>
// //             <Grid container style={{ maxWidth: "800px", width: "100%" }}>
// //                 <Grid item xs={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                    
// //                     <Paper style={paperStyle}>
// //                         <Typography component="h1" variant="h5" style={headingStyle}>
// //                             Sign Up
// //                         </Typography>
// //                         <form onSubmit={handleSignup}>
// //                             <TextField
// //                                 style={inputStyle}
// //                                 fullWidth
// //                                 type="text"
// //                                 label="Enter Name"
// //                                 name="name"
// //                                 value={name}
// //                                 onChange={(e) => setName(e.target.value)}
// //                                 error={!!errors.name}
// //                                 helperText={errors.name}
// //                             />
// //                             <TextField
// //                                 style={inputStyle}
// //                                 fullWidth
// //                                 label="Email"
// //                                 variant="outlined"
// //                                 type="email"
// //                                 placeholder="Enter Email"
// //                                 name="email"
// //                                 value={email}
// //                                 onChange={(e) => setEmail(e.target.value)}
// //                                 error={!!errors.email}
// //                                 helperText={errors.email}
// //                             />
// //                             <TextField
// //                                 style={inputStyle}
// //                                 fullWidth
// //                                 label="Password"
// //                                 variant="outlined"
// //                                 type="password"
// //                                 placeholder="Enter Password"
// //                                 name="password"
// //                                 value={password}
// //                                 onChange={(e) => setPassword(e.target.value)}
// //                                 error={!!errors.password}
// //                                 helperText={errors.password}
// //                             />
// //                             <Button style={buttonStyle} variant="contained" type="submit">
// //                                 Sign Up
// //                             </Button>
// //                         </form>
// //                         <Typography>
// //                             Already have an account? <Link href="/login" style={linkStyle}>Login</Link>
// //                         </Typography>
// //                     </Paper>
// //                 </Grid>
// //             </Grid>
// //         </div>
// //     );
// // }

// // export default SignUp;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Grid, Link, Button, Paper, TextField, Typography } from "@mui/material";

// function SignUp() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate();

//     const validate = () => {
//         const newErrors = {};
//         if (!name.trim()) newErrors.name = "Name is required";
//         if (!email.trim()) newErrors.email = "Email is required";
//         if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email format";
//         if (!password.trim()) newErrors.password = "Password is required";
//         if (password.length < 6) newErrors.password = "Password must be at least 6 characters long";
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSignup = (e) => {
//         e.preventDefault();
//         if (!validate()) return;

//         axios.post("http://localhost:3001/signup", { name, email, password })
//             .then((result) => {
//                 if (result.status === 201) {
//                     navigate("/login");
//                 }
//             })
//             .catch((err) => {
//                 if (err.response && err.response.status === 400) {
//                     window.alert("Email already exists. Please use a different email.");
//                 } else {
//                     console.log(err);
//                 }
//             });
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
//                         Sign Up
//                     </Typography>
//                     <form onSubmit={handleSignup}>
//                         <TextField
//                             style={inputStyle}
//                             fullWidth
//                             type="text"
//                             label="Enter Name"
//                             name="name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             error={!!errors.name}
//                             helperText={errors.name}
//                         />
//                         <TextField
//                             style={inputStyle}
//                             fullWidth
//                             label="Email"
//                             variant="outlined"
//                             type="email"
//                             placeholder="Enter Email"
//                             name="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             error={!!errors.email}
//                             helperText={errors.email}
//                         />
//                         <TextField
//                             style={inputStyle}
//                             fullWidth
//                             label="Password"
//                             variant="outlined"
//                             type="password"
//                             placeholder="Enter Password"
//                             name="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             error={!!errors.password}
//                             helperText={errors.password}
//                         />
//                         <Button style={buttonStyle} variant="contained" type="submit">
//                             Sign Up
//                         </Button>
//                     </form>
//                     <Typography>
//                         Already have an account? <Link href="/login" style={linkStyle}>Login</Link>
//                     </Typography>
//                 </div>
//             </Paper>
//         </div>
//     );
// }

// export default SignUp;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Paper, TextField, Typography } from "@mui/material";
import Signupimage from "../images/Sign.png"

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
    const navigate = useNavigate();

    // Update state based on window resize
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 600);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const validate = () => {
        const newErrors = {};
        if (!name.trim()) newErrors.name = "Name is required";
        if (!email.trim()) newErrors.email = "Email is required";
        if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email format";
        if (!password.trim()) newErrors.password = "Password is required";
        if (password.length < 6) newErrors.password = "Password must be at least 6 characters long";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSignup = (e) => {
        e.preventDefault();
        if (!validate()) return;

        axios
            .post("http://localhost:3001/signup", { name, email, password })
            .then((result) => {
                if (result.status === 201) {
                    navigate("/login");
                }
            })
            .catch((err) => {
                if (err.response && err.response.status === 400) {
                    window.alert("Email already exists. Please use a different email.");
                } else {
                    console.log(err);
                }
            });
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
        maxWidth: "800px",
        width: "100%",
        borderRadius: "1rem",
        overflow: "hidden",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        flexDirection: isMobile ? "column" : "row", // Switch to column for mobile
    };

    const imageContainerStyle = {
        flex: 2,
        background: `url(${Signupimage}) center center / cover no-repeat`,
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
                <div style={imageContainerStyle}></div>
                <div style={formContainerStyle}>
                    <Typography component="h1" variant="h5" style={{ marginBottom: "1rem", fontWeight: 600 }}>
                        Sign Up
                    </Typography>
                    <form onSubmit={handleSignup}>
                        <TextField
                            style={inputStyle}
                            fullWidth
                            type="text"
                            label="Enter Name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            error={!!errors.name}
                            helperText={errors.name}
                        />
                        <TextField
                            style={inputStyle}
                            fullWidth
                            label="Email"
                            variant="outlined"
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                        <TextField
                            style={inputStyle}
                            fullWidth
                            label="Password"
                            variant="outlined"
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={!!errors.password}
                            helperText={errors.password}
                        />
                        <Button style={buttonStyle} variant="contained" type="submit">
                            Sign Up
                        </Button>
                    </form>
                    <Typography>
                        Already have an account? <a href="/login" style={linkStyle}>Login</a>
                    </Typography>
                </div>
            </Paper>
        </div>
    );
}

export default SignUp;
