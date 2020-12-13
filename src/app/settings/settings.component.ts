import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  inverted: boolean =false;
  constructor(private  settingsService: SettingsService) { }
  
onClickBlue(){
  this.settingsService.setTheme('blue')
};
onClickWhite(){
  this.settingsService.setTheme('green')
};
onClickPink(){
  this.settingsService.setTheme('pink')
};
setInverted(value){
  if(value)
  {
    this.settingsService.setInverted('inverted')
  }
  else{
    this.settingsService.setInverted('normal')
  }
  
}

  ngOnInit(): void {
  }

}
