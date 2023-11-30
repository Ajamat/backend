const express = require("express")
const router = express.Router();
import GalleryController from '../Controllers/ImageGalleryController'
import {upload} from '../FileUploads'
router.post("/create",upload,GalleryController.creatabout)
router.get("/get-all-about", GalleryController.getAllAbout);
export default router;