const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/contact', (req, res)=>{
    res.send("<h3>You are doing well! </h3>")
})

app.put('/update', (req, res)=>{
    res.send("<h3>You are updating well! </h3>")
})

app.delete('/contact', (req, res)=>{
    res.send("<h3>You are eliminating well! </h3>")
})

app.patch('/contact', (req, res)=>{
    res.send("<h3>You are patching well! </h3>")
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))