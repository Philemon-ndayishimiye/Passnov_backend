
const express = require('express');

const app = express();

const cors = require('cors')

const dbconn = require('./dbconfig/db');

const suggestRoutes = require('./Routes/TaskRoutes');

const categoryRoutes = require('./Routes/categoryRoutes')


const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;


app.use(express.json());
app.use(cors());

app.use('/api/suggest' , suggestRoutes);
app.use('/api/category' , categoryRoutes);

(async () => {
  await dbconn(); 

  
  app.use('/', (req,res)=>{
    res.json('HELLO PASSINOVE SERVER')
  })
  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
})();

