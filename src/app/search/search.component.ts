import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  doggys = [
  {name: 'african', picture: 'https://images.dog.ceo/breeds/african/n02116738_7170.jpg'},
  {name: 'boxer', picture: 'https://images.dog.ceo/breeds/boxer/n02108089_125.jpg'},
  {name: 'shiba', picture: 'https://images.dog.ceo/breeds/shiba/shiba-8.jpg'},
  {name: 'akita', picture: 'https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg'},
  {name: 'basenji', picture: 'https://images.dog.ceo/breeds/basenji/n02110806_1013.jpg'}];

  ngOnInit(): void {
  }

  
}
