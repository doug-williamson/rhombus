import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { RhBlogPostComponent } from './post/post.component';
import { RhBlogPostsComponent } from './posts/posts.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,

    AngularFirestoreModule,

    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatToolbarModule,
  ],
  declarations: [RhBlogPostsComponent, RhBlogPostComponent],
  exports: [RhBlogPostsComponent, RhBlogPostComponent],
})
export class RhBlogModule { }
