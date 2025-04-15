import Citation from '../models/CitationsModel.js';
import Officer from '../models/OfficerModel.js';
import Violation from '../models/ViolationModel.js';
import State from '../models/StateModel.js';
import Make from '../models/MakeModel.js';
import Disposition from '../models/DispositionModel.js';
import User from '../models/UserModel.js';

export const getAllCitations = async (req, res) => {
  try {
      const citations = await Citation.findAll({
        include: [
            {
              model: Officer,
              as: 'Officer',
              attributes: ['BadgeNumber', 'FirstName', 'LastName']
            },
            {
              model: Violation,
              as: 'Violation',
              attributes: ['Description']
            },
            {
              model: State,
              as: 'OwnerState',
              attributes: ['Description']
            },
            {
              model: State,
              as: 'LicensePlateState',
              attributes: ['Description']
            },
            {
              model: Make,
              as: 'Make',
              attributes: ['Description']
            },
            {
              model: Disposition,
              as: 'Disposition',
              attributes: ['Description']
            },
            {
              model: User,
              as: 'LastUser',
              attributes: ['FirstName', 'LastName']
            }
          ]
        });
      
      res.json(citations);
  } catch (error) {
      res.status(500).send(error.message);
  }
};

export const getCitationById = async (req, res) => {
  try {
      const citation = await Citation.findByPk(req.params.id);
      if (!citation) {
          return res.status(404).send('Citation not found');
      }
      res.json(citation);
  } catch (error) {
      res.status(500).send(error.message);
  }
};

export const createCitation = async (req, res) => {
  try {
      const citation = await Citation.create(req.body);
      res.status(201).json(citation);
  } catch (error) {
      res.status(400).send(error.message);
  }
};

export const updateCitation = async (req, res) => {
  try {
      const { id } = req.params;
      const [updated] = await Citation.update(req.body, { where: { citationID: id } });
      if (!updated) {
          return res.status(404).send('Citation not found');
      }
      const updatedCitation = await Citation.findByPk(id);
      res.json(updatedCitation);
  } catch (error) {
      res.status(500).send(error.message);
  }
};
