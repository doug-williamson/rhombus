import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RhBlogAddEditComponent } from '../modules/blog/add-edit/add-edit.component';
import { RhBlogComponent } from '../modules/blog/blog.component';
import { RhBlogDeleteComponent } from '../modules/blog/delete/delete.component';
import { RhBlogPostComponent } from '../modules/blog/read/read.component';
import { RhLatestNewsAddEditComponent } from '../modules/latest-news/add-edit/add-edit.component';
import { RhLatestNewsDeleteComponent } from '../modules/latest-news/delete/delete.component';
import { LatestNewsComponent } from '../modules/latest-news/latest-news.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatExpansionModule,
  ],
  declarations: [
    LatestNewsComponent,
    RhLatestNewsAddEditComponent,
    RhLatestNewsDeleteComponent,

    RhBlogComponent,
    RhBlogAddEditComponent,
    RhBlogPostComponent,
    RhBlogDeleteComponent,
  ],
  exports: [
    LatestNewsComponent,
    RhBlogComponent,
  ],
})
export class RhombusComponentsModule { }
