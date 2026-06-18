import express from 'express';
import cors from "cors";

const app = express();

const port = 3000;

app.use(express.json());

app.use(cors());
app.get('/', (req, res) => {
  res.send('World!');
});

app.post('/', (req, res) => {
  console.log(req.body);

  res.send('Form submitted successfully!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});