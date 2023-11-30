const express = require("express")
const router = express.Router();
import DuaRoute from './DuaRouter'
import UserRoute from './UserRouter'
import PrayerRoute from './PrayerRouter'
import galleryRouter from './GalleryRouter';


router.use("/dua",DuaRoute)
router.use("/auth",UserRoute)
router.use('/uploads', express.static('uploads'));
router.use("/prayer",PrayerRoute)
router.use("/gallery",galleryRouter)


export default router;