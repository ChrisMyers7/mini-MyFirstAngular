angular.module('friendsList')
    .controller('mainCtrl', function($scope) {
    
    $scope.friends = ['laufiso', 'jenkins', 'bob', 'bilbo']
    
    $scope.addFriend = function(name) {
        $scope.friends.push(name);
    };
    
});