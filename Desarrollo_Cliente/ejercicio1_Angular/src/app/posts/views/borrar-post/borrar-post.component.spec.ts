import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarPostComponent } from './borrar-post.component';

describe('BorrarPostComponent', () => {
  let component: BorrarPostComponent;
  let fixture: ComponentFixture<BorrarPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
