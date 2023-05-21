import express from 'express'
import { getData } from './controllers/dataController.js'
import cors from 'cors'
const app = express()
const port = 3000

app.use(cors())
app.get('/api/getdata', async (req, res) => {
  let url = req.query.url.toString()
  try{
    let response = await getData(url)
    res.status(200).json({res: response})
  }
  catch(e){
    res.send('Something wrong')
  }
})
const trt= "Toufiq\'s";
app.listen(port, () => {
  console.log(`${trt} app listening on port ${port}`)
})