import express from "express";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api", (req, res) => {res.status(200).json({success: true, message: "Berhasil"})});

app.listen(process.env.PORT, () => {
    console.log(`Listening at port ${process.env.PORT}`);
});
