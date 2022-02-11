import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserViewComponent } from './user-view/user-view.component';
import { Routes } from '@angular/router';


export const USER_ROUTES: Routes = [  
  { path: 'user', component: UserListComponent },  
  { path: '../user/new', component: UserNewComponent },
  { path: '../user/edit/:id', component: UserEditComponent },
  { path: '../user/view/:id', component: UserViewComponent },  
];