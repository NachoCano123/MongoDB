import express,{Request, Response} from "npm:express@4.18.2" //https://www.npmjs.com/package/express
import mongoose from "npm:mongoose@7.6.3"
await mongoose.connect("mongodb+srv://nacho:12345@cluster0.3aayvs9.mongodb.net/pruebadatabase?retryWrites=true&w=majority")
const miapp = express()

miapp.listen(3000, () =>
{
  console.log("success")
})
