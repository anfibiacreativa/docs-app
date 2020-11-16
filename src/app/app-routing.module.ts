import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  {
    path: 'docs', loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule)
  },
  {
  path: '', redirectTo: 'blog/homepage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [SidenavComponent]
})
export class AppRoutingModule { }
