'use strict';

var app = require('../..');
var request = require('supertest');

var newTask;

describe('Task API:', function() {

  describe('GET /api/tasks', function() {
    var tasks;

    beforeEach(function(done) {
      request(app)
        .get('/api/tasks')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          tasks = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(tasks).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/tasks', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/tasks')
        .send({
          name: 'New Task',
          info: 'This is the brand new task!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newTask = res.body;
          done();
        });
    });

    it('should respond with the newly created task', function() {
      expect(newTask.name).to.equal('New Task');
      expect(newTask.info).to.equal('This is the brand new task!!!');
    });

  });

  describe('GET /api/tasks/:id', function() {
    var task;

    beforeEach(function(done) {
      request(app)
        
        .get('/api/tasks/' + newTask.id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          task = res.body;
          done();
        });
    });

    afterEach(function() {
      task = {};
    });

    it('should respond with the requested task', function() {
      expect(task.name).to.equal('New Task');
      expect(task.info).to.equal('This is the brand new task!!!');
    });

  });

  describe('PUT /api/tasks/:id', function() {
    var updatedTask

    beforeEach(function(done) {
      request(app)
        
        .put('/api/tasks/' + newTask.id)
        .send({
          name: 'Updated Task',
          info: 'This is the updated task!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedTask = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTask = {};
    });

    it('should respond with the updated task', function() {
      expect(updatedTask.name).to.equal('Updated Task');
      expect(updatedTask.info).to.equal('This is the updated task!!!');
    });

  });

  describe('DELETE /api/tasks/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        
        .delete('/api/tasks/' + newTask.id)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when task does not exist', function(done) {
      request(app)
        
        .delete('/api/tasks/' + newTask.id)
        .expect(404)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
