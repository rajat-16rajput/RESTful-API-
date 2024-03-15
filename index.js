const express = require("express");
const users = require("./MOCK_DATA.json"); // DB
const app = express();
const PORT = 8000;

//HYBRID SERVER  with DIFFERENT ROUTES TO GET DATA IN DIFFERENT FORMATS DEPENDING ON THE DEVICE

//ROUTES
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/users", (req, res) => {
  const html = `<ul> ${users
    .map((user) => `<li>${user.last_name}</li>`)
    .join("")}</ul>`;
  res.send(html);
});

app.get("/api/users/:first_name", (req, res) => {
  const first_name = req.params.first_name;
  const user = users.find((user) => user.first_name == first_name);
  console.log(user);
  return res.json(user);
});

app.listen(PORT, () => console.log("Server started on PORT : " + PORT));
