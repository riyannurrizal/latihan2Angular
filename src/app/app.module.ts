import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BukuComponent } from './buku/buku.component';
import { BukuAddComponent } from './buku/buku-add/buku-add.component';
import { BukuListComponent } from './buku/buku-list/buku-list.component';
import { HoverHighlightDirective } from './hover-highlight.directive';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BukuComponent,
    BukuAddComponent,
    BukuListComponent,
    HoverHighlightDirective,
    ContactComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
