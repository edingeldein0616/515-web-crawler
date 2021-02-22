import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexingComponent } from './indexing/indexing.component';
import { LoginComponent } from './login/login.component';
import { SearchingComponent } from './searching/searching.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'indexing', component: IndexingComponent },
  { path: 'searching', component: SearchingComponent },
  { path: '**', component: IndexingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
