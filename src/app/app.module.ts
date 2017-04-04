import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';

import { SearchService } from './services/search.service';

const appRoutes: Routes = [
    {path: 'home', component: HomeComponent}, 
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'about', component: AboutComponent }, 
    {path: 'artist/:id', component: ArtistComponent }, 
    {path: 'album/:id', component: AlbumComponent } 
]

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        AboutComponent,
        HomeComponent,
        ArtistComponent,
        AlbumComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [SearchService],
    bootstrap: [AppComponent]
})
export class AppModule {}
