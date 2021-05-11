import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RhShellModulesComponent } from './modules.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,

    MatListModule,
    MatToolbarModule,
  ],
  declarations: [RhShellModulesComponent],
  exports: [
    RhShellModulesComponent,
  ],
})
export class RhShellModulesModule { }
