import express from "express";
import "dotenv/config";

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {res.status(200).json({success: true, message: "Berhasil"})});
app.get("/", (req, res) => {res.status(200).json({success: true, message: "Test"})})

app.listen(process.env.PORT, () => {
    console.log(`Listening at port ${process.env.PORT}`);
});