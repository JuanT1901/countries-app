const express = require("express");
const countryRouter = require("./country.router");
const routerCity = require("./city.router");
const routerDegree = require("./degree.router");
const routerStudent = require("./student.router");
const router = express.Router();

// colocar las rutas aquí
router.use("/countries", countryRouter);
router.use("/cities", routerCity);

//Rutas ejercicio

router.use("/degrees", routerDegree);
router.use("/students", routerStudent);

module.exports = router;