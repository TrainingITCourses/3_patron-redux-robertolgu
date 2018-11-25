import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellContainerComponent } from './shell-container.component';

describe('ShellContainerComponent', () => {
  let component: ShellContainerComponent;
  let fixture: ComponentFixture<ShellContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
