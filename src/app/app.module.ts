import { LOCALE_ID,NgModule } from "@angular/core"; /* 1 */
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { PieComponent } from "./pie/pie.component";
import { HomeComponent } from "./home/home.component";
import { LocationComponent } from "./location/location.component";
import { AboutComponent } from "./about/about.component";
import { MainComponent } from "./main/main.component";
import { NavComponent } from "./nav/nav.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { ProximoComponent } from './proximo/proximo.component';

import localeEs from '@angular/common/locales/es' /* 2 */
import { registerLocaleData } from '@angular/common'; /* 3 */

registerLocaleData(localeEs,'es'); /* 4 */

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "location", component: LocationComponent },
  { path: "about", component: AboutComponent },
  { path: "proximo", component: ProximoComponent},
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    PieComponent,
    HomeComponent,
    LocationComponent,
    AboutComponent,
    MainComponent,
    NavComponent,
    NotfoundComponent,
    ProximoComponent
  ],
  providers: [{provide: LOCALE_ID,useValue: 'es'}], /* 4 */
  bootstrap: [AppComponent]
})
export class AppModule {}
