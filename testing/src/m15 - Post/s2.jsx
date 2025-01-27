import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import {
  createBrowserRouter,
  Link,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import { ProductDetail, ProductList } from "../m14/soal 2/components";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    // setToken(null);
  
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      })
      .then((response) => {
        setMessage("Login Berhasil!");
        const token = response.data.token;
        setToken(token);
        localStorage.setItem("token", token); // Simpan token di localStorage
        console.log(response.data.token);

        if (token) {
          navigate("/product");
        }
      })
      .catch((error) => {
        setMessage(
          error.response?.data?.message ||
            "Login Gagal! Periksa kredensial Anda."
        );
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Login</h1>
        <form onSubmit={handleLogin} style={styles.form}>
          <label style={styles.label}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
          <Link to="/product" style={styles.link}>
            Belum Punya Akun? Daftar Sekarang
          </Link>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f3f4f6",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "30px 40px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333333",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    textAlign: "left",
    fontSize: "14px",
    color: "#555555",
    fontWeight: "500",
  },
  input: {
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
  },
  inputFocus: {
    borderColor: "#3b82f6",
  },
  button: {
    padding: "10px",
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  buttonHover: {
    backgroundColor: "#2563eb",
  },
  message: {
    marginTop: "15px",
    fontSize: "14px",
  },
};

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/product", element: <ProductList /> },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
