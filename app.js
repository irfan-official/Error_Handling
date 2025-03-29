import express from "express"
const app = express();

app.listen(process.env.PORT || 3000, () => console.log(`Server started at http://localhost:${process.env.PORT || 3000}`))



try{
    app.get("/", (req, res) => {
        return res.status(200).send(name)
    })
    
}catch(err){  // test eror 1
    console.log(err.message)
    process.exit(1)
}

app.use((err, req, res, next) => { //test error 2
    return res.send(err.message)
})