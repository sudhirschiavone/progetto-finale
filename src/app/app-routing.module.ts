import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListinoComponent } from './pages/listino/listino.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'listino',component:ListinoComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent}

];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
