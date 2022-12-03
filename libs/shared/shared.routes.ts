import { Route } from '@angular/router';
import { HeaderComponent } from './src/lib/header/header.component';

export const shareRoutes: Route[] = [
    {
        path: "library",
        component: HeaderComponent,
    },
];
