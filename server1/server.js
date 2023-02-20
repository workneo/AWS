const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('server 1 on port 3000');
});

app.listen(3000,()=>{
  console.log("Listning on port 3000")
})