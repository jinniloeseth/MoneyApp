import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabReceiptListPage } from './tab-receipt-list.page';

describe('TabReceiptListPage', () => {
  let component: TabReceiptListPage;
  let fixture: ComponentFixture<TabReceiptListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabReceiptListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
