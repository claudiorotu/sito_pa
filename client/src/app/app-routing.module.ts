// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { CategoriesComponent} from './pages/categories/categories.component';
import { CategoriesEditComponent} from './pages/categories-edit/categories-edit.component';
import { CategoriesListComponent} from './pages/categories-list/categories-list.component';
import { LinkEditComponent} from './pages/link-edit/link-edit.component';
import { LinkListComponent} from './pages/link-list/link-list.component';
import { MenuEditComponent} from './pages/menu-edit/menu-edit.component';
import { MenuListComponent} from './pages/menu-list/menu-list.component';
import { PostsComponent} from './pages/posts/posts.component';
import { PostsEditComponent} from './pages/posts-edit/posts-edit.component';
import { PostsListComponent} from './pages/posts-list/posts-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'categories',  loadChildren: './pages/categories/categories.module#CategoriesModule' , canActivate: [AuthGuard] },
    { path: 'categorieses/:id',  loadChildren: './pages/categories-edit/categories-edit.module#CategoriesEditModule' , canActivate: [AuthGuard] },
    { path: 'categorieses',  loadChildren: './pages/categories-list/categories-list.module#CategoriesListModule' , canActivate: [AuthGuard] },
    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'links/:id',  loadChildren: './pages/link-edit/link-edit.module#LinkEditModule' , canActivate: [AuthGuard] },
    { path: 'links',  loadChildren: './pages/link-list/link-list.module#LinkListModule' , canActivate: [AuthGuard] },
    { path: 'menus/:id',  loadChildren: './pages/menu-edit/menu-edit.module#MenuEditModule' , canActivate: [AuthGuard] },
    { path: 'menus',  loadChildren: './pages/menu-list/menu-list.module#MenuListModule' , canActivate: [AuthGuard] },
    { path: 'posts',  loadChildren: './pages/posts/posts.module#PostsModule' , canActivate: [AuthGuard] },
    { path: 'postses/:id',  loadChildren: './pages/posts-edit/posts-edit.module#PostsEditModule' , canActivate: [AuthGuard] },
    { path: 'postses',  loadChildren: './pages/posts-list/posts-list.module#PostsListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
