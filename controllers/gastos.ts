import { Request, Response } from "express";
import Gastos, { GastosIn } from '../models/gastos';

export const getGasto = async (req: Request, res: Response) =>{
    const condition = {
        estado: true
    }

    const gasto = await Gastos.find(condition)

    res.json({
        gasto
    })
}

export const getGastoByDate = async (req: Request, res: Response) =>{
    const {fecha} = req.params;

    const gasto = await Gastos.find({fecha})


    res.json({
        gasto
    })
}

export const crearGasto = async (req: Request, res: Response) =>{
    const gastosData: GastosIn =  req.body;

    const gasto = new Gastos(gastosData);

    await gasto.save();

    res.json({
        msg: "Tu gasto se guardo correctamente",
        gasto
    })
}