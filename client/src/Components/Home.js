// // // import React, { useEffect, useState } from "react";
// // // import { useLocation, useNavigate } from "react-router-dom";
// // // import axios from "axios";

// // // function Home() {
// // //     const location = useLocation();
// // //     const navigate = useNavigate();
// // //     const [user, setUser] = useState(location.state?.user);
// // //     const [loading, setLoading] = useState(!user);

// // //     useEffect(() => {
// // //         if (!user) {
// // //             axios.get('http://localhost:3001/user', { withCredentials: true })
// // //                 .then(response => {
// // //                     if (response.data.user) {
// // //                         setUser(response.data.user);
// // //                     } else {
// // //                         navigate("/login");
// // //                     }
// // //                 })
// // //                 .catch(() => navigate("/login"))
// // //                 .finally(() => setLoading(false));
// // //         } else {
// // //             setLoading(false);
// // //         }
// // //     }, [user, navigate]);

// // //     if (loading) {
// // //         return <center><h1>Loading...</h1></center>;
// // //     }

// // //     return (
// // //         <center>
// // //             <h1 style={{color:"black", fontSize:"5rem"}}>Welcome Home {user && user.name} !!!</h1>
// // //         </center>
// // //     );
// // // }

// // // export default Home;



// // import React, { useEffect, useState } from "react";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import axios from "axios";

// // function Home() {
// //     const location = useLocation();
// //     const navigate = useNavigate();
// //     const [user, setUser] = useState(location.state?.user);
// //     const [loading, setLoading] = useState(!user);

// //     useEffect(() => {
// //         if (!user) {
// //             axios.get('http://localhost:3001/user', { withCredentials: true })
// //                 .then(response => {
// //                     if (response.data.user) {
// //                         setUser(response.data.user);
// //                     } else {
// //                         navigate("/login");
// //                     }
// //                 })
// //                 .catch(() => navigate("/login"))
// //                 .finally(() => setLoading(false));
// //         } else {
// //             setLoading(false);
// //         }
// //     }, [user, navigate]);

// //     if (loading) {
// //         return <center><h1>Loading...</h1></center>;
// //     }

// //     return (
// //         <div style={{ padding: "2rem", textAlign: "center", backgroundColor: "#f5f5f5", height: "100vh" }}>
// //             <h1 style={{ color: "black", fontSize: "5rem" }}>Welcome Home {user && user.name}!!!</h1>
            
// //             <div style={{ backgroundColor: "#fff", borderRadius: "1rem", padding: "2rem", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", maxWidth: "600px", margin: "2rem auto" }}>
// //                 <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Your Profile</h2>
                
// //                 <p><strong>Name:</strong> {user && user.name}</p>
// //                 <p><strong>Email:</strong> {user && user.email}</p>
                
// //                 {/* Add more user details here */}
// //                 <p><strong>Joined:</strong> {user && new Date(user.createdAt).toLocaleDateString()}</p>

// //                 <div style={{ marginTop: "2rem" }}>
// //                     <button 
// //                         onClick={() => navigate("/logout")}
// //                         style={{
// //                             padding: "0.8rem 1.5rem",
// //                             fontSize: "1rem",
// //                             fontWeight: "bold",
// //                             backgroundColor: "#3f51b5",
// //                             color: "white",
// //                             border: "none",
// //                             borderRadius: "1rem",
// //                             cursor: "pointer"
// //                         }}
// //                     >
// //                         Logout
// //                     </button>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Home;


// // import React, { useEffect, useState } from "react";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import axios from "axios";

// // function Home() {
// //     const location = useLocation();
// //     const navigate = useNavigate();
// //     const [user, setUser] = useState(location.state?.user);
// //     const [loading, setLoading] = useState(!user);
// //     const [editMode, setEditMode] = useState(false);
// //     const [formData, setFormData] = useState({
// //         name: user?.name || "",
// //         email: user?.email || "",
// //         phone: user?.phone || "",
// //         image: user?.image || "",
// //     });

// //     useEffect(() => {
// //         if (!user) {
// //             axios.get('http://localhost:3001/user', { withCredentials: true })
// //                 .then(response => {
// //                     if (response.data.user) {
// //                         setUser(response.data.user);
// //                     } else {
// //                         navigate("/login");
// //                     }
// //                 })
// //                 .catch(() => navigate("/login"))
// //                 .finally(() => setLoading(false));
// //         } else {
// //             setLoading(false);
// //         }
// //     }, [user, navigate]);

// //     const handleEditClick = () => {
// //         setEditMode(true);
// //     };

// //     const handleInputChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData({
// //             ...formData,
// //             [name]: value,
// //         });
// //     };

// //     const handleImageChange = (e) => {
// //         const file = e.target.files[0];
// //         if (file) {
// //             const reader = new FileReader();
// //             reader.onloadend = () => {
// //                 setFormData({
// //                     ...formData,
// //                     image: reader.result,
// //                 });
// //             };
// //             reader.readAsDataURL(file);
// //         }
// //     };

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         axios.put('http://localhost:3001/user', formData, { withCredentials: true })
// //             .then(response => {
// //                 setUser(response.data.user);
// //                 setEditMode(false);
// //             })
// //             .catch(err => console.error("Error updating user:", err));
// //     };

// //     if (loading) {
// //         return <center><h1>Loading...</h1></center>;
// //     }

// //     return (
// //         <div style={{ padding: "2rem", textAlign: "center", backgroundColor: "#f5f5f5", height: "100vh" }}>
// //             <h1 style={{ color: "black", fontSize: "5rem" }}>Welcome Home {user && user.name}!!!</h1>
            
// //             <div style={{ backgroundColor: "#fff", borderRadius: "1rem", padding: "2rem", boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", maxWidth: "600px", margin: "2rem auto" }}>
// //                 <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Your Profile</h2>
                
// //                 {!editMode ? (
// //                     <>
// //                         <p><strong>Name:</strong> {user && user.name}</p>
// //                         <p><strong>Email:</strong> {user && user.email}</p>
// //                         <p><strong>Phone:</strong> {user && user.phone}</p>
// //                         <p><strong>Joined:</strong> {user && new Date(user.createdAt).toLocaleDateString()}</p>
// //                         <img src={user && user.image} alt="Profile" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
// //                         <button onClick={handleEditClick} style={{ padding: "0.8rem 1.5rem", fontSize: "1rem", fontWeight: "bold", backgroundColor: "#3f51b5", color: "white", border: "none", borderRadius: "1rem", cursor: "pointer" }}>Edit Profile</button>
// //                     </>
// //                 ) : (
// //                     <form onSubmit={handleSubmit}>
// //                         <input
// //                             type="text"
// //                             name="name"
// //                             value={formData.name}
// //                             onChange={handleInputChange}
// //                             placeholder="Name"
// //                             required
// //                             style={{ padding: "0.5rem", margin: "0.5rem" }}
// //                         />
// //                         <input
// //                             type="email"
// //                             name="email"
// //                             value={formData.email}
// //                             onChange={handleInputChange}
// //                             placeholder="Email"
// //                             required
// //                             style={{ padding: "0.5rem", margin: "0.5rem" }}
// //                         />
// //                         <input
// //                             type="text"
// //                             name="phone"
// //                             value={formData.phone}
// //                             onChange={handleInputChange}
// //                             placeholder="Phone Number"
// //                             style={{ padding: "0.5rem", margin: "0.5rem" }}
// //                         />
// //                         <input
// //                             type="file"
// //                             name="image"
// //                             onChange={handleImageChange}
// //                             style={{ margin: "0.5rem" }}
// //                         />
// //                         {formData.image && <img src={formData.image} alt="Profile Preview" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />}
// //                         <button type="submit" style={{ padding: "0.8rem 1.5rem", fontSize: "1rem", fontWeight: "bold", backgroundColor: "#3f51b5", color: "white", border: "none", borderRadius: "1rem", cursor: "pointer" }}>Save Changes</button>
// //                     </form>
// //                 )}

// //                 <div style={{ marginTop: "2rem" }}>
// //                     <button 
// //                         onClick={() => navigate("/logout")}
// //                         style={{
// //                             padding: "0.8rem 1.5rem",
// //                             fontSize: "1rem",
// //                             fontWeight: "bold",
// //                             backgroundColor: "#3f51b5",
// //                             color: "white",
// //                             border: "none",
// //                             borderRadius: "1rem",
// //                             cursor: "pointer"
// //                         }}
// //                     >
// //                         Logout
// //                     </button>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Home;


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function Home() {
//     const navigate = useNavigate();
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [editMode, setEditMode] = useState(false);
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phoneNumber: "",
//         profileImage: "",
//     });

//     useEffect(() => {
//         axios.get("http://localhost:3001/user", { withCredentials: true })
//             .then(response => {
//                 setUser(response.data.user);
//                 setFormData({
//                     name: response.data.user.name,
//                     email: response.data.user.email,
//                     phoneNumber: response.data.user.phoneNumber || "",
//                     profileImage: response.data.user.profileImage || "",
//                 });
//             })
//             .catch(() => navigate("/login"))
//             .finally(() => setLoading(false));
//     }, [navigate]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setFormData({
//                     ...formData,
//                     profileImage: reader.result,
//                 });
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleEditClick = () => {
//         setEditMode(true);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.put("http://localhost:3001/user/update", formData, { withCredentials: true })
//             .then(response => {
//                 setUser(response.data);
//                 setEditMode(false);
//             })
//             .catch(err => console.error("Error updating user:", err));
//     };

//     const handleLogout = () => {
//         axios.post("http://localhost:3001/logout", {}, { withCredentials: true })
//             .then(() => {
//                 navigate("/login");
//             })
//             .catch(err => console.error("Error logging out:", err));
//     };

//     if (loading) {
//         return <center><h1>Loading...</h1></center>;
//     }

//     return (
//         <div style={styles.container}>
//             <h1 style={styles.welcomeText}>Welcome Home {formData.name || user.name}!!!</h1>

//             <div style={styles.profileCard}>
//                 <h2 style={styles.profileTitle}>Your Profile</h2>

//                 {!editMode ? (
//                     <>
//                         <p><strong>Name:</strong> {user.name}</p>
//                         <p><strong>Email:</strong> {user.email}</p>
//                         <p><strong>Phone:</strong> {user.phoneNumber || "N/A"}</p>
//                         <img src={user.profileImage} alt="Profile" style={styles.profileImage} />
//                         <button onClick={handleEditClick} style={styles.button}>Edit Profile</button>
//                     </>
//                 ) : (
//                     <form onSubmit={handleSubmit} style={styles.form}>
//                         <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleInputChange}
//                             placeholder="Name"
//                             required
//                             style={styles.input}
//                         />
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleInputChange}
//                             placeholder="Email"
//                             required
//                             style={styles.input}
//                         />
//                         <input
//                             type="text"
//                             name="phoneNumber"
//                             value={formData.phoneNumber}
//                             onChange={handleInputChange}
//                             placeholder="Phone Number"
//                             style={styles.input}
//                         />
//                         <input
//                             type="file"
//                             name="profileImage"
//                             onChange={handleImageChange}
//                             style={styles.input}
//                         />
//                         {formData.profileImage && (
//                             <img src={formData.profileImage} alt="Profile Preview" style={styles.profileImage} />
//                         )}
//                         <button type="submit" style={styles.button}>Save Changes</button>
//                     </form>
//                 )}

//                 <div style={{ marginTop: "2rem" }}>
//                     <button onClick={handleLogout} style={styles.button}>Logout</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// const styles = {
//     container: {
//         padding: "2rem",
//         textAlign: "center",
//         backgroundColor: "#f5f5f5",
//         minHeight: "100vh",
//     },
//     welcomeText: {
//         color: "black",
//         fontSize: "3rem",
//         textAlign: "center",
//     },
//     profileCard: {
//         backgroundColor: "#fff",
//         borderRadius: "1rem",
//         padding: "2rem",
//         boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
//         maxWidth: "600px",
//         margin: "2rem auto",
//     },
//     profileTitle: {
//         fontSize: "2rem",
//         marginBottom: "1rem",
//     },
//     profileImage: {
//         width: "100px",
//         height: "100px",
//         borderRadius: "50%",
//         margin: "1rem 0",
//     },
//     form: {
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//     },
//     input: {
//         padding: "0.5rem",
//         margin: "0.5rem",
//         width: "90%",
//         maxWidth: "400px",
//     },
//     button: {
//         padding: "0.8rem 1.5rem",
//         fontSize: "1rem",
//         fontWeight: "bold",
//         backgroundColor: "#3f51b5",
//         color: "white",
//         border: "none",
//         borderRadius: "1rem",
//         cursor: "pointer",
//         marginTop: "1rem",
//     },
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        profileImage: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:3001/user", { withCredentials: true })
            .then(response => {
                setUser(response.data.user);
                const savedData = JSON.parse(localStorage.getItem('formData'));
                if (savedData) {
                    setFormData(savedData);
                } else {
                    setFormData({
                        name: response.data.user.name,
                        email: response.data.user.email,
                        phoneNumber: response.data.user.phoneNumber || "",
                        profileImage: response.data.user.profileImage || "",
                    });
                }
            })
            .catch(() => navigate("/login"))
            .finally(() => setLoading(false));
    }, [navigate]);

    const validateForm = () => {
        if (!formData.name || !formData.email) {
            setErrorMessage("Name and Email are required.");
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setErrorMessage("Please enter a valid email address.");
            return false;
        }
        setErrorMessage(""); // Clear any previous error message
        return true;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedFormData = {
            ...formData,
            [name]: value,
        };
        setFormData(updatedFormData);
        localStorage.setItem('formData', JSON.stringify(updatedFormData));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const updatedFormData = {
                    ...formData,
                    profileImage: reader.result,
                };
                setFormData(updatedFormData);
                localStorage.setItem('formData', JSON.stringify(updatedFormData));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        setSuccessMessage("");
        setErrorMessage("");

        axios.put("http://localhost:3001/user/update", formData, { withCredentials: true })
            .then(response => {
                setUser(response.data);
                setEditMode(false);
                localStorage.removeItem('formData');
                setSuccessMessage("Profile updated successfully!");
            })
            .catch(err => {
                setErrorMessage("Error updating profile. Please try again.");
                console.error("Error updating user:", err);
            })
            .finally(() => setIsSubmitting(false));
    };

    const handleLogout = () => {
        axios.post("http://localhost:3001/logout", {}, { withCredentials: true })
            .then(() => {
                navigate("/login");
            })
            .catch(err => console.error("Error logging out:", err));
    };

    if (loading) {
        return <center><h1>Loading...</h1></center>;
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.welcomeText}>Welcome Home {user.name}!!!</h1>

            <div style={styles.profileCard}>
                <h2 style={styles.profileTitle}>Your Profile</h2>

                {/* Original Profile Info */}
                <div>
                    <p><strong>Current Name:</strong> {user.name}</p>
                    <p><strong>Current Email:</strong> {user.email}</p>
                    <p><strong>Current Phone:</strong> {user.phoneNumber || "N/A"}</p>
                    <img src={user.profileImage} alt="Current Profile" style={styles.profileImage} />
                </div>

                {editMode ? (
                    <>
                        {/* Live Preview */}
                        <h3 style={{ marginTop: "2rem", fontSize: "1.5rem" }}>Live Preview</h3>
                        <div>
                            <p><strong>Preview Name:</strong> {formData.name}</p>
                            <p><strong>Preview Email:</strong> {formData.email}</p>
                            <p><strong>Preview Phone:</strong> {formData.phoneNumber || "N/A"}</p>
                            {formData.profileImage && (
                                <img src={formData.profileImage} alt="Profile Preview" style={styles.profileImage} />
                            )}
                        </div>

                        {/* Edit Form */}
                        <form onSubmit={handleSubmit} style={styles.form}>
                            {errorMessage && <div style={styles.error}>{errorMessage}</div>}
                            {successMessage && <div style={styles.success}>{successMessage}</div>}

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                                required
                                style={styles.input}
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                required
                                style={styles.input}
                            />
                            <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                placeholder="Phone Number"
                                style={styles.input}
                            />
                            <input
                                type="file"
                                name="profileImage"
                                onChange={handleImageChange}
                                style={styles.input}
                            />
                            <button
                                type="submit"
                                style={styles.button}
                                disabled={isSubmitting} // Disable the button during submission
                            >
                                {isSubmitting ? "Saving..." : "Save Changes"}
                            </button>
                        </form>
                    </>
                ) : (
                    <button onClick={handleEditClick} style={styles.button}>Edit Profile</button>
                )}

                <div style={{ marginTop: "2rem" }}>
                    <button onClick={handleLogout} style={styles.button}>Logout</button>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: "2rem",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
    },
    welcomeText: {
        color: "black",
        fontSize: "3rem",
        textAlign: "center",
    },
    profileCard: {
        backgroundColor: "#fff",
        borderRadius: "1rem",
        padding: "2rem",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        maxWidth: "600px",
        margin: "2rem auto",
    },
    profileTitle: {
        fontSize: "2rem",
        marginBottom: "1rem",
    },
    profileImage: {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        margin: "1rem 0",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    input: {
        padding: "0.5rem",
        margin: "0.5rem",
        width: "90%",
        maxWidth: "400px",
    },
    button: {
        padding: "0.8rem 1.5rem",
        fontSize: "1rem",
        fontWeight: "bold",
        backgroundColor: "#3f51b5",
        color: "white",
        border: "none",
        borderRadius: "1rem",
        cursor: "pointer",
        marginTop: "1rem",
    },
    error: {
        color: "red",
        fontSize: "1rem",
        marginBottom: "1rem",
    },
    success: {
        color: "green",
        fontSize: "1rem",
        marginBottom: "1rem",
    },
};

export default Home;
