const express = require('express');
const app = express();
const NS = require('netschoolapi');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const user = new NS({
  origin: 'your-origin',
  login: 'your-login',
  password: 'your-password',
  school: 'your-school',
});

const diaryData = {};

app.post('/diary', async (req, res) => {
  const { date } = req.body;
  if (diaryData[date]) {
    res.json(diaryData[date]);
  } else {
    try {
      const diary = await user.diary({
        start: date,
        end: date,
      });
      const diaryJSON = diary.toJSON();
      diaryData[date] = diaryJSON;
      res.json(diaryJSON);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error');
    }
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
