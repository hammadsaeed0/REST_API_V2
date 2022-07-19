import express from 'express';
import { APP_PORT } from './config'
import routes from './routes'
const app = express();

// Routes Registration
app.use(('/api'),routes);

app.listen(APP_PORT, ()=> console.log(`Server is Running from ${APP_PORT}.`))
