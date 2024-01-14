import express from "express";
// 由于async的函数是异步的，当middleware用了async函数就会直接返回，从而异常不能捕捉到
import 'express-async-errors';


const app = express();

app.get('/', async (req, res) => {
    throw new Error('Uoops!');
});

app.get('/async_err', async (req, res, next) => {
    try {
        // Async code that might throw an error
        const result = await someAsyncFunction();
        res.json({ result });
    } catch (error) {
        // If an error occurs, pass it to the error-handling middleware
        next(error);
    }
});

app.use((err, req, res, next) => {
    res.status('500').send('Internal Server Error!');
});

app.listen(3000, () => {
    console.log('Server is running.');
});