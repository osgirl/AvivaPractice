'use strict';

describe('Controller: QrController', function() {

    //Load the ui.router module
    beforeEach(module('ui.router'));
    //Load the module
    beforeEach(module('core'));

    var QrController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        QrController = $controller('QrController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
