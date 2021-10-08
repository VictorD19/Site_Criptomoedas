const UrlBase = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency';


const getListLaster = async()=>{
    const requestOptions = {
        method: 'GET',
        // uri: `${UrlBase}/listings/latest`,
        headers: {
          'X-CMC_PRO_API_KEY': 'b62ae2b5-fca1-459f-a08c-1656a67fdc4b'
        },
        json: true,
        gzip: true
      };
     
      const req = await fetch(`${UrlBase}/listings/latest`,requestOptions)
      const json = await req.json()

      return json
}

module.exports = {
    getListLaster
}


 