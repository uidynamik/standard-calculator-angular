import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StandardCalculatorComponent } from './standard-calculator/standard-calculator.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, StandardCalculatorComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
