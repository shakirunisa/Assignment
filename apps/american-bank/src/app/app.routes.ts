import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: "appB",
        loadChildren: () => import("@bank/home").then(m => m.HomeModule),
    },
    {
        path: "library",
        loadChildren: () => import("@bank/shared").then(m => m.SharedModule),
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: `/appB`,
    },
];
