const express = require('express');
const cors= require('cors');
const app=express();

require("dotenv").config();

const port = process.env.PORT||3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));



//for user Routes
const userRoutes=require('./server/routes/user');
app.use('/user',userRoutes);

// admin routes
const adminRoutes=require('./server/routes/admin');
app.use('/admin',adminRoutes);



app.listen(3001,()=>{
    console.log(`Listening to port ${port}`);
})
