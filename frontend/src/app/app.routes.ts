import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tab-add-receipt',
    loadComponent: () => import('./tab-add-receipt/tab-add-receipt.page').then( m => m.TabAddReceiptPage)
  },
  {
    path: 'tab-receipt-list',
    loadComponent: () => import('./tab-receipt-list/tab-receipt-list.page').then( m => m.TabReceiptListPage)
  },
  {
    path: 'tab-spending-overview',
    loadComponent: () => import('./tab-spending-overview/tab-spending-overview.page').then( m => m.TabSpendingOverviewPage)
  },
  {
    path: 'tab-settings',
    loadComponent: () => import('./tab-settings/tab-settings.page').then( m => m.TabSettingsPage)
  },
  {
    path: 'tab-settings-categories',
    loadComponent: () => import('./tab-settings-categories/tab-settings-categories.page').then( m => m.TabSettingsCategoriesPage)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  }
];
