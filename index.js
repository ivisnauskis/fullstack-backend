const express = require("express");
var morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
      JSON.stringify(req.body),
    ].join(" ");
  })
);
app.use(cors());
app.use(express.static("build"));

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];

app.get("/info", (request, response) => {
  const count = persons.length;
  const date = new Date();
  response.send(`
  <div>
    <h4>Phonebook has info for ${count} people</h4>
    <h3>${date}</h3>
  </div>`);
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((p) => p.id == id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((p) => p.id !== id);

  response.status(204).end();
});

const generateRandomId = () => {
  const id = Math.floor(Math.random() * 1000000);
  return id;
};

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "You must provide name and number",
    });
  }

  const pers = persons.find(
    (p) => p.name.toLowerCase().trim() === body.name.toLowerCase().trim()
  );

  if (pers) {
    return response.status(400).json({
      error: "Name must be unique",
    });
  }
  const person = {
    name: body.name,
    number: body.number,
    id: generateRandomId(),
  };

  persons = persons.concat(person);
  response.json(person);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
