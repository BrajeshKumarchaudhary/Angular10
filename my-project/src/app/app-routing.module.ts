import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Dashboard/home/home.component';
import { TwoWayBindingComponent } from './practices/two-way-binding/two-way-binding.component';
const routes: Routes = [

  {
    path:"home",
    component:HomeComponent
  },{
    path:"two",
    component:TwoWayBindingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
