import mongoose from "mongoose";

export const connectDB = async (): Promise <void> =>{
    try {
        await mongoose.connect('mongodb+srv://AgustinMancini:Zondaagu1603@cluster.e4gfdck.mongodb.net/');
        console.log('Base de datos online');
        
    } catch (error) {
        console.log(error);
        throw new Error('Se ha producido un error, por favor intentelo nuevamente');
        
    };
};