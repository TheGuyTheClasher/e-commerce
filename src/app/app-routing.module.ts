import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { WishlistComponent } from 'src/app/components/shopping-cart/wishlist/wishlist.component';

const routes: Routes = [
    { path: '', redirectTo: '/shop', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'shop', component: ShoppingCartComponent },
    { path: 'wishlist', component: WishlistComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {

}