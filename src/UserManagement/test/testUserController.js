var history = require("../../HistoricalEvent/modelo/HistoricalEventController.js");
var event = require("../../HistoricalEvent/modelo/HistoricalEvent.js");
var experience = require("../../InfoAndExperiences/modelo/InfoAndExperiences.js");
var info = require("../../InfoAndExperiences/modelo/InfoAndExperiencesController.js");
var usersList = require("../modelo/UserController.js");
var user = require("../modelo/User.js"),
assert = require("assert");

var member = new user("Dylan", "lp_90@gmail.com", true);
var member2 = new user("Laura", "l_jimenez@gmail.com", false);

var listUsers = new usersList();
assert(listUsers, "Creado controlador");

assert.equal(listUsers.findUser(member), "-1");
listUsers.addUser(member);
assert.equal(listUsers.getUsersList().length, "1");
assert.equal(listUsers.findUser(member), "0");
assert.equal(member.getSubscription(), true);

listUsers.addUser(member2);
listUsers.deleteUser(member);
assert.equal(member.getSubscription(), false);
assert.equal(listUsers.getUsersList().length, "1");

listUsers.modifyUser(member2, member);
assert.equal(listUsers.getUsersList()[0].name, "Dylan");

var controllerEH = new history();
var historicalEvent = new event("Día del orgullo", 28, 6, 2020, "Día de celebración y reclamación de los derechos del colectivo", "");
controllerEH.addHistoricalEvent(historicalEvent);

var controllerIAE = new info();
var experience1 = new experience("Trans", "Que no se identifica con el género asignado al nacer", "lp_90@gmail.com");
controllerIAE.addInfoAndExperiences(experience1);

assert.equal(listUsers.sendInfoToUsers(controllerEH, controllerIAE), "Evento diario: Día del orgullo Día de celebración y reclamación de los derechos del colectivo\n" + "Experiencia diaria: Trans Que no se identifica con el género asignado al nacer \n");



console.log("El controlador de los usuarios ha pasado todos los tests");

