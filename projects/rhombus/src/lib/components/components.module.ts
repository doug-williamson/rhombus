import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BacklogComponent } from './backlog/backlog.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,

        MatIconModule,
        MatListModule,
        MatTableModule,
        MatToolbarModule,
        MatExpansionModule,
    ],
    declarations: [
        BacklogComponent,
        LatestNewsComponent,
    ],
    exports: [
        BacklogComponent,
        LatestNewsComponent,
    ],
})
export class RhombusComponentsModule { }
