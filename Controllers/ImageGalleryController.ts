
import { Request, Response } from "express";
import ImageGallery from "..//Models/ImageGalleryModel/ImageGalleryModel";

export default {
    creatabout: async (req: Request, res: Response) => {
        try {
            const {about} = req.body;
            const image = req.file?.path;
            const abc  = await ImageGallery.create({image,about});
            res.status(200).json({ message: "About created successfully",abc });
        } catch (error) {
            res.status(400).json({ message: 'Error' });
        }
    },
    getAllAbout: async (req: Request, res: Response) => {
        try {
            const aboutObjects = await ImageGallery.find();
            res.status(200).json({ aboutObjects });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}