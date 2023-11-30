const express = require('express');
const mongoose = require('mongoose')

import { Request, Response } from "express";
import Dua from "../Models/DuaModel/DuaModel";


// GetAllDua
const getAllDuas = async (req: Request, res: Response): Promise<void> => {
    try {
        const allDuas = await Dua.find();

        res.status(200).json({ message: 'Duas retrieved successfully', duas: allDuas });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
// find by id
const getDuaForEdit = async (req: Request, res: Response): Promise<void> => {

    try {
        // const {id} = req.params
        // console.log(id)
        const allDuas = await Dua.findOne({_id:req.query._id});
        console.log(req.query._id)

        res.status(200).json({ message: 'Duas retrieved successfully', duas: allDuas });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Create Dua 
const create= async (req: Request, res: Response): Promise<void> => {
    const { dua, magfirat } = req.body;
    console.log(dua,magfirat)
    try {
        if (!dua || !magfirat) {
            res.status(400).json({ message: 'Required field missing' });
            return;
        }

        const abc  = await Dua.create({ dua, magfirat });
        res.status(200).json({ message: "Dua created successfully", abc });
    } catch (error) {
        res.status(400).json({ message: 'Error' });
    }
}

// Update Dua by ID
const updateDua = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params; 
    const { dua, magfirat } = req.body; 

    try {
        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            res.status(400).json({ message: 'Invalid Dua ID' });
            return;
        }

        const updatedDua = await Dua.findByIdAndUpdate(
            id,
            { dua, magfirat },
            { new: true } 
        );

        if (!updatedDua) {
            res.status(404).json({ message: 'Dua not found' });
            return;
        }

        res.status(200).json({ message: 'Dua updated successfully', updatedDua });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: 'Internal Server Error' });
    }
};






// Delete Dua 
const deleteDua = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params; // Assuming you send the Dua ID as a URL parameter
    console.log(id)
    try {
        // Check if the ID is valid (optional step)
        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            res.status(400).json({ message: 'Invalid Dua ID' });
            return;
        }

        // Find the Dua document by ID and delete it
        const deletedDua = await Dua.findByIdAndDelete(id);

        // If no document was found with the provided ID
        if (!deletedDua) {
            res.status(404).json({ message: 'Dua not found' });
            return;
        }

        // Send a success response with the deleted Dua document
        res.status(200).json({ message: 'Dua deleted successfully', deletedDua });
    } catch (error) {
        // Handle any errors that occur during the deletion process
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


export default {getAllDuas,  create,deleteDua,updateDua,getDuaForEdit };