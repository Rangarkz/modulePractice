import { Routes } from '@angular/router';
import { ElementsHomeComponent } from './elements/elements-home/elements-home.component';

import path from 'path';

export const routes: Routes = [
    {path: '', component: ElementsHomeComponent},
    {path: 'elements', loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule)},
    {path: 'collections', loadChildren: () => import('./collections/collections.module').then(m => m.CollectionsModule)},
];
