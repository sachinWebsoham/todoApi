import express from 'express';
import { LIST } from '../../model/list.js';
import { Error } from 'mongoose';
const routes = express.Router();



// create data in table 
routes.post('/', async(req,res) => {
    const newList = new LIST(req.body)
    try {
        const list = await newList.save();
       if(!list) throw Error('something went wrong') 
       
       res.status(200).json(list);

    } catch (error) {
        res.status(400).json({msg:error}); 
    }
})

// get all data read 
routes.get('/', async(req,res)=> {
    try {
       const list = await LIST.find() 
       if(!list) throw Error('data not found')
       res.status(201).json(list);
    } catch (error) {
        res.status(400).json({msg:'error'})
    }
})

// delete data 
routes.delete('/:id', async(req,res) => {
    try {
        const list = await LIST.findByIdAndDelete(req.params.id);
        console.log(list)
        if(!list) throw Error('NOT FOUND');
        res.status(200).json({success:true})
    } catch (error) {
       res.status(400).json({msg:error}) 
    }
})

// update data 
routes.patch('/:id', async(req,res) => {
    try {
        const list = await LIST.findByIdAndUpdate(req.params.id, req.body);
        console.log(list)
        if(!list) throw Error('NOT FOUND');
        res.status(200).json({success:true})
    } catch (error) {
       res.status(400).json({msg:error}) 
    }
})
export default routes ;
