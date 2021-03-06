'use strict';

angular.module('meanTestApp')

.controller('HogehogesCtrl', function ($scope) {
  var msglen;

  $scope.message = 'Hello';
  $scope.person = { fname: 'Clark', lname: 'Kent' };
  $scope.person1 = { fname: 'Bruce', lname: 'Banner' };


  $scope.addHello = function() {
    if ($scope.message > '') {
      $scope.message += ' ';
    }
    $scope.message += 'Hello8';
    $scope.person['fname'] += 'Hello8';
  };

  $scope.rmString = function() {
    msglen = $scope.message.length;
    if (msglen > 0) {
      $scope.message = $scope.message.substr(0, msglen-1);
    } else {
      $scope.message = '';
    }
  };
})

.value('Hello', React.createClass({
  propTypes: {
    fname: React.PropTypes.string.isRequired, lname: React.PropTypes.string.isRequired
  },

render: function() {
  var d = React.DOM;
  return d.div(null,
    d.ul({ className: 'list-group' },
      d.li({ className: 'list-group-item' }, 'hoge'),
      d.li({ className: 'list-group-item' }, 'fuga'),
      d.li({ className: 'list-group-item' }, 'fuga'),
      d.li({ className: 'list-group-item' }, 'hoge')
      ),
    d.p(null, 'Hello ' + this.props.fname + ' ' + this.props.lname),
    d.p(null, 'Hello ' + this.props.fname + ' ' + this.props.lname),
    d.p(null, 'Hello ' + this.props.fname + ' ' + this.props.lname)
    );
}
}))
.directive('hello', function(reactDirective) {
  return reactDirective('Hello');
})

.value('Hello2', React.createClass({
  propTypes: {
    fname: React.PropTypes.string.isRequired, lname: React.PropTypes.string.isRequired
  },

render: function() {
  var d = React.DOM;
  return d.div(null,
    d.ul({ className: 'list-group' },
      d.li({ className: 'list-group-item' }, 'hoge'),
      d.li({ className: 'list-group-item' }, 'fuga'),
      d.li({ className: 'list-group-item' }, 'fuga'),
      d.li({ className: 'list-group-item' }, 'hoge')
      ),
    d.p(null, 'Hello ' + this.props.fname + ' ' + this.props.lname),
    d.p(null, 'Hello ' + this.props.fname + ' ' + this.props.lname),
    d.p(null, 'Hello ' + this.props.fname + ' ' + this.props.lname)
    );
}
}))
.directive('hello2', function(reactDirective) {
  return reactDirective('Hello2');
})

;

// .directive('hello2', function( reactDirective ) {
//   return reactDirective('Hello');
// })

//var app = angular.module('meanTestApp', ['react']);
//
//app.controller( 'mainCtrl', function( $scope ) {
//  $scope.person = { fname: 'Clark', lname: 'Kent' };
//  $scope.person1 = { fname: 'Bruce', lname: 'Banner' };
//} );
//
//app.value( "Hello", React.createClass( {
//  propTypes: {
//    fname: React.PropTypes.string.isRequired,
//    lname: React.PropTypes.string.isRequired
//  },
//
//  render: function() {
//    return React.DOM.span( null,
//                          'Hello ' + this.props.fname + ' ' + this.props.lname
//                         );
//  }
//} ) );
//
//app.directive( 'hello', function( reactDirective ) {
//  return reactDirective( 'Hello' );
//} );

// angular.module('meanTestApp')
//   .controller('MainCtrl', function ($scope, $http, socket) {
//     $scope.awesomeThings = [];
// 
//     $http.get('/api/things').success(function(awesomeThings) {
//       $scope.awesomeThings = awesomeThings;
//       socket.syncUpdates('thing', $scope.awesomeThings);
//     });
// 
//     $scope.addThing = function() {
//       if($scope.newThing === '') {
//         return;
//       }
//       $http.post('/api/things', { name: $scope.newThing });
//       $scope.newThing = '';
//     };
// 
//     $scope.deleteThing = function(thing) {
//       $http.delete('/api/things/' + thing._id);
//     };
// 
//     $scope.$on('$destroy', function () {
//       socket.unsyncUpdates('thing');
//     });
//   });
