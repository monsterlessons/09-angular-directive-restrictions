var app = angular.module('app', []);

app.directive('fooBar', function () {
  return {
    restrict: 'EACM',
    link: function () {
      console.log('fooBar');
    }
  };
});
