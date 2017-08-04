'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // Sequelize connecton opions
  sequelize: {
    uri: 'postgres://crowdiandb:dev@localhost/crowdianDB',
    options: {
      logging: true,
      dialect: 'postgres',
      define: {
        timestamps: false
      }
    }
  },

  // Seed database on startup
  seedDB: true

};
//# sourceMappingURL=development.js.map
