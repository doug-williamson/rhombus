import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
  ],
  imports: [
    CommonModule,

    RhombusShellViewsRouting,
  ],
})
export class RhombusShellModule { }
