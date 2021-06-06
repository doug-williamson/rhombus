import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { RhBlogComponent } from '../blog/blog.component';
import { RhBlogPostComponent } from '../blog/read/read.component';
import { RhBlogAddEditComponent } from './add-edit/add-edit.component';
import { RhBlogDeleteComponent } from './delete/delete.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,

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
        MatSlideToggleModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatExpansionModule,

        RouterModule.forChild([
            {
                path: '',
                component: RhBlogComponent,
                data: {
                  title: 'Posts',
                },
            },
            {
                path: ':id',
                component: RhBlogPostComponent,
                data: {
                    title: 'Post',
                },
            },
        ]),
    ],
    declarations: [
        RhBlogComponent,
        RhBlogPostComponent,
        RhBlogAddEditComponent,
        RhBlogDeleteComponent,
    ],
    exports: [
        RouterModule,
    ],
})
export class RhBlogModule { }
