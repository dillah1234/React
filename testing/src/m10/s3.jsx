import React, { useState, useEffect } from "react";

export default function TextLogger() {
    const [text, setText] = useState(""); // State untuk menyimpan nilai teks
    const [updatedText, setUpdatedText] = useState(""); // State untuk menyimpan nilai teks yang diperbarui

    // useEffect dengan dependency array berisi 'text'
    useEffect(() => {
        console.log(`Teks berubah menjadi: ${text}`);
    }, [text]); // Efek hanya dijalankan ketika 'text' berubah

    // Fungsi untuk memperbarui teks sesuai input pengguna
    const handleUpdateText = () => {
        setText(updatedText); // Memperbarui state 'text' dengan nilai 'updatedText'
    };

    // Styling dengan CSS-in-JS
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            backgroundColor: "#f9f9f9",
            fontFamily: "'Poppins', sans-serif",
            color: "#34495e",
        },
        card: {
            backgroundColor: "#ffffff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "400px",
            textAlign: "center",
        },
        input: {
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "8px",
        },
        button: {
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            marginBottom: "15px",
        },
        buttonHover: {
            backgroundColor: "#2980b9",
        },
        textDisplay: {
            fontSize: "18px",
            fontWeight: "bold",
            color: "#2c3e50",
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <input
                    type="text"
                    style={styles.input}
                    value={updatedText}
                    onChange={(e) => setUpdatedText(e.target.value)}
                    placeholder="Masukkan teks"
                />
                <button
                    style={styles.button}
                    onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                    onClick={handleUpdateText}
                >
                    Update Teks
                </button>
                <p style={styles.textDisplay}>Teks saat ini: {text}</p>
            </div>
        </div>
    );
}
