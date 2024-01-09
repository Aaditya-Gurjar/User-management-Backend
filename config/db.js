const mongoose = require('mongoose')
require('dotenv').config();
const connectToDb = async()=>{
    const res = await mongoose.connect(process.env.MONGO_URI)
    .then((conn)=>{
        console.log(`Connected to DataBase : ${conn.connection.host}`);
    })
    .catch((err)=>{
        console.log("Error Occured in connecting to DB : ", err)
        process.exit(1);

    });
}

module.exports =  connectToDb;