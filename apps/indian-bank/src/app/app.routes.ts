import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: "home",
        loadChildren: () => import("@bank/home").then(m => m.HomeModule),
    },
    {
        path: "library",
        loadChildren: () => import("@bank/shared").then(m => m.SharedModule),
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: `/home`,
    },
];
