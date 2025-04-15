import express from 'express';
import {
  createCitation,  
  getCitationById,
  getAllCitations,
  updateCitation
} from '../controllers/CitationsController.js'; // Note the extension



const router = express.Router();

router.get('/', getAllCitations);
router.get('/:id', getCitationById);
router.post('/', createCitation);
router.put('/:id', updateCitation);



export default router;