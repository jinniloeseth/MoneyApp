import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabSettingsCategoriesPage } from './tab-settings-categories.page';

describe('TabSettingsCategoriesPage', () => {
  let component: TabSettingsCategoriesPage;
  let fixture: ComponentFixture<TabSettingsCategoriesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSettingsCategoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
