const express = require('express')
const cors=require("cors")
const xlsx=require("xlsx")
const app = express()
app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.get('/services',(req, res)=> {
  
  let wb=xlsx.readFile("data.xlsx");
  let ws=wb.Sheets["services"];
  let data=xlsx.utils.sheet_to_json(ws);
  res.send(data);

})
const _PORT=process.env.PORT||3000;
app.listen(_PORT)
