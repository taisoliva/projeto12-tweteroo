import express from "express"

const app = express()
const PORT = 5000;
const user = []
const tweets = []
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

app.post("/tweets", (req,res) => {
    const {username, tweet} = req.body
    console.log(username)

   if( (user.find((item) => item.username === username )) !== undefined){
        const novoTweet = {username: username, tweet:tweet}
        tweets.push(novoTweet)
        res.status(200).send("OK")
   } else{
    res.status(400).send("UNAUTHORIZED")
   }
    
})

app.listen(PORT, ()=> console.log(`Escutando naw porta ${PORT}`))