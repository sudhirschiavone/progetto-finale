import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ListinoComponent } from './pages/listino/listino.component';
import { SingoloComponent } from './pages/singolo/singolo.component';
import { JoinnowComponent } from './pages/joinnow/joinnow.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'listino',component:ListinoComponent},
  {path:'singolo/:id',component:SingoloComponent},
  {path:'joinnow',component:JoinnowComponent},

];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
