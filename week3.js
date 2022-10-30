// const express = require("express");
import express from 'express'
import router from './modules/user/user.routes.js';
const server = express();
// const userRouter = require("./modules/user/user.routes")
server.use(express.json())
server.use(userRouter)
import userRouter from './modules/user/user.routes.js'




server.listen(3000, () => {
    console.log("server is running");
})