import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addBlogAction, updateBlogAction } from 'src/app/shared/store/blog/blog.actions';
import { BlogModel } from 'src/app/shared/store/blog/blog.model';
import { getBlogById } from 'src/app/shared/store/blog/blog.selector';
import { StoreModel } from 'src/app/shared/store/global/store.model';


@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  pagetitle = '';
  editblogid = 0;
  editdata: BlogModel;
  blogform = this.builder.group({
    id: this.builder.control(0),
    title: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required)
  })


  constructor(private dialogref: MatDialogRef<AddBlogComponent>, private builder: FormBuilder,
    private store: Store<StoreModel>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  ngOnInit(): void {
    this.pagetitle = this.data.title;
    if (this.data.isedit) {
      this.editblogid = this.data.id;
      this.store.select(getBlogById(this.editblogid)).subscribe({
        next: (data: BlogModel) => {
          this.editdata = data;
          this.blogform.setValue({
            id: this.editdata.id,
            title: this.editdata.title,
            description: this.editdata.description
          })
        }
      })
    }
  }
  onSaveBlogs() {
    const _bloginput: BlogModel = {
      id: 0,
      title: this.blogform.value.title as string,
      description: this.blogform.value.description as string
    }
    if (this.editblogid > 0) {
      _bloginput.id = this.editblogid;
      this.store.dispatch(updateBlogAction({ blogdata: _bloginput }));
    } else {
      this.store.dispatch(addBlogAction({ blogdata: _bloginput }));
    }

    this.closepopup();
  }

  closepopup() {
    this.dialogref.close();
  }
}
