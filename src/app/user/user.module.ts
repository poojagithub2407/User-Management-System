import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRoutingModule } from './user-routing.module';
import { UserUpsertComponent } from './user-upsert/user-upsert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    UserUpsertComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UserRoutingModule,
    ReactiveFormsModule,
  ],
  exports:[
    UserUpsertComponent,
    UserListComponent
  ]
})
export class UserModule { }
