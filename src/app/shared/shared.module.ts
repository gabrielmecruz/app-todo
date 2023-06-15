import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { InputAddComponent } from './input-add/input-add.component';
import { ButtonDeleteComponent } from './button-delete/button-delete.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    HeaderComponent,
    InputAddComponent,
    ButtonDeleteComponent,
    ListComponent
  ], imports: [
    CommonModule,
    FormsModule
  ], exports: [
    HeaderComponent,
    InputAddComponent,
    ButtonDeleteComponent,
    ListComponent
  ]
})
export class SharedModule { }
