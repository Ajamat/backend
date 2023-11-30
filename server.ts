import express from 'express';
const app = express();
const PORT = 5000;
import cors from "cors";
import multer from 'multer';


app.use(express.json());
import router from "./Router/index"
app.use(cors());
app.use("/api", router)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});