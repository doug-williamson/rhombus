import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RhBacklogModule, RhLatestNewsModule, RhombusComponentsModule } from '@dougwilliamson/rhombus';
import { RhAppGettingStartedRoutingModule } from './getting-started.routing';
import { HomeComponent } from './home/home.component';
import { RhombusShellComponent } from './rhombus-shell/rhombus-shell.component';
import { RhombusComponent } from './rhombus/rhombus.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,

    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,

    RhBacklogModule,
    RhLatestNewsModule,
    RhombusComponentsModule,

    RhAppGettingStartedRoutingModule,
  ],
  declarations: [HomeComponent, RhombusComponent, RhombusShellComponent],

})
export class GettingStartedModule { }
