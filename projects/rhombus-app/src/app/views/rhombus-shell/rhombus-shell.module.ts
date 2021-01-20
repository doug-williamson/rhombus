import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { CoreComponent } from './core/core.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { RhombusShellViewsRouting } from './rhombus-shell.routing';
import { SettingsComponent } from './settings/settings.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  declarations: [
    IntroComponent,
    WrapperComponent,
    HeaderComponent,
    SidenavComponent,
    SettingsComponent,
    CoreComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,

    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,

    RhombusShellViewsRouting,
  ],
})
export class RhombusShellModule { }
