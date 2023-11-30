import { Request, Response } from "express";
import PrayerTime from "..//Models/PrayerTimeModel/PrayerTimeModel";

const createpyertime = async (req: Request, res: Response) => {
    try {
        const drd  = await PrayerTime.create(req.body);
        console.log(drd)
        res.status(200).json({ message: "Time created successfully",drd});
    } catch (error) {
        res.status(400).json({ message: 'Error' });
    }
}

const getAllPrayerTimes = async (req: Request, res: Response): Promise<void> => {
    try {
        const allPrayerTimes = await PrayerTime.find();

        res.status(200).json({ message: 'Prayer times retrieved successfully', prayerTimes: allPrayerTimes });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Internal Server Error' });
    }
};



const updatePrayerTime = async (req: Request, res: Response): Promise<void> => {
    const {_id, time, name } = req.body;

    try {
        const updatedPrayerTime = await PrayerTime.findByIdAndUpdate(
            _id,
            { time, name },
            { new: true } 
        );

        if (!updatedPrayerTime) {
            res.status(404).json({ message: 'Prayer time not found' });
            return;
        }

        res.status(200).json({ message: 'Prayer time updated successfully', prayerTime: updatedPrayerTime });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getPrayerForEdit = async (req: Request, res: Response): Promise<void> => {

    try {
        const allPrayerTimes = await PrayerTime.findOne({_id:req.query._id});
        console.log(req.query._id)
        res.status(200).json({ message: 'Prayertime retrieved successfully', prayerTime: allPrayerTimes });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: 'Internal Server Error' });
    }
};











export default {createpyertime,getAllPrayerTimes,updatePrayerTime,getPrayerForEdit};