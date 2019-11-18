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
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AboutComponent]
})
export class AppModule { }
