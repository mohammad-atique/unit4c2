const mongoose = require("mongoose");
const connect = () =>{
    return mongoose.connect("mongodb+srv://atique:Pass%40%23890@atique.26wxl.mongodb.net/coding?retryWrites=true&w=majority")
}

module.exports = connect;