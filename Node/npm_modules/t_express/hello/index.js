const express = require("express");
const birds = require('./birds')

const app = express();
const port = 3000;

const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}

app.use(requestTime)

app.get('/', (req, res) => {
    let responseText = 'Hello World!<br>'
    responseText += `<small>Requested at: ${req.requestTime}</small>`
    res.send(responseText)
})

app.get("/", (req, res) => {
    res.send("Hello World1234!");
});

app.get("/example/b", (req, res, next) => {
    console.log("the response will be sent by the next function ...");
    next();
}, (req, res) => {
    res.send("Hello from B!");
});

const cb0 = function (req, res, next) {
    console.log('CB0')
    next()
}

const cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}

const cb2 = function (req, res) {
    res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])


app.get('/example/d', [cb0, cb1], (req, res, next) => {
    console.log('the response will be sent by the next function ...')
    next()
}, (req, res) => {
    res.send('Hello from D!')
})

app.use('/birds', birds);

app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

