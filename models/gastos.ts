import { model, Model, Schema } from "mongoose"

export interface GastosIn{
    fecha: string,
    titulo: string,
    monto: number,
    estado: boolean
}

const GastosSchema = new Schema <GastosIn> ({
    fecha: {
        type: String,
        required: true
    },

    titulo:{
        type: String,
        required:true
    },

    monto:{
        type: Number,
        required:true
    },

    estado:{
        type: Boolean,
        required: true,
        default: false
    }
});

const Gastos: Model <GastosIn> = model <GastosIn>('Gastos', GastosSchema);

export default Gastos;