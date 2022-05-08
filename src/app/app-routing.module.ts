import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { Covid19Component } from './covid19/covid19.component';


const routes: Routes = [
  {path: '' , redirectTo: 'AppComponent', pathMatch: 'full'},
  
  { path: 'product', component: ProductComponent },
  { path: 'covid', component: Covid19Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


  
}
