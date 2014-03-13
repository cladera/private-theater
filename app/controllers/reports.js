/**
 * Created by cgcladera on 12/03/14.
 */
var mongoose      = require('mongoose'),
  ErrorNotification = mongoose.model('ErrorNotification');

/* Create */
exports.new = function(req, res){
  var report = new ErrorNotification(req.body);
  report.save(function(err, report){
    if(err){
      return res.send(500);
    }
    res.json(report);
  });
};

/* Get */
exports.get = function(req, res){
  ErrorNotification.findOne({_id: req.params.reportId}, function(err, report){
    if(err){
      return res.send(500);
    }
    if(!report){
      return res.send(404);
    }
    res.json(report);
  });
};

exports.all = function(req, res){
  var query = ErrorNotification.find();
  if(req.query.mediaId){
    query.where('media').equals(req.query.mediaId);
  }
  query.exec(function(err, reports){
    if(err){
      return res.send(500);
    }
    res.json(reports);
  });
};

/* Update */
exports.update = function(req, res){
  delete req.body._id;
  ErrorNotification.findOneAndUpdate({_id: req.params.reportId}, req.body, {}, function(err, report){
    if(err){
      return res.send(500, err);
    }
    res.json(report);
  });
};

/* Delete */
exports.delete = function(req, res){
  ErrorNotification.findOne({_id: req.body._id}, function(err, report){
    if(err){
      return res.send(500);
    }
    if(!report){
      return res.send(404);
    }
    report.remove(function(err){
      if(err){
        return res.send(500);
      }
      res.send(200);
    });
  });
};