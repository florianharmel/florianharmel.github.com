MOBILE_APP =  angular.module('app', ['ui.compat', 'sf.virtualScroll', 'hmTouchEvents'])
  .config(
    ['$stateProvider', '$routeProvider', '$urlRouterProvider',
    function ($stateProvider, $routeProvider,  $urlRouterProvider, $rootScope) {
      $urlRouterProvider
        .when('/c?id', '/contacts/:id')
        .otherwise('/');

      $routeProvider
        .when('/', {
          redirectTo: '/app/userId',
        });

      $stateProvider
        .state('app', {
          url: '/app',
          views: {
            '' : {
              templateUrl: 'partials/app.html',
              controller : ['$scope' , '$stateParams' , '$state', '$rootScope','$timeout', APP.AppCtrl]
            },
          },
        })
        .state('app.userId', {
          url: '/userId',
          views: {
            '': {
              templateUrl: 'partials/user.html',
              controller : ['$scope' , '$stateParams' , '$state', '$rootScope', '$timeout', 'customer', APP.UserCtrl]
            },
          }
        })
        .state('app.userId.detail', {
          url: '/detail',
          views: {
            '': {
              templateUrl: 'partials/user.detail.html',
              controller : ['$scope' , '$stateParams' , '$state', '$rootScope','$timeout', APP.UserCtrlDetail]
            },
          },
        })
        .state('app.userId.detail.list', {
          url: '/list',
          views: {
            '': {
              templateUrl: 'partials/user.list.html',
              controller : ['$scope' , '$stateParams' , '$state', '$rootScope', '$http' , '$timeout', APP.ListCtrl]
            },
          },
        })
        .state('app.userId.detail.list.detail', {
          url: '/detailOffer',
          views: {
            '': {
              templateUrl: 'partials/user.list.detail.html',
              controller : ['$scope' , '$stateParams' , '$state', '$rootScope','$timeout',APP.ListCtrlDetail]
            },
          },
        })

        .state('app.userId.detail.list.detail.message', {
          url: '/message',
          views: {
            '': {
              templateUrl: 'partials/user.list.detail.message.html',
              controller : ['$scope' , '$stateParams' , '$state', '$rootScope','$timeout', APP.ListCtrlDetailMessage]
            },
          },
        });
    }])
    .run(
    ['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
      $rootScope.isLaunched = true;
    }]
);