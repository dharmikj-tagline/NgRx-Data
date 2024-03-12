import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'userss',
        pathMatch: 'full'
    },
    {
        path: 'users',
        loadComponent: () => import('./components/users/components/user-list/user-list.component').then(c => c.UserListComponent),
        // resolve: [usersResolver]
    },
    {
        path: 'custom',
        loadComponent: () => import('./components/custom/components/custom-wrapper/custom-wrapper.component').then(c => c.CustomWrapperComponent),
    }
];
