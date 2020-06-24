import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentChildComponent } from './content-child/content-child.component';
import { CpCardComponent } from './cp-card/cp-card.component';
import { ContentProjectionComponent } from './content-projection.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContentChildComponent, CpCardComponent, ContentProjectionComponent],
  exports: [ContentProjectionComponent, ContentChildComponent]
})
export class ContentProjectionModule { }
