import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMetaComponent } from './update-meta.component';

describe('UpdateMetaComponent', () => {
  let component: UpdateMetaComponent;
  let fixture: ComponentFixture<UpdateMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
