import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponenteUnoRoutingModule } from './componente-uno-routing.module';
import { ComponenteUnoComponent } from './componente-uno.component';


@NgModule({
  declarations: [ComponenteUnoComponent],
  imports: [
    CommonModule,
    ComponenteUnoRoutingModule
  ]
})
export class ComponenteUnoModule { }
