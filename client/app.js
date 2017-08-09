   var app = angular.module('myApp', ['ngRoute', 'controllers']);

angular.module('controllers', [])
    .controller('singleController', ['$scope', function() {
        
    }])
    .controller('listController', ['$scope', function() {
        
    }])
    .controller('addController', ['$scope', function() {
        
    }]);


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/home.html'
        }).when('/single/one/:id', {
            templateUrl: '../views/single.html'
        }).when('/add', {
            templateUrl: '../views/add.html'
        }).when('/list', {
            templateUrl: '../views/list.html'
        }).when('/?#', {
            templateUrl: '../views/users.html'
        });

    }]);
    
     app.controller('getRequest', function($http, $scope, $location) {
        $http.get('/api/chirps')
        .then(function(response) { 
            $scope.postList = response.data;
        });
        $scope.getId=function(id) {
            $location.path('/single/one/' + id);
        }
        $scope.deleteData = function(id){
       $http.delete("/api/chirps/one/" + id)
           .success(function(response){
               $http.get('/api/chirps')
               .then(function (response) {
               
               $scope.postList = response.data;
           });
       });    
   }
    });

    app.controller('addController', function($scope, $http, $location) {
        $scope.insertData = function() {
          $http.post('/api/chirps', {'user' : $scope.user, 'message' : $scope.message})
          .then(function(response) {
            $scope.postList = response.data;
            $scope.user = '';
            $scope.message = '';  
            });     
        }  
    });

    app.controller('singleController', function($scope, $routeParams, $http, $location) {
        var currentId = $routeParams.id;
        $http.get('http://localhost:3000/api/chirps/one/' + currentId)
        .then(function(response) {
            $scope.postList = response.data;
        });
    
    
    $scope.deleteData = function(id){
       $http.delete("/api/chirps/" + id)
           .success(function(response){
               $http.get('/api/chirps')
               .then(function (response) {
               console.log(response);
               $scope.postList = response.data;
               $location.path('/list/');
           });
       });    
   }

        });

app.controller("userControl", function($scope, $http, $location){
   $http.get('/api/users')
   .then(function (response) {
       $scope.userList = response.data;
   });
});

function goToPage(element) {
   window.location = "#/user/" + element.value;
}
     
// Setting up the Variables
var bars = document.getElementById("nav-action");
var nav = document.getElementById("nav");


//setting up the listener
bars.addEventListener("click", barClicked, false);


//setting up the clicked Effect
function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}

// function Person(name) {
//     this.name = name;
//     this.sayName = function() {

//     }
// }

// var person = new personalbar('hamel');
// person.sayName();



// function Person(name) {
//     this.name = name;
// }



// }

// class Person {
//     constructor(name){
//         this,name = name;

//     }
// }

// sayName(){
//     console.log(this.name)
// }


// var person = new Person (['dan', 'tyler'])

// var person = new Person (['Lance', 'Markus'])

