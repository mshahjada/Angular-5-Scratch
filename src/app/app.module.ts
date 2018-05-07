import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ChildnodeComponent } from './childnode/childnode.component';
// import { MyclassComponent } from './model/myclass';
import { Dataset } from './dataset';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildnodeComponent,
    //MyclassComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [Dataset],
  bootstrap: [AppComponent]
})
export class AppModule { }
