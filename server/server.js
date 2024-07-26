const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../dist/')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/your-angular-project/browser/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});