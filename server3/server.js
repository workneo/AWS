const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('server 3 on port 3002');
});

app.get("/abc",(req,res)=>{
  res.send("/abc route bae on server3")
})

app.listen(3002,()=>{
  console.log("Listning on port 3002")
})