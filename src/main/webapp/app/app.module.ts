import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { RecommenderSystemApplicationSharedModule } from 'app/shared/shared.module';
import { RecommenderSystemApplicationCoreModule } from 'app/core/core.module';
import { RecommenderSystemApplicationAppRoutingModule } from './app-routing.module';
import { RecommenderSystemApplicationHomeModule } from './home/home.module';
import { RecommenderSystemApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    RecommenderSystemApplicationSharedModule,
    RecommenderSystemApplicationCoreModule,
    RecommenderSystemApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    RecommenderSystemApplicationEntityModule,
    RecommenderSystemApplicationAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class RecommenderSystemApplicationAppModule {}
