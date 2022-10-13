
import express from 'express';

import employeesRouters from './routers/employees.routes.js';
import indexRouters from './routers/index.routes.js';


const app = express();


app.use(express.json());
app.use('/api/',employeesRouters);
app.use(indexRouters);
app.use((req, res, next)=>{
    res.status(404).json({
        message: 'Endpoint not found'
    })
})


export default app;