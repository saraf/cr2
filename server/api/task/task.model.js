'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Task', {
    id: {
      type:  DataTypes.INTEGER ,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true 
    },
    github_id: DataTypes.TEXT,
    task_summary: DataTypes.TEXT,
    task_description : DataTypes.TEXT, 
    summary_word_for_subtask1: DataTypes.TEXT,
    summary_word_for_subtask2: DataTypes.TEXT,
    is_commercial: DataTypes.TEXT,
    task_status: DataTypes.TEXT,
    assigned_to: DataTypes.TEXT,
    broken_down_by: DataTypes.TEXT,
    parent_task_id: DataTypes.TEXT,
    child_task_ids: DataTypes.TEXT,
    review_comments: DataTypes.TEXT,
    codebase_reuse_SPOC_comments: DataTypes.TEXT,
  },{
    timestamps: true, 
    paranoid: true,
    underscored: true,
    freezeTableName:true,
    tableName:'tasks'
    
  });
};
