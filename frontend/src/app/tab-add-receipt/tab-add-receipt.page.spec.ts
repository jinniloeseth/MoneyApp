import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabAddReceiptPage } from './tab-add-receipt.page';

describe('TabAddReceiptPage', () => {
  let component: TabAddReceiptPage;
  let fixture: ComponentFixture<TabAddReceiptPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAddReceiptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
