import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { CaDataService } from './services/ca-data.service';
import { PostsComponent } from './components/posts/posts.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GuidelinesComponent } from './components/guidelines/guidelines.component';
import { CaProfileComponent } from './components/ca-profile/ca-profile.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';


const  BASE_URL : string = 'ca/dashboard';
const appRoutes: Routes = [
	{
		path: BASE_URL,
		component: PostsComponent,
	},
    {
        path: BASE_URL + '/guidelines',
        component: GuidelinesComponent,
    },
    {
        path: BASE_URL + '/ca-profile',
        component: CaProfileComponent,
    },
    {
        path: BASE_URL + '/leaderboard',
        component: LeaderboardComponent,
    },
    {
        path: BASE_URL + '/notifications',
        component: NotificationsComponent,
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}

//https://angular.io/guide/forms