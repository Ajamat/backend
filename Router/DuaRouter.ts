const express = require("express")
const router = express.Router();
import DuaController from '../Controllers/DuaController'
// app.get('/duas', getAllDuas);
router.get("/duas",DuaController.getAllDuas)
router.get("/duaforedit",DuaController.getDuaForEdit)

router.post("/createdua",DuaController.create)
router.put("/updatedua/:id",DuaController.updateDua)
router.delete("/deletedua/:id",DuaController.deleteDua)


export default router;