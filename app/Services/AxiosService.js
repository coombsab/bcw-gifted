// @ts-ignore
export const sandboxServer = new axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/',
  timeout: 3000
})
// @ts-ignore
export const giphyServer = new axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs/search',
  timout: 3000,
  params: { api_key: 'PKCC7utEVmo55VxTHcdC6soAgftkKXMU' }
})
