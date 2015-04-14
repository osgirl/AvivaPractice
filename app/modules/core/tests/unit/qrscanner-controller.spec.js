'use strict';

describe('Controller: QrscannerController', function() {

    //Load the ui.router module
    beforeEach(module('ui.router'));
    //Load the module
    beforeEach(module('core'));

    var QrscannerController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        QrscannerController = $controller('QrscannerController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
