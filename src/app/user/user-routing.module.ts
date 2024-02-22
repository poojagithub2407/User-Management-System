import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserUpsertComponent } from './user-upsert/user-upsert.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path:'',
    component:UserListComponent
  },
  {
    path:'user-upsert',
    component:UserUpsertComponent
  },
  {
    path:'user-list',
    component:UserListComponent
  },{
    path:'user-upsert/:id',
    component:UserUpsertComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
