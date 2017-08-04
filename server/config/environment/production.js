'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip: process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined,

  // Server port
  port: process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080,

  sequelize: {
    uri:  'postgres://'+ process.env.OPENSHIFT_POSTGRESQL_DB_USERNAME + 
          ':' + process.env.OPENSHIFT_POSTGRESQL_DB_PASSWORD + '@' + process.env.OPENSHIFT_POSTGRESQL_DB_HOST+':' + process.env.OPENSHIFT_POSTGRESQL_DB_PORT + '/cr2', 
    options: {
      logging: false,
      dialect: 'postgres',
      define: {
        timestamps: false
      }
    }
  }
};
//# sourceMappingURL=production.js.map
