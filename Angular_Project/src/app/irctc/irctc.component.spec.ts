import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IRCTCComponent } from './irctc.component';

describe('IRCTCComponent', () => {
  let component: IRCTCComponent;
  let fixture: ComponentFixture<IRCTCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IRCTCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IRCTCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
