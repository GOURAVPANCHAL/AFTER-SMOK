import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CartComponent } from './cart/cart.component';
import { ChangeContentComponent } from './change-content/change-content.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesWeOfferComponent } from './courses-we-offer/courses-we-offer.component';
import { DetailComponent } from './detailComponent/detail.component';
import { DontQuitComponent } from './dont-quit/dont-quit.component';
import { HomeComponent } from './home/home.component';
import { QuitComponent } from './i-want-to-quit/quit.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { OurProductComponent } from './our-product/our-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RecentlyQuitComponent } from './recently-quit/recently-quit.component';
import { SalesComponent } from './sales/sales.component';


const routes: Routes = [
  // Fallback when no prior route is matched
  {
    path: '',
    component: MainLayoutComponent,
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'Our-Products',
    component: OurProductComponent
  },
  {
    path: 'quit/:type',
    component: QuitComponent
  },
  // {
  //   path: 'dont-quit',
  //   component: DontQuitComponent
  // },
  // {
  //   path: 'recently-quit',
  //   component: RecentlyQuitComponent
  // },
  {
    path: 'sales',
    component: SalesComponent
  },

  {
    path: 'change-content',
    component: ChangeContentComponent
  },
  {
    path: 'change-content/:type',
    component: DetailComponent
  },
  {
    path: 'Contact',
    component: ContactComponent
  },
  {
    path: 'Cart',
    component: CartComponent
  },
  {
    path: 'blog/:id',
    component: BlogDetailComponent
  },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
