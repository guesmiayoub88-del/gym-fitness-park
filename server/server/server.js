
import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";

// Charger le fichier .env situé dans le même dossier
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
const PORT = Number(process.env.PORT || 5000);

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://guesmiayoub88-del.github.io"
  ]
}));

app.use(express.json());

// Connexion à MySQL
const db = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "gym_fitness_park",
  waitForConnections: true,
  connectionLimit: 10
});

// Tester la connexion à la base de données
app.get("/api/health", async (req, res) => {
  try {
    await db.query("SELECT 1");

    res.json({
      success: true,
      message: "Backend et base de données connectés"
    });
  } catch (error) {
    console.error("Erreur MySQL:", error.message);

    res.status(500).json({
      success: false,
      message: "Connexion à la base de données impossible"
    });
  }
});

// Enregistrer une inscription
app.post("/api/inscriptions", async (req, res) => {
  try {
    const { nom, telephone, abonnement, objectif } = req.body;

    if (
      typeof nom !== "string" ||
      typeof telephone !== "string" ||
      typeof abonnement !== "string" ||
      !nom.trim() ||
      !telephone.trim() ||
      !abonnement.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Veuillez remplir les champs obligatoires."
      });
    }

    const obj = objectif == null ? "" : objectif;

    if (
      typeof obj !== "string" ||
      nom.trim().length > 100 ||
      telephone.trim().length > 20 ||
      abonnement.trim().length > 50 ||
      obj.trim().length > 100
    ) {
      return res.status(400).json({
        success: false,
        message: "Certaines informations sont invalides ou trop longues."
      });
    }

    const [result] = await db.execute(
      `INSERT INTO inscriptions
       (nom, telephone, abonnement, objectif)
       VALUES (?, ?, ?, ?)`,
      [
        nom.trim(),
        telephone.trim(),
        abonnement.trim(),
        obj.trim() || null
      ]
    );

    res.status(201).json({
      success: true,
      message: "Inscription enregistrée avec succès.",
      id: result.insertId
    });
  } catch (error) {
    console.error("Erreur inscription:", error.message);

    res.status(500).json({
      success: false,
      message: "Erreur lors de l'enregistrement de l'inscription."
    });
  }
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Backend démarré sur http://localhost:${PORT}`);
});
