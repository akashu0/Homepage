import express from 'express'
const UserRoute         = express();
import  { getDetails,ProductDetails,Signup,Login,checkAuth,logout } from "../Controller/userController.js";

UserRoute.use(express.json());
UserRoute.use(express.urlencoded({ extended: true }))


UserRoute.get('/homeDetails',getDetails )
UserRoute.get('/ProductDetails',ProductDetails )
UserRoute.post('/login',Login )
UserRoute.post('/Signup',Signup )
UserRoute.get('/checkAuth',checkAuth )
UserRoute.get('/logout',logout )
export default UserRoute