import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostEnergyRequestComponent } from './modules/post-energy-request/post-energy-request.component';
import { WeatherComponent } from './shared/widgets/weather/weather.component';

const routes: Routes = [{
  path: '',
  component:DefaultComponent,
  children:[{
    path:'',
    component:DashboardComponent
  },
{
  path: 'postrequest',
  component: PostEnergyRequestComponent
}]
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
