import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorePicturesComponent } from './more-pictures.component';

describe('MorePicturesComponent', () => {
  let component: MorePicturesComponent;
  let fixture: ComponentFixture<MorePicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorePicturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorePicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
