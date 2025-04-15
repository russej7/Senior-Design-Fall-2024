import Officer from '../models/OfficerModel.js';
import Violation from '../models/ViolationModel.js';
import Disposition from '../models/DispositionModel.js';
import Make from '../models/MakeModel.js';
import State from '../models/StateModel.js';

export const getOfficers = async (req, res) => {
  try {
    const officers = await Officer.findAll({
      attributes: ['officerID', 'BadgeNumber', 'FirstName', 'LastName']
    });
    res.json(officers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getViolations = async (req, res) => {
  try {
    const violations = await Violation.findAll({
      attributes: ['violationID', 'Description']
    });
    res.json(violations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getDispositions = async (req, res) => {
  try {
    const dispositions = await Disposition.findAll({
      attributes: ['dispositionID', 'Description']
    });
    res.json(dispositions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMakes = async (req, res) => {
  try {
    const makes = await Make.findAll({
      attributes: ['MakeID', 'Description']
    });
    res.json(makes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getStates = async (req, res) => {
  try {
    const states = await State.findAll({
      attributes: ['stateID', 'Description']
    });
    res.json(states);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
