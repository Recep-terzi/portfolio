const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


const app = express()
const PORT = 5000;

app.use(cors());
app.use(express.json())

app.use('/api/projects', require('./routes/projects'));
app.use('/api', require('./routes/auth'));

mongoose.connect('mongodb+srv://recepterzi3467:Zonguldak_67@portfolio.ouw7ypf.mongodb.net/?retryWrites=true&w=majority&appName=portfolio', {
   useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));



app.listen(PORT, () => {
    console.log('Server is Running.')
})