import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../api.services';

@Component({
  selector: 'app-more-pictures',
  templateUrl: './more-pictures.component.html',
  styleUrls: ['./more-pictures.component.css']
})
export class MorePicturesComponent implements OnInit {
  name: string;
  pictures: string[]


  constructor(private route: ActivatedRoute, private apiService: ApiService) { }
  //moredoggys = 
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.name = params.get('name')
      this.apiService.getPictures(this.name).then(pictures => this.pictures = pictures)
      .then(p => console.log(this.pictures)
      )
    })
  }

}
