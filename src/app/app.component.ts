import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-Dashboard';
  // event hapand
  sidebarOpened :boolean=true

  toggle(){
    this.sidebarOpened = !this.sidebarOpened 
  }
}
