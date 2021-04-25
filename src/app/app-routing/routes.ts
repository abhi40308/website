import { Routes } from "@angular/router";
import { BlogpostComponent } from "../blogpost/blogpost.component";
import { ContactComponent } from "../contact/contact.component";
import { HomeComponent } from "../home/home.component";
import { ProjectsComponent } from "../projects/projects.component";
import { SkillsComponent } from "../skills/skills.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: "projects", component: ProjectsComponent },
  // { path: "skills", component: SkillsComponent },
  { path: "blog", component: BlogpostComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];
