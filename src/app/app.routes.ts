import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { UrlNotFoundComponent } from './pages/url-not-found/url-not-found.component';
import { ShowDetailComponent } from './pages/show-detail/show-detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Home', component: HomeComponent },
    { path: "movie-list", component: MovieListComponent },
    { path: "detail/:id", component: ShowDetailComponent },
    { path: '**', component: UrlNotFoundComponent }
];
