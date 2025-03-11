import express from 'express'


const app = express()
const port = 8080

app.get('/:code', (req, res) => {
    console.log(req.params.code);
    res.send('Paste the code after the slash "/" for redirection!!  ')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

