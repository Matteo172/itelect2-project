import express from "express";
import router from "./routes/index.js";
import "dotenv/config"; 

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});