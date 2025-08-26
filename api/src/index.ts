import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ status: 'ok' });
});

const port = 4000;
app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
