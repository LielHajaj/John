import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about-area/about/about.component';
import { ContactUsComponent } from './components/contact-us-area/contact-us/contact-us.component';
import { GiftShopComponent } from './components/gift-shop-area/gift-shop/gift-shop.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/products-area/product-details/product-details.component';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';
import { SellersComponent } from './components/sellers-area/sellers/sellers.component';

const routes: Routes = [
    {path:"home", component: HomeComponent},
    {path:"products", component: ProductListComponent},
    {path:"products/details/:productId", component: ProductDetailsComponent},
    {path:"gift-shop", component: GiftShopComponent},
    {path:"sellers", component: SellersComponent},
    {path:"about", component: AboutComponent},
    {path:"contact-us", component: ContactUsComponent},
    {path:"", redirectTo: "/home", pathMatch: "full"},
    {path:"**", component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
