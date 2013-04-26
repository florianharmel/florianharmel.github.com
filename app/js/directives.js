MOBILE_APP.directive('ngFocus', function() {
    return function(scope, element, attrs) {
        element.bind('focus', function(){
            scope.$eval(attrs.ngFocus);
        });
    }
});

MOBILE_APP.directive('ngViewmanager', function() {
    return function(scope, element, attrs) {
    	var parent = scope.$parent;
        parent.$on('$stateChangeSuccess', function(e, next, emptyVar, current){
    		if (next.name == "app.userId.detail.list.detail.message"){
    			setTimeout(function(){
                    element.addClass("showMessage");
                },125)
    		}else{
    			element.removeClass("showMessage");
    		}
        });
        
        scope.left = function(){
            if (parent.$state.current.name == "app.userId.detail.list.detail.message"){
                element.addClass("showMessage");
            }
        }
        scope.right = function(){
            if (parent.$state.current.name == "app.userId.detail.list.detail.message"){
                element.removeClass("showMessage");
            }
        }
    }
});

MOBILE_APP.directive('ngMobile', function() {
    return function(scope, element, attrs) {
        
        var isAndroid = (/android/gi).test(navigator.appVersion),
        isIDevice = (/iphone|ipad/gi).test(navigator.appVersion);


        


        if (isIDevice){
           scope.$root.isIOS = true; 
        }
        if (isAndroid){
           scope.$root.isAndroid = true; 
        }
        
        var width = document.documentElement.clientWidth;
        if (width < 1024){
            scope.$root.isMobile = true;
            scope.$root.delayClose = 1;
        }else{
            scope.$root.delayClose = 800;
        }
    }
});