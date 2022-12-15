const express = require('express');
const cors = require('cors');

const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const whiteList = ['http://localhost:3000', 'https://chefkinapi.herokuapp.com'];
const options = {
    origin: (origin, callback) => {
        if (whiteList.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('No permitido'));
        }
    }
}
app.use(cors(options));

app.get('/api', (req, res) => {
    res.json({ mensaje: '¡Hola Mundo!' });
    // res.send('Api restsoft');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log("My port: " + port);
});