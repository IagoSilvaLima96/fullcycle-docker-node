import express from "express";
import { faker } from "@faker-js/faker";
import { Repository } from "./repository.js";

const app = express();
app.set("view engine", "ejs");
const repository = new Repository();

app.get("/", (req, res) => {
  handle(req, res);
});

async function createPerson() {
  await repository.savePerson(faker.person.fullName());
}

async function getPersons() {
  return await repository.getPersons();
}

async function handle(req, res) {
  await createPerson();
  const data = await getPersons();
  res.render("index", { data });
}

const port = 8080;
app.listen(8080, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
