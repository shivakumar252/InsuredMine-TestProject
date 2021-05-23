import { NgModule } from '@angular/core';
import { LoginscreenComponent } from './loginscreen.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [
  {
    path: '',
    component: LoginscreenComponent
  }
];

@NgModule({
   declarations: [],
  imports: [RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
})
export class LoginModule { }
