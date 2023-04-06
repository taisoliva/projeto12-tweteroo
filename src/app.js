import express from "express"

const app = express()
const PORT = 5000;
const user = []
app.use(express.json())

app.get("/", (req,res) => {
    res.send(user)
})

app.post("/sign-up", (req, res) =>{
    const {username, avatar} = req.body

    console.log(req.body)
    user.push({username:username, avatar:avatar})
    res.send("OK")
})

app.listen(PORT, ()=> console.log(`Escutando na porta ${PORT}`))