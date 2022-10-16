import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SliderComponent } from './slider/slider.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [HomeComponent, SliderComponent, ArticleComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  providers: [],
})
export class HomeModule {}
