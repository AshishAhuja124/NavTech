import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { OrderService } from './order.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    DeleteComponent,
    DetailsComponent,
    EditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/Home', pathMatch: 'full' },
      { path: 'Home', component: DeleteComponent },
      { path: 'add', component: AddComponent },
      { path: 'update/:id', component: DetailsComponent },


    ])


  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
