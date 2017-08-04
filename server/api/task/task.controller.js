/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/tasks              ->  index
 * POST    /api/tasks              ->  create
 * GET     /api/tasks/:id          ->  show
 * PUT     /api/tasks/:id          ->  update
 * DELETE  /api/tasks/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var sqldb = require('../../sqldb');
var Task = sqldb.Task;

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function (entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function (entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function (entity) {
    return entity.updateAttributes(updates).then(function (updated) {
      return updated;
    });
  };
}

function removeEntity(res) {
  return function (entity) {
    if (entity) {
      return entity.destroy().then(function () {
        res.status(204).end();
      });
    }
  };
}

// Gets a list of Tasks
exports.index = function (req, res) {
  Task.findAll().then(responseWithResult(res))['catch'](handleError(res));
};

// Gets a single Task from the DB
exports.show = function (req, res) {
  Task.find({
    where: {
      id: req.params.id
    }
  }).then(handleEntityNotFound(res)).then(responseWithResult(res))['catch'](handleError(res));
};

// Creates a new Task in the DB
exports.create = function (req, res) {
  Task.create(req.body).then(responseWithResult(res, 201))['catch'](handleError(res));
};

// Updates an existing Task in the DB
exports.update = function (req, res) {

  if (req.body.id) {
    delete req.body.id;
  }
  Task.find({
    where: {
      id: req.params.id
    }
  }).then(handleEntityNotFound(res)).then(saveUpdates(req.body)).then(responseWithResult(res))['catch'](handleError(res));
};

// Deletes a Task from the DB
exports.destroy = function (req, res) {
  Task.find({
    where: {
      id: req.params.id
    }
  }).then(handleEntityNotFound(res)).then(removeEntity(res))['catch'](handleError(res));
};
//# sourceMappingURL=task.controller.js.map
