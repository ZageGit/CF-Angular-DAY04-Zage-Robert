import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';


const routes: Routes = [
  {
    path:"", component:HomePageComponent
  },
  {
    path:"blog", component: BlogPageComponent
  },
  {
    path:"about", component:AboutPageComponent
  },
  {
    path:"contact", component:ContactPageComponent
  },
  {
  path:'blogs/:blogId', component:BlogDetailsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
