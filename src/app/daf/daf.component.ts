import { Component, OnInit } from '@angular/core';
import { PipeTransform, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-iframe',
  templateUrl: './daf.component.html',
  styleUrls: ['./daf.component.css']
})
export class DafComponent implements OnInit {

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


    this.routeActivated.params
      .subscribe(
        (params: Params) => {
          this.url.id = params['id'];
          this.link = 'https://www.directeur-financier.info/index_daf' + this.url.id + '.php';
        }
      );

  }

}
