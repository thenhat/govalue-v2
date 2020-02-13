import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './master/header/header.component';
import {FooterComponent} from './master/footer/footer.component';
import {LayoutComponent} from './master/layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
})
export class PageLayoutModule {}
