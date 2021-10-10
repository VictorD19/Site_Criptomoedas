const express = require("express");
const app = express();
const axios = require("axios").default;
const cors = require("cors");
// const {getListLaster} = require("./funciones.js")

// ---------------- funções ----------------


const getData = async(res, url)=>{
  
  const instance = axios.create({
    baseURL: 'https://pro-api.coinmarketcap.com',
    timeout: 1000,
    headers: {"X-CMC_PRO_API_KEY": "b62ae2b5-fca1-459f-a08c-1656a67fdc4b"}
  });

  try {
    const { data } = await instance.get(url)
    return res.send(data)
    
  } catch (error) {
    return res.send({"error": error})
    
  }
}

const port = 8081;
app.use(cors());

  // criação de instacia de url bas
app.get("/latest", (req, res) => {
  getData(res,'/v1/cryptocurrency/listings/latest')
});

app.get('/map',(req,res)=>{
  getData(res,'/v1/cryptocurrency/map')
})



app.listen(port, () =>
  console.log(`Servidor iniciado rodando no port ${port}`)
);
