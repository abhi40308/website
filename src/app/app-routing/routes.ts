import { Routes } from '@angular/router';

import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'contact',     component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'projects',  component: ProjectsComponent },
  { path: 'skills',  component: SkillsComponent },
];