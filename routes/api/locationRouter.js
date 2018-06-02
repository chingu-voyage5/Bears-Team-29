let Router = require('express').Router;
const locationRouter = Router()

let Location = require('../../db/schemas/locationSchema.js').Location

locationRouter
	.get(`/location`, function(req, res){
		Location.find(req.query , "-password", function(err, results){
			if(err) return res.json(err) 
		res.json(results)
		})
	})

	.get(`/location/:_id`, function(req, res){
		Location.findById(req.params._id, "-password", function(err, record){
			if(err || !record ) return res.json(err) 
			res.json(record)
		})
	})

	.post(`/location`, function(req,res) {
		let newRecord = new Location(req.body)
		newRecord.save(function(err) {
			if (err) {
				console.log(err)
				res.status(500).send(err)
			}
			else {  
				res.json(newRecord)
			}
		})
	})

	.put(`/location/:_id`, function(req, res){
		Location.findByIdAndUpdate(req.params._id, req.body, function(err, record){
			if (err) {
				res.status(500).send(err)
			}
			else if (!record) {
				res.status(400).send(`no record found with that id`)
			}
			else {
				res.json(req.body)
			}
		})
	})

	.delete(`/location/:_id`, function(req, res){
		Location.remove({ _id: req.params._id}, (err) => {
			if(err) return res.json(err)
			res.json({
				msg: `record ${req.params._id} successfully deleted`,
				_id: req.params._id
			})
		})
	})

module.exports = locationRouter
