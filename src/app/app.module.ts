import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { DialogComponent } from './dialog/dialog.component';

import {TooltipModule} from 'primeng/tooltip';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';




@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule,ConfirmDialogModule,TooltipModule,CalendarModule,CheckboxModule,InputTextModule],
  declarations: [ AppComponent, HelloComponent, DialogComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
