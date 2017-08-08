'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var taskCtrlStub = {
  index: 'taskCtrl.index',
  show: 'taskCtrl.show',
  create: 'taskCtrl.create',
  update: 'taskCtrl.update',
  destroy: 'taskCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var taskIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './task.controller': taskCtrlStub
});

describe('Task API Router:', function() {

  it('should return an express router instance', function() {
    expect(taskIndex).to.equal(routerStub);
  });

  describe('GET /api/tasks', function() {

    it('should route to task.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'taskCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/tasks/:id', function() {

    it('should route to task.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'taskCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/tasks', function() {

    it('should route to task.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'taskCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/tasks/:id', function() {

    it('should route to task.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'taskCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/tasks/:id', function() {

    it('should route to task.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'taskCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/tasks/:id', function() {

    it('should route to task.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'taskCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
