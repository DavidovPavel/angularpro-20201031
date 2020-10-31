import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MypreloadingStrategyService } from './mypreloading-strategy.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'lazy', 
    data: {
      preload: true
    },
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: MypreloadingStrategyService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
