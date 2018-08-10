import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
 
 
// $scope.formSubmit = function(admin){
//   console.log("dsf");
//   loginService.checkUser(admin).then(function(_res){
//     console.log("func");
//     $scope.User = _res;
//     if($scope.User.status == true){
//       console.log("dsfg");
// localStorage.setItem("Admin", JSON.stringify({Admin:_res.validInfo}));
//           // $scope.createdetails = localStorage.getItem("User");
