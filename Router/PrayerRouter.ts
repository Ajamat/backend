const express = require("express")
const router = express.Router();
import PrayerTimeController from "../Controllers/PrayerTimeController";
router.get("/prayerforedit",PrayerTimeController.getPrayerForEdit)
router.post("/createtime",PrayerTimeController.createpyertime)
router.get("/prayertime",PrayerTimeController.getAllPrayerTimes)
router.put("/updateprayertime",PrayerTimeController.updatePrayerTime)


export default router;