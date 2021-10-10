const Base_Url ='http://localhost:8081/'

const getCurrency= async (endpoint) =>{
    const req = await fetch(`${Base_Url}${endpoint}`)
    const reqJson = await req.json()
    return reqJson
}


export default  {
    getAllCurrency: async()=>{
        return [
            {
                slug:'latest',
                items: await getCurrency('latest')
            },
            {
                slug:'all',
                items: await getCurrency('map')
            }
        ]
    }

}