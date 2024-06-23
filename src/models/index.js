const City = require("./City");
const Country = require("./Country");
const Degree = require("./Degree");
const Student = require("./Student");

City.belongsTo(Country); // Una ciudad pertenece a un país
Country.hasMany(City); // Un país tiene muchas ciudades

//Asociaciones ejercicio

Student.belongsTo(Degree);
Degree.hasMany(Student);