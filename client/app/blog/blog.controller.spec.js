'use strict';

describe('Controller: BlogCtrl', function () {

  // load the controller's module
  beforeEach(module('dotApp'));
  beforeEach(module('socketMock'));

  var BlogCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/posts')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    BlogCtrl = $controller('BlogCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of things to the scope', function () {
    $httpBackend.flush();
    expect(scope.awesomePosts.length).toBe(4);
  });
});
