const sequelize = require("sequelize")
const connection = require("../database/connection")

const gameTable = connection.define("games", {
    name:{
        type: sequelize.STRING,
        allowNull: false
    },
    price:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    year:{
        type: sequelize.INTEGER,
        allowNull: false
    }
})

//gameTable.sync({force: false }).then(()=>{
//    console.log("table crated")
//})


module.exports = gameTable;