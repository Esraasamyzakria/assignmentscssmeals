import { Routes } from '@angular/router';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { MealsComponent } from './meals/meals.component';

export const routes: Routes = [

  {path:'',component:MainlayoutComponent,children:[
    {path:'' ,redirectTo:'category/all' , pathMatch:'full'},

    {

    path:'category/:categoryname',component:MealsComponent
  }]}
];
