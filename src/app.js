import express from "express"

const app = express()
const PORT = 5000;

app.get("/", (req,res) => {
    res.send("Ola vc acessou sua API")
})

app.listen(PORT, ()=> console.log(`Escutando na porta ${PORT}`))