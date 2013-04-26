'use strict';

MOBILE_APP.value('localStorage', window.localStorage);


MOBILE_APP.factory('customer', function($rootScope, localStorage) {

  var LOCAL_STORAGE_ID = 'customer',
      customerString = localStorage[LOCAL_STORAGE_ID];

  var customer = customerString ? JSON.parse(customerString) : {
    customerPhone: undefined
  };

  $rootScope.$watch(function() { return customer; }, function() {
    localStorage[LOCAL_STORAGE_ID] = JSON.stringify(customer);
  }, true);

  return customer;
});