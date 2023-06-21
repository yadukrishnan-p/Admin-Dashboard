import { Component, EventEmitter, Output } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  Highcharts = Highcharts
chartOptions = {}

  // userdefined event creation
  //  
  @Output() MenuBtnClick = new EventEmitter()



menubtnclicked(){
  // to occure an undefined event
this.MenuBtnClick.emit()
 


}

}
