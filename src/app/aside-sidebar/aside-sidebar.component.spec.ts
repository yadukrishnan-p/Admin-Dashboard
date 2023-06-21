import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideSidebarComponent } from './aside-sidebar.component';

describe('AsideSidebarComponent', () => {
  let component: AsideSidebarComponent;
  let fixture: ComponentFixture<AsideSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideSidebarComponent]
    });
    fixture = TestBed.createComponent(AsideSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
