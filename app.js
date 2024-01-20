var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');
require ('dotenv').config();
 const mongoose = require ('mongoose')
var indexRouter = require('./routes/index');
mongoose.set('strictQuery', true)
const passport = require('passport')
var cookieParser = require('cookie-parser');

const cors = require('cors')


swaggerJsdoc = require("swagger-jsdoc"),
swaggerUi = require("swagger-ui-express");

const port = process.env.PORT || 5000;

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*passport */
app.use(passport.initialize())
require ('./security/passport')(passport);

app.listen(port,()=>{
    console.log(`http//localhost:${port}`)
})

app.use('/api', indexRouter);
mongoose.connect('mongodb+srv://Nour_gh:Nejib_legsaier12@cluster0.e29a8bn.mongodb.net/auth?retryWrites=true&w=majority')
.then(()=>console.log("connected to db"))
.catch(err=>console.log(err.message))

const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "openapi documentation",
        version: "1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
          contact: {
            name: "Nour Ghsaier",
            email: "nourghsaier712@gmail.com",
          },
      },
      servers: [
        {
          url: "http://localhost:3600",
        },
      ],
    },
    apis: ["app.js"],
  };
  const specs = swaggerJsdoc(options);
app.use(
  "/api/register",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);
///////////////swagger configuration///////////////////
/**
 * @swagger
 * components:
 *   schemas:
 *     user:
 *       type: object
 *       required: true
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         confirm:
 *           type: string
 *         role:
 *           type: string
 * 
 */
 
/**
 * @swagger
 * tags:
 *   name: users
 *   description: The users managing API
 * /api/register:
 *   post:
 *     tags: [register]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       500:
 *         description: Some server error
 *
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     login:
 *       type: object
 *       required: true
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 * 
 */
 
/**
 * @swagger
 * tags:
 *   name: users
 *   description: The login managing API
 * /api/login:
 *   post:
 *     tags: [login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/login'
 *     responses:
 *       200:
 *         description: user connected.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/login'
 *       500:
 *         description: Some server error
 *
 */

module.exports = app;