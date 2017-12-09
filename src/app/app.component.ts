import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as fp from 'flatpickr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'flatpicker demo';
  sd1:any;
  ed1:any;
  sd2:any;
  ed2:any;

  ngOnInit(){
    console.log("On init");
  }

  ngAfterViewInit(){
    console.log("After view init");
    
    this.sd1 = fp("#startDate1",{
      dateFormat:'d-m-Y at H:i',
      enableTime: true,
      time_24hr:true,
      onOpen: this.sd1Open,
      onChange: this.sd1Changed,
      onClose: this.sd1Closed,
      minuteIncrement: 5
    });

    
    this.ed1 = fp("#endDate1",{
      dateFormat:'d-m-Y at H:i',
      enableTime: true,
      time_24hr:true,
      onOpen:this.ed1Open
    });

    this.sd2 = fp("#startDate2",{
      dateFormat:'d-m-Y',
      //enableTime: true,
      //time_24hr:true
    });
    this.ed2 = fp("#endDate2",{
      dateFormat:'d-m-Y',
      //enableTime: true,
      //time_24hr:true
    });
  }

  sd1Open(x,y,z){
    console.log("startData1 open...",x,y,z)
  }

  sd1Changed(selDates,strDate,instance){
    console.log("startDate1 changed...", strDate);
  }  

  sd1Closed(selDates,strDate,instance){
    console.log("startDate1 closed...", strDate);
    //set enddate min value
    debugger
    this.setEd1MinDate(selDates[0]) 
  }
  /**
   * Set EndDate 1 minDate value of datepicker
   * @param minDate 
   */
  setEd1MinDate(minDate){
    if (this.ed1){
      this.ed1.set("minDate",minDate);
    }    
  }
  ed1Open(x,y,z){
    console.log("endDate open...", z)
    //z.set("minDate",this.sd1.)
  }



}
