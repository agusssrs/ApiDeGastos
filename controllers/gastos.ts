import { Request, Response } from "express";
import Gastos, { GastosIn } from '../models/gastos';

export const getGasto = async (req: Request, res: Response) =>{
    const condition = {
        pago: false
    }

    const gasto = await Gastos.find(condition)

    res.json({
        gasto
    })
}

export const getGastoByDate = async (req: Request, res: Response) =>{
    const {fecha} = req.params;

    const gasto = await Gastos.find({fecha})

    if(gasto.length === 0){
        res.json({
            msg: 'No hiciste ningun gasto en esta fecha' 
        })
        return;
    }

    res.json({
        gasto
    })
}

export const crearGasto = async (req: Request, res: Response) =>{
    const gastosData: GastosIn =  req.body;

    const {item, fecha, titulo, monto, pago} = gastosData;

    if(!item || !fecha || !titulo || !monto){
        res.json({
            msg: 'Faltan datos. Asegurate de escribir: Numero de item, fecha, titulo, monto, y si esta pago.'
        })
        return;
    }

    const itemEnDb = await Gastos.findOne({item:item})

    if(itemEnDb){
        res.json({
            msg:'Este numero de item ya esta usado. Por favor, elija otro.'
        })
        return
    }

    const gasto = new Gastos({item, fecha, titulo, monto, pago});

    await gasto.save();

    res.json({
        msg: "Tu gasto se guardo correctamente",
        gasto
    })
}

export const updateGasto = async (req: Request, res: Response) =>{
    const {item} = req.params;

    const {...data} = req.body;

    const itemEnDb = await Gastos.findOne({item:item}) 

    if(!itemEnDb){
        res.json({
            msg:'No se ha encontrado este item'
        })
        return
    }

    const gasto = await Gastos.findOneAndUpdate({item:item}, data, {new:true})

    res.json({
        gasto
    })
}

export const deleteGasto = async (req: Request, res: Response) =>{
    const {item} = req.params;

    const itemEnDb = await Gastos.findOne({item:item})

    if(!itemEnDb){
        res.json({
            msg:'No se ha encontrado este item'
        })
        return
    }

    const gasto = await Gastos.findOneAndDelete({item: item})

    res.json({
        gasto
    })
}