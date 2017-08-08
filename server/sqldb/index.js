/**
 * Sequelize initialization module
 */

'use strict';

import path from 'path';
import config from '../config/environment';
import Sequelize from 'sequelize';

var db = {
  Sequelize: Sequelize,
  sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
};

// Insert models below
db.Task = db.sequelize.import('../api/task/task.model');

db.Thing = db.sequelize.import('../api/thing/thing.model');

module.exports = db;
