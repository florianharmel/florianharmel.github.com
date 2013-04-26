var APP = {};
(function(){

	APP.AbstractCtrl = function($scope, $state, $rootScope){
		var _this = this;
		var d = $scope.delayClose || $rootScope.delayClose;
		

		$scope.$on('$stateChangeStart', function(e, next, emptyVar, current){
          if (_this.open && next.name == _this.previousState){

          	//block state change
            e.preventDefault();

            //animate
            $scope.animationClass = _this.animClass2;
            

            _this.open = false;
            setTimeout(function(){ // wait for the animation
            	//relauch state change
              $state.transitionTo(next.name);
              	//reset model
              $rootScope.$digest();
            },d);
          }
        });
	};



	APP.ViewsCtrl = function($state, $scope, $rootScope){
	}

	APP.AppCtrl = function($scope,  $stateParams, $state, $rootScope, $timeout){
		
		APP.AbstractCtrl.call(this, $scope, $state, $rootScope);

		if ($state.current.name == "app")
			$state.transitionTo("app.userId");
	}

	APP.UserCtrl = function($scope, $stateParams, $state, $rootScope, $timeout, customer){
		
		this.previousState = "app";
		this.animClass = "animOpen";
		this.animClass2 = "animClose";
		APP.AbstractCtrl.call(this, $scope, $state, $rootScope);
		this.open = true;
		$scope.delayClose = 250;
	
		if ($state.current.name == "app.userId"){
			$scope.animationClass = this.animClass;
		}

		if (customer && customer.customerPhone) $scope.customerPhone = customer.customerPhone;

		$scope.searchUser = function(customerPhone){
			
			/* call service searchUser */
			customer.customerPhone = customerPhone;

			$state.transitionTo("app.userId.detail");

			

		}
		$scope.comeBack = function(){
			
			/* call service searchUser */
			if ($state.current.name != "app.userId")
				$state.transitionTo("app.userId");

		}

	}

	APP.UserCtrlDetail = function($scope, $stateParams, $state, $rootScope, $timeout){
		
		this.previousState = "app.userId";
		this.animClass = "animOpenTog";
		this.animClass2 = "animCloseTog";
		APP.AbstractCtrl.call(this, $scope, $state, $rootScope);
		this.open = true;
		if ($state.current.name == "app.userId.detail"){
			$scope.animationClass = this.animClass;
		}
	}

	APP.ListCtrl = function($scope, $stateParams, $state, $rootScope, $http, $timeout){
		
		this.previousState = "app.userId.detail";
		this.animClass = "animOpen";
		this.animClass2 = "animClose";
		APP.AbstractCtrl.call(this,$scope, $state, $rootScope);
		this.open = true;

		if ($state.current.name == "app.userId.detail.list"){
			$scope.animationClass = this.animClass;
		}
		$scope.method = "GET";
		$scope.url = "mocks/offers.json";

		$scope.data = {
			results: [],
			listActive : false
		};

		$timeout(function(){
			$http({
      			method: $scope.method,
			      url: $scope.url
			    }).success(function(data){
			    	$scope.data.results = data.result;
			    	$scope.data.listActive = true;

			    });
		}, 500)
		
	}

	APP.ListCtrlDetail = function($scope, $stateParams, $state, $rootScope, $timeout){
		
		this.previousState = "app.userId.detail.list";
		this.animClass = "animOpen";
		this.animClass2 = "animClose";
		APP.AbstractCtrl.call(this, $scope, $state, $rootScope);
		this.open = true;

		if ($state.current.name == "app.userId.detail.list.detail"){
			$scope.animationClass = this.animClass;
		}

		$scope.showMessage = function(){
			$state.transitionTo("app.userId.detail.list.detail.message");
		}
	}
	APP.ListCtrlDetailMessage = function($scope, $stateParams, $state, $rootScope, $timeout){
		
		this.previousState = "app.userId.detail.list.detail";
		this.animClass = "animOpen";
		this.animClass2 = "animClose";
		APP.AbstractCtrl.call(this, $scope, $state, $rootScope);
		this.open = true;

		if ($state.current.name == "app.userId.detail.list.detail.message"){
			$scope.animationClass = this.animClass;
		}

		
	}

})();

