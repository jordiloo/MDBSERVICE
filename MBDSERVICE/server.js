const mongoose = require('mongoose');
express = require('express')
app=express();

const port = process.env.PORT || 3000;
mongoose.connect('mongodb://127.0.0.1:27017/Activities', {
useNewUrlParser: true,
});
// Create a Schema object
const activitySchema = new mongoose.Schema({
activity: { type: String, required: true },
});
// This Activitry creates the collection called activitimodels
const Activitymodel = mongoose.model('Activity', activitySchema);
app.get('/', async (req, res) => {
const task1 = new Activitymodel({
activity: 'task 1',
});
try {
    await Activitymodel.insertMany([task1]);
    console.log('successfully created db');
  } catch (error) {
    console.log(error);
  }

  res.send(`<h1>Document Added</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});