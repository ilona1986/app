import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./main-page.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  { path: '', component: MainPageComponent, data: { title: 'Главная страница'}}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule{ }
