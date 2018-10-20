import { EditionService } from './../services/edition.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Edition } from '../edition';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
export class EditionComponent implements OnInit {

  memberFoundParametersArray = { type: '', description: '', id: 0, image: '', name: '', dateAdded: '', members: '', link: '' };
  // edition = 'First edition';
  @Input()
  edition: Edition;

  @Input()
  industries: any = { type: '', description: '', id: 0, image: '', name: '', dateAdded: '', members: '', link: '' };

  id: number;
  type: string;

  constructor(private route: ActivatedRoute,
    private editionService: EditionService,
    private location: Location) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.type = params['annonceur'];
          console.log(this.id, this.type);
          this.getEdition(this.id, this.type);
        }
      );
    // this.getEdition(this.id, this.type);
    // this.getEditionProperties();
  }

  // TS File
  // getEdition(): void {{
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.editionService.getEdition(id)
  //     .subscribe(edition => this.edition = edition);
  // }}

  goBack(): void {
    this.location.back();
  }

  // getEditionProperties() {
  //   this.editionService.getEditions().subscribe((data: {}) => {
  //     console.log('editionProperties' + data);
  //   });
  // }

  getEdition(id, type) {
    this.industries = [];
    this.editionService.getEditions().subscribe((data: {}) => {
      console.log(data);
      this.industries = data;
      // Call to json file response, find member with some id(url parameter) in it
      this.memberFoundParametersArray = this.industries.find(x => x.id === id && x.type === type);

      console.log(this.memberFoundParametersArray);
    });
  }
}
