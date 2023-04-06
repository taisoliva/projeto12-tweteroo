import express from "express"
import cors from "cors"

const app = express()
const PORT = 5000;
const user = []
const tweets = []
app.use(express.json())
app.use(cors())

app.get("/tweets", (req, res) => {
    const final = []


    user.map((item) => {
        tweets.map((u) => {
            if (item.username === u.username) { final.push({ username: item.username, avatar: item.avatar, tweet: u.tweet }) }
        })
    }

    )

    if(final.length > 10) {
        const limiteTen = []
        for(let i = 0; i<10; i++ ){
            limiteTen.push(final[i])
        }
        res.send(limiteTen)
    } else{
        res.send(final)
    }
})

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body

    console.log(req.body)
    user.push({ username: username, avatar: avatar })
    res.send("OK")
})

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body
    console.log(username)

    if ((user.find((item) => item.username === username)) !== undefined) {
        const novoTweet = { username: username, tweet: tweet }
        tweets.push(novoTweet)
        res.status(200).send("OK")
    } else {
        res.status(400).send("UNAUTHORIZED")
    }

})

app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`))