const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('server 2 on port 3001');
});

app.listen(3001,()=>{
  console.log("Listening on port 3001")
})