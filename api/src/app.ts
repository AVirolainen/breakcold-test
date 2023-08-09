import express, { Application, Request, Response } from 'express';
import entitiesRouter from './routers/entities-router.js'; // import entities router
import userRouter from './routers/user-router.js'; // import entities router

const app: Application = express();

const PORT: number = 3001;

app.use('/', entitiesRouter); // use entities router at path '/entities'
app.use('/users', userRouter);

app.listen(PORT, (): void => {
  console.log('SERVER IS UP ON PORT:', PORT);
});
