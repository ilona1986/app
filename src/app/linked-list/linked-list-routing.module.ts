import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LinkedListComponent} from "./linked-list.component";

const routes: Routes = [
  { path: '', component: LinkedListComponent, data: { title: 'Связанный список'}}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkedListRoutingModule{ }
