import { model, Model, Schema } from "mongoose"

export interface GastosIn{
    item: number,
    fecha: string,
    titulo: string,
    monto: number,
    pago: boolean
}

const GastosSchema = new Schema <GastosIn> ({
    item: {
        type: Number,
        require:true,
        unique:true
    },

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

    pago:{
        type: Boolean,
        required: true,
        default: false
    }
});

const Gastos: Model <GastosIn> = model <GastosIn>('Gastos', GastosSchema);

export default Gastos;