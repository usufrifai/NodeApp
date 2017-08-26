(function(){

  angular.module("app")
   .factory("userServcie" , ['$q' , '$http' , userService]);

   function userService($q ,$http){
       return{
       getAllUsers :getAllUsers
       }
   }

function getAllUsers(){
var deferred = $q.defer();
$http({
method :'GET',
url:'http://localhost:3000/users'
}).then(onSuccess , Onerror , onNotify)

return deferred.promise;

}
})();
