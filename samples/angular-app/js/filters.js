angular.module('ng').filter('tel', function () {
    return function (tel) {
        if (!tel) { return ''; }

        var value = tel.toString().trim().replace(/^\+/, '');

        value = value.replace(/(\d{2})/g, '$1 ').replace(/(^\s+|\s+$)/,'')
        console.log(value)
        return value;
        
    };
});
angular.module('ng').filter('stateName', function () {
    return function (name) {
        if (!name) { return ''; }
        if (name != "app.userId"){
        	return "userTop " + name.split('.').join('_');
        }
    };
});