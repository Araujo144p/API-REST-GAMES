const sequelize = require("sequelize")

const connection = new sequelize('gameapi', 'root', '123456789',{
    local: 'localhost',
    dialect: 'mysql'
})

connection.authenticate()
          .then(()=>{
            console.log("back-end is running")
          })
          .catch(err =>{
            console.log(err)
          })



module.exports = connection;