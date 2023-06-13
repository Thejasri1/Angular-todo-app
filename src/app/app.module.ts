import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyServicesService } from './my-services.service';
import { TestPipePipe } from './test-pipe.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TestPipePipe,
    TodoAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule,
    BrowserAnimationsModule
  ],
  providers: [MyServicesService],
  bootstrap: [AppComponent]  
})
export class AppModule { }
