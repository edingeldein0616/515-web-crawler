import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexingComponent } from './indexing/indexing.component';

const routes: Routes = [
  { path: 'indexing', component: IndexingComponent },
  { path: '**', component: IndexingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
