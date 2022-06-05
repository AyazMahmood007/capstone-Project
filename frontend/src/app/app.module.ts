import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './categories/category/category.component';
import { CategoryService } from './shared/category.service';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import { BrandsComponent } from './brands/brands.component';
import { ProductsComponent } from './products/products.component';
import { BrandComponent } from './brands/brand/brand.component';
import { ProductComponent } from './products/product/product.component';
import { BrandService } from './shared/brand.service';
import {MatSelectModule} from '@angular/material/select';
import { ProductService } from './shared/product.service';
import { HighchartsChartModule } from 'highcharts-angular';
import { PosComponent } from './pos/pos.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    CategoriesComponent,
    CategoryComponent,
    BrandsComponent,
    ProductsComponent,
    BrandComponent,
    ProductComponent,
    PosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatToolbarModule,
    HttpClientModule,
    AppRoutingModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule,
    FormsModule,
    MatDialogModule,
    MatListModule,
    MatSelectModule,
    HighchartsChartModule
    
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  },CategoryService,BrandService,ProductService],
  bootstrap: [AppComponent],
  entryComponents:[CategoryComponent,BrandComponent,ProductComponent]
})
export class AppModule { }
