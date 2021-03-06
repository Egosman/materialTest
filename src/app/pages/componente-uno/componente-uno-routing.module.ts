import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteUnoComponent } from './componente-uno.component';

const routes: Routes = [{ path: '', component: ComponenteUnoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponenteUnoRoutingModule { }
