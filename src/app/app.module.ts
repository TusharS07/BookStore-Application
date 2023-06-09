import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './Componts/dashbord/dashbord.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Componts/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import { DisplayAllBooksComponent } from './Componts/display-all-books/display-all-books.component';
import { GetAllBooksComponent } from './Componts/get-all-books/get-all-books.component';
import {MatSelectModule} from '@angular/material/select';
import { SearchFilterPipe } from './Pipes/SearchFilterPipe/search-filter.pipe';
import { QuickViewBookDataComponent } from './Componts/quick-view-book-data/quick-view-book-data.component';
import {MatDividerModule} from '@angular/material/divider';
import { SortPipePipe } from './Pipes/sortPipe/sort-pipe.pipe';
import { CartComponent } from './Componts/cart/cart.component';
import {MatExpansionModule} from '@angular/material/expansion';




@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    LoginComponent,
    DisplayAllBooksComponent,
    GetAllBooksComponent,
    SearchFilterPipe,
    QuickViewBookDataComponent,
    SortPipePipe,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatMenuModule,
    MatSelectModule,
    MatDividerModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
