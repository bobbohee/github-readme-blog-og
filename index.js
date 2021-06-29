const express = require('express');
const app = express();
const port = 3000;

const indexRouter = require('./routes/index.js');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

module.exports = app;