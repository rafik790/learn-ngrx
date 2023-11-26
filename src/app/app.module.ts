import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterButtonComponent } from './components/counter-button/counter-button.component';
import { CounterDisplayComponent } from './components/counter-display/counter-display.component';
import { counterReducer } from './shared/store/counter.reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CustomCounterComponent } from './components/custom-counter/CustomCounterComponent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterComponent } from './components/counter/counter.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { blogReducer } from './shared/store/blog/blog.reducers';
import { AppState } from './shared/store/global/app.state';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { BlogEffects } from './shared/store/blog/blog.effects';
import { AppEffects } from './shared/store/global/app.effects';
import { LoaderSpinComponent } from './components/loader-spin/loader-spin.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterButtonComponent,
    CounterDisplayComponent,
    CustomCounterComponent,
    CounterComponent,
    BlogsComponent,
    HomeComponent,
    HeaderComponent,
    AddBlogComponent,
    LoaderSpinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(AppState),
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([BlogEffects, AppEffects])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
