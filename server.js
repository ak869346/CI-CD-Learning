import express from "express";
const app = express();
import sum from "./sum.js";

const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`);
})

app.get("/home", async (req,res)=> {
    res.json({msg: "I am Root"});
})

app.get("/getSum/:a/:b", async (req,res)=> {
    const {a,b} = req.params;
    res.json({ ans: sum(parseInt(a), parseInt(b)) });
})