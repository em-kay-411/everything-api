const express = require('express');
const app = express();
const arithmeticOperationsRoute = require('./routes/arithmeticOperations');
const newsRoute = require('./routes/news');
const stringManipulationRoute = require('./routes/stringManipulation');

app.use('/arithmetic-operations', arithmeticOperationsRoute);
app.use('/news', newsRoute);
app.use('/string-manipulation', stringManipulationRoute);

app.listen(8080, () => {
    console.log('Server started on 8080');
})