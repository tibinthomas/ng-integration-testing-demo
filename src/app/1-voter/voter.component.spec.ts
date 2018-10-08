import { VoterComponent } from './voter.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('VoterComponent', () => {

  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    })

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
  });

  it('should render #totalVote', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.vote-count'));
    const el: HTMLElement = de.nativeElement;

    expect(el.innerText).toBe('21');

  });


  it('should highlight the button on upVote', () => {
    component.myVote = 1;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(de.classes['highlighted']).toBeTruthy();

  });

  it('should increase the total votes when I click the upvote', () => {
    const upVoteButton = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    upVoteButton.triggerEventHandler('click', null);
    expect(component.totalVotes).toBe(1);


});
