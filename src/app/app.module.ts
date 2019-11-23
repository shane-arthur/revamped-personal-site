import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderItemComponent } from './components/header/header-item/header-item.component';
import { HomeTextComponent } from './components/home/home-text/home-text.component';
import { ProfessionTextComponent } from './components/home/profession-text/profession-text.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { DynamicComponentDirective } from './directives/dynamic-component.directive';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    HeaderItemComponent,
    HomeTextComponent,
    ProfessionTextComponent,
    ModalComponent,
    ModalContainerComponent,
    DynamicComponentDirective,
    AboutComponent,
    PortfolioComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularSvgIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AboutComponent, PortfolioComponent, ResumeComponent]
})
export class AppModule { }
