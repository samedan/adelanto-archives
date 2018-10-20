import { EditionService } from './../services/edition.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Edition } from '../edition';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [DataService]
})
export class NavbarComponent implements OnInit {

  dafs: any = ['test', 29, 28, 27];
  drhs: { name, dateRouted }[] = [];
  industries: { controller, template, url, image, name, dateAdded, members, edition }[] = [];
  // "controller": "Industrie",
  //               "template": "",
  //               "url": "02",
  //               "image": "https://www.adelanto.fr/web/industrie_info/1802_01/esker/images/email/1802_industrie_info_esker_email_03.gif",
  //               "name": "Industrie info",
  //               "dateAdded": "18.09",
  //               "members": ["Esker", "Sage"],
  //               "edition":
  editions: Edition[];

  constructor(private dataService: DataService, private editionService: EditionService) { }

  ngOnInit() {
    this.drhs = this.dataService.drhs;
    this.industries = this.dataService.industries;

    // console.log(this.drhs);
    this.getEditionS();


}
getEditionS(): void {
  this.editionService.getEditions()
    .subscribe(editions => this.editions = editions);
}

}
