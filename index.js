const express = require('express');
const path = require('path');
const app = express();
const users = require('./routes/userRoute');

app.use(express.urlencoded({extended: true}))

app.use(users);
app.set('TITLE', 'Node JS')
app.set('PORT', 3001);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
	res.render('index', {val: app.get('TITLE')})
})

app.listen(app.get('PORT'), () => console.log('Knock Knock'));
