import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IframeComponent } from './iframe/iframe.component';
import { HomeComponent } from './home/home.component';
import { DafComponent } from './daf/daf.component';
import { DrhComponent } from './drh/drh.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SafePipe } from './my-pipe.pipe';
import { IndustrieComponent } from './industrie/industrie.component';
import { EditionsComponent } from './editions/editions.component';
import { EditionComponent } from './edition/edition.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'edition/:annonceur/:id', component: EditionComponent },
    { path: 'editions', component: EditionsComponent },
    { path: 'home', component: HomeComponent },
    { path: 'iframe', component: IframeComponent },

    { path: 'iframe/:id', component: IframeComponent},
    { path: 'daf', component: DafComponent },

    { path: 'daf/:id', component: DafComponent},
    { path: 'drh', component: DrhComponent },

    { path: 'drh/:id', component: DrhComponent},
    { path: 'industrie', component: IndustrieComponent },

    { path: 'industrie/:id', component: IndustrieComponent}
];

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      IframeComponent,
      SafePipe,
      HomeComponent,
      DafComponent,
      DrhComponent,
      IndustrieComponent,
      EditionsComponent,
      EditionComponent,
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      HttpModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
