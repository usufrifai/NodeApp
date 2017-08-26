(function(){
angular.module('app')
.controller('indexController',['userServcie',indexController]);

function indexController(userServcie){
var vm = this;
vm.tittle='usuf';
userServcie.getAllUsers()
.then(userServiceSuccess,null , notification)
.catch(userServiceError)
.finally(userServiceComplete);

function userServiceSuccess(response){
vm.users= response;
}

function userServiceError(reason){
  console.log(reason);
}

function notification(notifies){
console.log(notifies)
}

function userServiceComplete(){
console.log('process completed');
}

}
})();
