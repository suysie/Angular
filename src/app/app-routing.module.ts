import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MorePicturesComponent } from './more-pictures/more-pictures.component';
import {SearchComponent} from './search/search.component';
import {SettingsComponent} from './settings/settings.component';

const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'more-pictures/:name', component: MorePicturesComponent},
  {path: 'settings', component: SettingsComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SearchComponent, SettingsComponent];