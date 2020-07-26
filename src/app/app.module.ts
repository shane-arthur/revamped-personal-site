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
import { MapComponent } from './components/map/map.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PriorWorkComponent } from './components/prior-work/prior-work.component';
import { ProductCardComponent } from './components/prior-work/product-card/product-card.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ContactComponent } from './components/contact/contact.component';
import { PorfolioItemComponent } from './components/prior-work/product-card/porfolio-item/porfolio-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppShellNoRenderDirective } from './directives/app-shell-no-render.directive';
import { AppShellRenderDirective } from './directives/app-shell-render.directive';
import { NguCarouselModule } from '@ngu/carousel';

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
    ResumeComponent,
    ContactComponent,
    AppShellNoRenderDirective,
    AppShellRenderDirective, 
    PriorWorkComponent,
    ProductCardComponent,
    PorfolioItemComponent,
    MapComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularSvgIconModule,
    HttpClientModule,
    PdfViewerModule,
    ReactiveFormsModule,
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AboutComponent, PortfolioComponent, ResumeComponent, ContactComponent, 
    PriorWorkComponent, PorfolioItemComponent, MapComponent]
})
export class AppModule { }
