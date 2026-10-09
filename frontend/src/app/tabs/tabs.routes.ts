import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'receipts',
        loadComponent: () =>
          import('../tab-receipt-list/tab-receipt-list.page').then((m) => m.TabReceiptListPage),
      },
      {
        path: 'add',
        loadComponent: () =>
          import('../tab-add-receipt/tab-add-receipt.page').then((m) => m.TabAddReceiptPage),
      },
      {
        path: 'overview',
        loadComponent: () =>
          import('../tab-spending-overview/tab-spending-overview.page').then((m) => m.TabSpendingOverviewPage),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('../tab-settings/tab-settings.page').then((m) => m.TabSettingsPage),
      },
      {
        path: '',
        redirectTo: '/tabs/receipts',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/receipts',
    pathMatch: 'full',
  },
];