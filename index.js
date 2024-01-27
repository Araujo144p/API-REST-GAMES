const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const connection = require("./database/connection")
const gameTable = require("./games/Games")

app.get("/games", (req, res)=>{  
    gameTable.findAll({raw: true}).then(game => {
        var arr = []
        game.forEach(element => {
            var games = {
                id: element.id,
                name: element.name,
                price: element.price,
                year: element.year
            }
            arr.push(games)
            
        })
        res.json(arr)
        res.status = 200;
    })
    
})

app.get("/game/:id", (req,res)=>{
    let id = req.params.id;
    if(isNaN(id)){
        res.sendStatus(400)
    }
    else{
        id = parseInt(id)
        gameTable.findOne({where:{id: id}}).then(game =>{
            if(game == undefined || game == null){
                res.sendStatus(404);                      
            }
            else{
                var games = {
                    id: game.id,
                    name: game.name,
                    price: game.price,
                    year: game.year
                }
                res.statusCode = 200
                res.json(games)  
            }
        })
    }
})

app.post("/game", (req,res)=>{
    var {name, price, year} = req.body;
    price = String(price)
    year = String(year)
    if(name == undefined || !(isNaN(name))){
        res.sendStatus(400)
    }
    else{
    if([name, price, year].some(campo => campo.trim().length === 0) || [price, year].some(campo => isNaN(campo))){
        res.sendStatus(400)
    }
    else{
        gameTable.create({
            name: name,
            price: price,
            year: year
        }).then(()=>{
            res.sendStatus(200)
        })
    }}
})

app.delete("/game/:id", (req,res)=>{
    let id = req.params.id;
    if(isNaN(id)){
        res.sendStatus(400)
    }
    else{
        id = parseInt(id)
        gameTable.destroy({where:{id: id}}).then(element =>{
            if(!element){
                res.sendStatus(404)
            }
            else{
                res.sendStatus(200)
            }
        })

    }
})

app.put("/game/:id", (req,res)=>{
    let id = req.params.id;
    if(isNaN(id)){
        res.sendStatus(400)
    }
    else{
        id = parseInt(id)
        var {name, price, year} = req.body;
            if([name, price, year].some(campo => String(campo).trim().length === 0) || [price, year].some(campo => isNaN(campo))){
                res.sendStatus(400)
            }
            else{
                gameTable.update({name: name, price: price, year: year},{where: {id: id}}).then(game =>{
                    if(game.some(element => !element)){
                        res.sendStatus(404)
                    }
                    else{
                        res.sendStatus(200)
                    }     
                })
            }
    }
})

app.listen(8080, ()=>{
    console.log("server is running")
})