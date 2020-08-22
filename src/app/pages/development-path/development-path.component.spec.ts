import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentPathComponent } from './development-path.component';

describe('DevelopmentPathComponent', () => {
  let component: DevelopmentPathComponent;
  let fixture: ComponentFixture<DevelopmentPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
