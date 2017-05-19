angular.module('app.controllers', [])
  
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('entrarCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {

	// $scope.loginFacebook = function(){
	//     var provider = new firebase.auth.FacebookAuthProvider();
	//     provider.addScope('user_birthday');
	//     firebase.auth().signInWithRedirect(provider).then(function(result) {
	//        var token = result.credential.accessToken;
	//        var user = result.user;
	//     }).catch(function(error) {
	//        var errorCode = error.code;
	//        var errorMessage = error.message;
	//        var email = error.email;
	//        var credential = error.credential;
	//        if (errorCode === 'auth/account-exists-with-different-credential') {
	//          alert('You have signed up with a different provider for that email.');
	//          // Handle linking here if your app allows it.
	//        } else {
	//         console.error(error);
	//        }
	//     });
	// };

	$scope.login = function(){

		var username = $scope.email;
		var password = $scope.password;

		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		});
	};

}])


   
.controller('cadastroTrainerCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('configurarPerfilCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('buscaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('filtroICtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('filtroIIRefinoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 