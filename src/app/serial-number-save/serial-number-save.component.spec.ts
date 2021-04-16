import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialNumberSaveComponent } from './serial-number-save.component';

describe('SerialNumberSaveComponent', () => {
  let component: SerialNumberSaveComponent;
  let fixture: ComponentFixture<SerialNumberSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerialNumberSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialNumberSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
