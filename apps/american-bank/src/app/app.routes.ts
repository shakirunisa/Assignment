import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: "home",
        loadChildren: () => import("@bank/home").then(m => m.HomeModule),
    },
    {
        path: "auth",
        loadChildren: () => import("@bank/feature-auth").then(m => m.FeatureAuthModule),
    },
    {
        path: "profile",
        loadChildren: () => import("@bank/feature-profile").then(m => m.FeatureProfileModule),
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: `/home`,
    },
];
