import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Blogs } from 'src/app/shared/store/blog/blog.model';
import { getBlogs } from 'src/app/shared/store/blog/blog.selector';
import { AddBlogComponent } from '../add-blog/add-blog.component';
import { MatDialog } from '@angular/material/dialog';
import { loadblogsAction } from 'src/app/shared/store/blog/blog.actions';
import { AppLoader } from 'src/app/shared/store/global/gloabl.actions';
import { StoreModel } from 'src/app/shared/store/global/store.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  bloginfo: Blogs;
  constructor(private store: Store<StoreModel>, private dialog: MatDialog,) {
  }

  ngOnInit(): void {
    this.store.dispatch(AppLoader({ isLoading: true }));
    setTimeout(() => {
      this.store.dispatch(loadblogsAction());
      this.store.dispatch(AppLoader({ isLoading: false }));
    }, 1000);

    this.store.select(getBlogs).subscribe({
      next: (blogs: Blogs) => {
        this.bloginfo = blogs;
      }
    });

  }
  onAddBlog() {
    this.OpenPopup(0, 'Add Blog', false);
  }

  OpenPopup(id: number, title: any, isedit = false) {
    this.dialog.open(AddBlogComponent, {
      width: '40%',
      data: {
        id: id,
        title: title,
        isedit: isedit
      }
    });

  }
  onEditBlog(id: number) {
    this.OpenPopup(id, 'Edit Blog', true);
  }
  onRemoveBlog(id: any) {

  }
}
