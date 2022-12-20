import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkedListComponent } from './linked-list.component';
import { LinkedListRoutingModule } from "./linked-list-routing.module";



@NgModule({
  declarations: [
    LinkedListComponent
  ],
  imports: [
    CommonModule,
    LinkedListRoutingModule
  ]
})
export class LinkedListModule { }
