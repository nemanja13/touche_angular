import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { ChefsListComponent } from './chefs-list/chefs-list.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ContactHeaderComponent } from './contact/contact-header/contact-header.component';
import { GalleryHeaderComponent } from './gallery/gallery-header/gallery-header.component';
import { MenuHeaderComponent } from './menu/menu-header/menu-header.component';
import { ReservationFormComponent } from './home/reservation-form/reservation-form.component';
import { AboutComponent } from './home/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReadMorePipe } from './pipes/read-more.pipe';
import { PriceFormationPipe } from './pipes/price-formation.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthorComponent } from './author/author.component';
import { GalleryContentComponent } from './gallery/gallery-content/gallery-content.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        component: HomeComponent,
        data: { animation: 'Home Page' }
      },
      {
        path: "menu",
        component: MenuComponent,
        data: { animation: 'Menu Page' }
      },
      {
        path: "gallery",
        component: GalleryComponent,
        data: { animation: 'Gallery Page' }
      },
      {
        path: "contact",
        component: ContactComponent,
        data: { animation: 'Contact Page' }
      },
      {
        path: "author",
        component: AuthorComponent,
        data: { animation: 'Author Page' }
      }
    ]
  },
  {
    path: "**",
    component: NotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    GalleryComponent,
    ContactComponent,
    HomeHeaderComponent,
    ChefsListComponent,
    MenuListComponent,
    ContactFormComponent,
    ContactHeaderComponent,
    GalleryHeaderComponent,
    MenuHeaderComponent,
    ReservationFormComponent,
    AboutComponent,
    ReadMorePipe,
    PriceFormationPipe,
    NotFoundComponent,
    AuthorComponent,
    GalleryContentComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
