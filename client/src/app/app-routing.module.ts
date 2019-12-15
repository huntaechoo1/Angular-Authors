import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
	{ path: '', pathMatch: 'full', component: AllAuthorsComponent},
	{ path: 'new', component: AddAuthorComponent },
	{ path: 'edit/:_id', component: EditAuthorComponent },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
