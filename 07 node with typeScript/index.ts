import express from 'express';
import reminderRouter from './router/reminders';

const app = express();

app.use(express.json())
app.use('/reminders', reminderRouter)

app.get('/', (req, res) => {
    res.send('hello world');
})
app.listen(8000, () => console.log('server started'));