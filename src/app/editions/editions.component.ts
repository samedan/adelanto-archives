import { EditionService } from './../services/edition.service';
import { Edition } from './../edition';
import { Component, OnInit } from '@angular/core';
import { EDITIONS } from 'src/assets/editions';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-editions',
  templateUrl: './editions.component.html',
  styleUrls: ['./editions.component.css']
})
export class EditionsComponent implements OnInit {

  // editions: Edition = {
  //   type: 'Industrie',
  //   description: 'desc',
  //   id: '03',
  //   image: 'image',
  //   name: 'NameIndustrie',
  //   dateAdded: '1810',
  //   members: 'Esker, Sage',
  //   link: 'url'
  // };

  // editions = EDITIONS;
  editions: Edition[];
  // selectedEdition: Edition;

  constructor( private editionService: EditionService) { }

  ngOnInit() {
    this.getEditionS();
  }

  // onSelectEdition(edition: Edition): void {
  //   this.selectedEdition = edition;
  // }

  // getEditionS(): void {
  //   this.editions = this.editionService.getEditions();
  // }
  getEditionS(): void {
    this.editionService.getEditions()
      .subscribe(editions => this.editions = editions);
  }

}
