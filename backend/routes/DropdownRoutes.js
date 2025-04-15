import express from 'express';
import {
  getOfficers,
  getViolations,
  getDispositions,
  getMakes,
  getStates
} from '../controllers/DropdownController.js';

const router = express.Router();

router.get('/officers', getOfficers);
router.get('/violations', getViolations);
router.get('/dispositions', getDispositions);
router.get('/makes', getMakes);
router.get('/states', getStates);

export default router;
