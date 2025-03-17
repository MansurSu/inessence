import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BodyworkComponent } from './bodywork/bodywork.component';
import { PoetryComponent } from './poetry/poetry.component';
import { HerbalComponent } from './herbal/herbal.component';
import { TattooComponent } from './tattoo/tattoo.component';
import { CommunityComponent } from './community/community.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent  },
    { path: "bodywork", component: BodyworkComponent},
    { path: "poetry", component: PoetryComponent},
    { path: "herbal", component: HerbalComponent},
    { path: "tattoo", component: TattooComponent},
    { path: "community", component: CommunityComponent},
    { path: "", redirectTo: "home", pathMatch:"full"  }, 
    { path: "**", redirectTo:"home", pathMatch:"full" }, 
];
