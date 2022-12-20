import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from "./nav/nav.component";

const routes: Routes = [
  { path: 'linked-list', loadChildren: () => import('../app/linked-list/linked-list.module').then((m) => m.LinkedListModule) },
  { path: 'main-page', loadChildren: () => import('../app/main-page/main-page/main-page.module').then((m) => m.MainPageModule)},
  { path: 'profile', loadChildren: () => import('../app/profile/profile.module').then((m) => m.ProfileModule)},
  // { path: '', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [
    NavComponent,
  ],
  exports: [RouterModule, NavComponent]
})
export class AppRoutingModule { }
