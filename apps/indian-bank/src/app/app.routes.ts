import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: "home",
        loadChildren: () => import("@bank/home").then(m => m.HomeModule),
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: `/home`,
    },
];
