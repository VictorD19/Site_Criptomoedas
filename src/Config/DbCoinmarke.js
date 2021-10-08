const myInit = { method: 'GET',
               headers:{"X-CMC_PRO_API_KEY":'b62ae2b5-fca1-459f-a08c-1656a67fdc4b',
               mode: 'cors',}};
const BASE_URL = 'https://pro-api.coinmarketcap.com/'

const getCurrency = async(endpoint)=>{
    const req = await fetch(`${BASE_URL}${endpoint}`,myInit)
    const json = await req.json()
    return json
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAllCurrency: async()=>{
        return [
            {
                slug:'All',
                items: await getCurrency('v1/cryptocurrency/map')
            }
        ]
    }
       
}