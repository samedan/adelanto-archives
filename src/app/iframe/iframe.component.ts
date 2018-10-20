import { Component, OnInit } from '@angular/core';
import { PipeTransform, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})
export class IframeComponent implements OnInit {

  url: { id: number};

  // dafs = [
  //     { id: 30, name: 'daf30'},
  //     { id: 29, name: 'daf29'},
  //     { id: 28, name: 'daf28'},
  //     { id: 27, name: 'daf27'},
  //     { id: 26, name: 'daf26'}
  // ];

  link = 'https://www.directeur-financier.info/index.php';

  constructor(private routeActivated: ActivatedRoute) { }

  ngOnInit() {
    this.url = {
      id: this.routeActivated.snapshot.params['id']
    };
    if (this.url.id) {
    this.link = 'https://www.directeur-financier.info/index_daf' + this.url.id + '.php';
    console.log(this.url.id);
    }
  }

}
