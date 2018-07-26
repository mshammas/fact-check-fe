import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CropperToolComponent } from './cropper-tool/cropper-tool.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { EditImageComponent } from './edit-image/edit-image.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    CropperToolComponent,
    HomeComponent,
    EditImageComponent,
    SearchResultsComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MatButtonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
