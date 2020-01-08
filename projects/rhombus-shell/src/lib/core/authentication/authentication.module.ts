import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatSelectModule,
  MatToolbarModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  // {
  //   path: 'login',
  //   component: RhLoginComponent,
  // },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatSelectModule,
    MatToolbarModule,

    RouterModule.forChild(ROUTES),
  ],
  declarations: [

  ],
  exports: [
  ],
})

export class RhombusShellAuthenticationModule { }
