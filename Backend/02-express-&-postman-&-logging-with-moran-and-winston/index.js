import "dotenv/config";
import express from "express";
import logger from "./logger.js";
import morgan from "morgan";

const app = express();
const port = process.env.PORT || 3000;

const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  }),
);

app.use(express.json());

let teaData = [];
let nextID = 1;

//NOTE: Route to add a new tea
app.post("/teas", (req, res) => {
  logger.info("A post request is made to add a new tea");
  //NOTE: Access to more logs. like warn which returns a nicer colour more appropriate
  logger.warn("A post request is made to add a new tea");

  const { name, price } = req.body;
  const newTea = { id: nextID++, name, price };
  teaData.push(newTea);
  res.status(201).send(newTea);
});

//NOTE: Route to getting all of our teas
app.get("/teas", (req, res) => {
  res.status(200).send(teaData);
});

//NOTE: Returns a specific ID
app.get("/teas/:id", (req, res) => {
  //NOTE: searching through our teas array to find an id that matches the id we pass as a parameter in the url e.g http://127.0.0.1/teas/1 or teas/2
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("Tea Not Found");
  }
  //NOTE: If we get there then we have a matching tea
  res.status(200).send(tea);
});

//NOTE: Updating a tea
app.put("/teas/:id", (req, res) => {
  const teaId = req.params.id;
  const tea = teaData.find((t) => t.id === parseInt(teaId));

  if (!tea) {
    return res.status(404).send("Tea Not Found");
  }

  const { name, price } = req.body;
  tea.name = name;
  tea.price = price;

  res.status(200).send(tea);
});

app.delete("/teas/:id", (req, res) => {
  const index = teaData.findIndex((t) => t.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).send(`Tea Not Found`);
  }

  teaData.splice(index, 1);
  return res.status(204).send("Tea Successfully removed");
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}...`);
});
