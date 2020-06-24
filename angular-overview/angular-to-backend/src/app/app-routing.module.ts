import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {BlogDetailComponent} from './blog/blog-detail/blog-detail.component';
import {BlogEditComponent} from './blog/blog-edit/blog-edit.component';
import {TodoComponent} from './todo/todo.component';


const routes: Routes = [{
  path: 'blog',
  component: BlogComponent
},
  {
    path: 'blog/:id',
    component: BlogDetailComponent
  },
  {
    path: 'blog/:id/edit',
    component: BlogEditComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
