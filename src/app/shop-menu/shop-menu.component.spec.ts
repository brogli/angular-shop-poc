import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShopMenuComponent } from './shop-menu.component';

describe('ShopMenuComponent', () => {
  let component: ShopMenuComponent;
  let fixture: ComponentFixture<ShopMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
