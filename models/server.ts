import express, {Express} from "express";
import {connectDB} from '../database/config';
import gastosRoutes from '../routes/gastos';
export class Server{
    app: Express;

    constructor(){
        this.app = express();
        this.connectionDB();
        this.middelwares();
        this.routes();
    }

    async connectionDB(): Promise <void>{
        await connectDB();
    }

    middelwares(): void{
        this.app.use(express.json());
    }

    routes(): void{
        this.app.use('/gastos', gastosRoutes);
    }

    listen(): void{
        this.app.listen(8080, () => {
            console.log(`corriendo en puerto 8080`);
        })
    }
}