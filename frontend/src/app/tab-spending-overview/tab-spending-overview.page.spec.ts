import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabSpendingOverviewPage } from './tab-spending-overview.page';

describe('TabSpendingOverviewPage', () => {
  let component: TabSpendingOverviewPage;
  let fixture: ComponentFixture<TabSpendingOverviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSpendingOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
