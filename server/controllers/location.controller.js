import Location from '../models/location';

export function getLocation(req, res) {
  Location.find(req.query, "-password", function(err, results) {
    if (err) return res.json(err);
    res.json(results);
  });
}

export function getLocationById(req, res) {
  Location.findById(req.params._id, "-password", function (err, record) {
    if (err || !record) return res.json(err)
    res.json(record)
  })
}

export function addLocation(req, res) {
  let newRecord = new Location(req.body)
  newRecord.save(function (err) {
    if (err) {
      console.log(err)
      res.status(500).send(err)
    }
    else {
      res.json(newRecord)
    }
  })
}

export function getLocationByIdAndUpdate(req, res) {
  Location.findByIdAndUpdate(req.params._id, req.body, function (err, record) {
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
}

export function deleteLocation(req, res) {
  Location.remove({ _id: req.params._id }, (err) => {
    if (err) return res.json(err)
    res.json({
      msg: `record ${req.params._id} successfully deleted`,
      _id: req.params._id
    })
  })
}
