import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {DragDropModule} from '@angular/cdk/drag-drop';



const MatMods: any[] = [
  MatCardModule,
  MatDividerModule,
  MatToolbarModule,
  MatMenuModule,
  DragDropModule,

]

@NgModule({
  imports:
    MatMods
  ,
  exports:
    MatMods
})
export class MaterialsModule { }
