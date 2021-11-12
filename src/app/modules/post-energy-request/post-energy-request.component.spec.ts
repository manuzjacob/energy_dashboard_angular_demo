import { Overlay } from '@angular/cdk/overlay';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { Consumer } from 'src/app/Model/consumer';
import { ConsumerService } from 'src/app/services/consumer.service';


import { PostEnergyRequestComponent } from './post-energy-request.component';

describe('PostEnergyRequestComponent', () => {
  let component: PostEnergyRequestComponent;
  let fixture: ComponentFixture<PostEnergyRequestComponent>;

  let submitEl: DebugElement;
  let nameEl: DebugElement;
  let kwhEl: DebugElement;
  let testBedService: ConsumerService;


  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ PostEnergyRequestComponent ],
      providers : [ConsumerService]
    });

    fixture = TestBed.createComponent(PostEnergyRequestComponent);
    component = fixture.componentInstance;

    submitEl = fixture.debugElement.query(By.css('input[type=submit]'));
    nameEl = fixture.debugElement.query(By.css('input[type=text]'));
    kwhEl = fixture.debugElement.query(By.css('input[type=number]'))
    

  });





  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('entering name and kwh emits onAddConsumer event ', async () =>{
    let user :Consumer= {
      name: "manu",
      kwh: 4,
      id: 1,
      isAvailable: true
    };

    
    nameEl.nativeElement.value = "manu";
    kwhEl.nativeElement.value = "4";

    component.onAddConsumer.subscribe(
      (value) =>  user = value
      // {
      // expect(value.name).toBe('manu')
      // expect(value.kwh).toBe(4)}
      
      );

    
    
      submitEl.triggerEventHandler('click', null);
    // const val = await new Promise<Consumer>((resolve, reject) => {
    //   component.onAddConsumer.subscribe(
    //     (value) => resolve(value)
    //   );
    //   submitEl.triggerEventHandler('click', null);
    //   // here use a to escape from promise in case subscription is not triggered like:
    //   // setTimeout(() => reject(new Error()), 100)
    // })
    // expect(val.name).toBe('manu')
    // expect(val.kwh).toBe(4)
    expect(user.name).toBe('manu')
    expect(user.kwh).toBe(4)


    
  })
});
