import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMePageComponent } from 'src/libs/about-me-page/about-me-page.component';
import { ContactsPageComponent } from 'src/libs/contacts-page/contacts-page.component';
import { HomePageComponent } from 'src/libs/home-page/home-page.component';
import { NotFoundPageComponent } from 'src/libs/not-found-page/not-found-page.component';
import { ProjectsPageComponent } from 'src/libs/projects-page/projects-page.component';
import { SkillsPageComponent } from 'src/libs/skills-page/skills-page.component';
import { WorksPageComponent } from 'src/libs/works-page/works-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutMePageComponent },
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'skills', component: SkillsPageComponent },
  { path: 'works', component: WorksPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
