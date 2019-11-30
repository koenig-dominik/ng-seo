import { NgModule } from '@angular/core';
import { UpdateTitleComponent } from './components/update-title/update-title.component';
import { UpdateMetaComponent } from './components/update-meta/update-meta.component';



@NgModule({
  declarations: [UpdateTitleComponent, UpdateMetaComponent],
  imports: [
  ],
  exports: [
    UpdateTitleComponent,
    UpdateMetaComponent
  ]
})
export class SeoModule { }
