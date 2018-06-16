import { Router } from 'express';
import * as LocationController from '../controllers/location.controller';

const router = new Router();

// Get all Locations
router.route('/location').get(LocationController.getPosts);

// Get one location by id
router.route('/location/:id').get(LocationController.getLocationById);

// Add a new Location
router.route('/location').post(LocationController.addLocation);

// Get one location by id and update
router.route('/location/:_id').put(LocationController.getLocationByIdAndUpdate);

// Delete a location by id
router.route('/location/:id').delete(LocationController.deleteLocation);

export default router;
