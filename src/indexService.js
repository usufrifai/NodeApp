(function(){

  angular.module()
   .factory("userServcie" , ['$q' , '$http' , userService]);

   function userService($q ,$http){
       return{
       getAllUsers :getAllUsers
       }
   }

function getAllUsers(){
    var deffered = $q.defer();
$http({
method :'GET',
url:'http://localhost:3000/users'
}).then(onSuccess , Onerror , onNotify)

function Onerror(reason){
onNotify(' problme in fetching user');
deffered.reject(reason);
}

function onSuccess (result){
onNotify('fetching user');
deffered.resolve(result);
onNotify('user fetched');
}

 function onNotify (notification){
 deffered.notify(notification);
 }

return deffered.promise;
}
})();
