const express = require('express');
const { processTask } = require('../ml-model/ai-service');

const app = express();
app.use(express.json());

app.post('/task', (req, res) => {
  const result = processTask(req.body.text);
  res.json(result);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
