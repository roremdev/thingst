import express from 'express';
import config from './config/config';
import index from './routes/index';
import task from './routes/api/task';

const { mode, port } = config;
const app = express();

app.use(express.json());
app.use('/', index);
app.use('/task', task);

if (mode !== 'test')
    app.listen(port, () => console.log(`Server ${mode} ${port}`));
export default app;
