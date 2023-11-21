import { Routes } from '@angular/router';
import { DetailsFormComponent } from './details-form/details-form.component';
import { ViewSavedFormsComponent } from './view-saved-forms/view-saved-forms.component';

export const routes: Routes = [
    { path: '', redirectTo: 'create-new-task', pathMatch: 'full' },
    { path: 'create-new-task', component: DetailsFormComponent },
    { path: 'view-all-tasks', component: ViewSavedFormsComponent },
];
