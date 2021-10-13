import express from 'express';
import config from './config/config';
import index from './routes/index';

const { mode, port } = config;
const app = express();

app.use(express.json());
app.use('/', index);

if (mode !== 'test')
    app.listen(port, () => console.log(`Server ${mode} ${port}`));
export default app;
