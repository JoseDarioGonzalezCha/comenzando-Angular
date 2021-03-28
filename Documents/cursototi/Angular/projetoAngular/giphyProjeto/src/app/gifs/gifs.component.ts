import { GifsService } from '../gifs.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  gif: any = [];

  q: string;

  constructor(private route: ActivatedRoute, private gifsService: GifsService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.q = params['q'];

      this.gifsService.getApiGift(this.q)
      .subscribe(gifs => {this.gif = gifs;});
    });
  }

}
