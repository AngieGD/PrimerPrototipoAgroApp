import {Request , Response } from 'express';

class IndexControler {
    public index (req:Request , res:Response) {
        res.json({text: 'API Is/api/games'})

    }
};

export const indexControler = new IndexControler();