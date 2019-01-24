import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BukuComponent } from './buku/buku.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'buku', component: BukuComponent },
  { path: 'contact', component: ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
