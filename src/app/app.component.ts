import { Component, OnInit, AfterViewInit } from '@angular/core';

//import flatpicker lib
import * as fp from 'flatpickr';
//import locales 
import { Dutch } from "flatpickr/dist/l10n/nl.js";
import { Russian } from "flatpickr/dist/l10n/ru.js";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'flatpicker demo';
  sd:any=[];
  ed:any=[];
  st:any=[];
  et:any=[];
  //sd2:any;
  //ed2:any;
  ngOnInit(){
    console.log("On init");
  }

  ngAfterViewInit(){
    console.log("After view init");
    //load datepickers
    this.initSample1();
    this.initSample2();
    this.initSample3();
  }  
//--------------------------------------------------------------
//SAMPLE 1 - DATE AND TIME, MINDATE and TIME based on user input
  initSample1(){
    this.initSd0();
    this.initEd0();
  }

  initSd0(){
    this.sd[0] = fp("#sd0",{
      dateFormat:'d-m-Y at H:i',
      enableTime: true,
      time_24hr:true,
      onOpen: this.sd0Open.bind(this),
      onChange: this.sd0Changed.bind(this),
      onClose: this.sd0Closed.bind(this),
      minuteIncrement: 5
    });
  }

  sd0Open(x,y,z){
    console.log("sd0 open...",x,y,z);
  }

  sd0Changed(selDates,strDate,instance){
    console.log("sd0 changed...", strDate);
  }  
  /**
   * Flatpickr onClose event function
   * NOTE! when passing this function to flatpicker bind this to this class
   * in order to call class functions when flatpicker closed event occure
   * @param selDates array of dates
   * @param strDate string formated date (show in input)
   * @param instance flatpickr instance
   */
  sd0Closed(selDates,strDate,instance){
    console.log("sd0 closed...", strDate);
    //debugger
    //set minDate value of ed0
    this.ed0MinDate(selDates[0]);
  }
  initEd0(){
    this.ed[0] = fp("#ed0",{
      dateFormat:'d-m-Y at H:i',
      enableTime: true,
      time_24hr:true,
      onOpen:this.ed0Open.bind(this)
    });
  }
  /**
   * Set minDate value of ed1 datepicker based on selected value in sd1 flatpickr
   * @param minDate 
   */
  ed0MinDate(minDate){
    if (this.ed[0]){
      this.ed[0].set("minDate",minDate);
    }    
  }
  ed0Open(x,y,z){
    console.log("ed0 open...", z)
    //z.set("minDate",this.sd1.)
  }
//-------------------------------------------------
// SAMPLE 2 - DATE ONLY AND LOCALIZATION
  initSample2(){
    this.initSd1();
    this.initEd1();
  }
  initSd1(){
    //debugger
    this.sd[1] = fp("#sd1",{
      dateFormat:'d-m-Y',
      locale: Dutch 
      //enableTime: true,
      //time_24hr:true
    });
  }

  initEd1(){
    //debugger
    this.ed[1] = fp("#ed1",{
      dateFormat:'d-m-Y',
      locale: Russian
      //enableTime: true,
      //time_24hr:true
    });
  }

//-------------------------------------------------
// SAMPLE 3 - ONE DATE and TWO TIME INPUTS ONLY
  initSample3(){
    this.initSd2();
    this.initSt0();
    this.initEt0();
  }
  initSd2(){
    //debugger
    this.sd[2] = fp("#sd2",{
      dateFormat:'d-m-Y',
      locale: Dutch,
      allowInput:true,
      onClose: this.minTimeSt0.bind(this)
      //enableTime: true,
      //time_24hr:true
    });
  }
  minTimeSt0(x,y,z){
    if (this.st[0]){
      //debugger 
      //this.st[0].set("minDate",x[0]);
      this.st[0].set("defaultHour",0);
    }
  }
  initSt0(){
    //debugger
    this.st[0] = fp("#st0",{
      enableTime: true,
      time_24hr:true,
      noCalendar: true,
      dateFormat:'H:i',
      locale: Dutch,
      allowInput:true,
      onClose: this.minTimeEt0.bind(this)
    });
  }
  minTimeEt0(x,y,z){
    if (this.et[0]){
      this.et[0].set("minDate",x[0]);
    }
    /* not optimal
    //debugger
    let el = document.getElementById("et0");
    el.value = x[0];
    console.log(el);
    */
  }
  initEt0(){
    //debugger
    this.et[0] = fp("#et0",{
      enableTime: true,
      time_24hr:true,
      noCalendar: true,
      dateFormat:'H:i',
      locale: Dutch,
      allowInput:true
    });
  }

}
