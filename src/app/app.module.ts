import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module';
import { HeaderOnlyLayoutComponent } from './layouts/header-only-layout/header-only-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './auth/auth.reducer';
import { CoursesWeOfferComponent } from './courses-we-offer/courses-we-offer.component';
import { InfoComponent } from './info/info.component';
import { BlogComponent } from './blog/blog.component';
import { MatCardAvatar, MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { AboutComponent } from './about/about.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { PromotionalFormComponent } from './promotional-form/promotional-form.component';
import { SocialComponent } from './social/social.component';
import { OurProductComponent } from './our-product/our-product.component';
// import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { PaymentsComponent } from './payments/payments.component';
import { ChangeContentComponent } from './change-content/change-content.component';
import { DetailComponent } from './detailComponent/detail.component';
import { RouterModule } from '@angular/router';
import { SalesComponent } from './sales/sales.component';
import { DontQuitComponent } from './dont-quit/dont-quit.component';
import { RecentlyQuitComponent } from './recently-quit/recently-quit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { QuitComponent } from './i-want-to-quit/quit.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderOnlyLayoutComponent,
    AdminLayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainLayoutComponent,
    CoursesWeOfferComponent,
    InfoComponent,
    BlogComponent,
    AboutComponent,
    TestimonialComponent,
    ComingSoonComponent,
    PromotionalFormComponent,
    SocialComponent,
    OurProductComponent,
    ContactComponent,
    CartComponent,
    PaymentsComponent,
    DetailComponent,
    ChangeContentComponent,
    SalesComponent,
    QuitComponent,
    DontQuitComponent,
    RecentlyQuitComponent,
    BlogDetailComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AuthModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    StoreModule.forRoot({ loginStatus: authReducer }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
