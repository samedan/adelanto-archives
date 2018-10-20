import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-industrie',
  templateUrl: './industrie.component.html',
  styleUrls: ['./industrie.component.css'],
  providers: [DataService]
})
export class IndustrieComponent implements OnInit {

  url: { id: number};
  link = 'https://www.drh-info.com/index.php';
  test: any;
  products: any = [];
  memberIndustrie: any = [];
  numb = '02';
  memberFoundParametersArray = ' ';
  editionProperties = [];

  @Input()
  productData: any = { prod_name: '', prod_desc: '', prod_price: 0 };

  @Input()
  industries: any = { controller: '', template: '', url: '', image: '', name: '', dateAdded: '', members: '', edition: '' };

  constructor(private routeActivated: ActivatedRoute, private dataService: DataService, private httpService: HttpClientModule) { }

  ngOnInit() {
    this.url = {
      id: this.routeActivated.snapshot.params['id']
    };


    this.routeActivated.params
      .subscribe(
        (params: Params) => {
          this.url.id = params['id'];
          this.link = 'https://www.industrie-info.com/index_ind' + this.url.id + '.php';
          // this.getProducts();
        //   this.dataService.getEditions(this.url.id).subscribe((data: {}) => {
        //     console.log(data);
        //     this.productData = data;
        // });
        // this.getEditions();
           this.dataService.getEdition(this.url.id).subscribe((data: {}) => {

            this.industries = data;
  }
            );
        }
      );

      // Displays all Industries | json
      this.getEditions();
      this.getEdition(this.numb);
      this.getEdition('01');
      this.getEditionProperties(this.numb);

      }

      getEditions() {
        this.industries = [];
        this.dataService.getEditions().subscribe((data: {}) => {
          // console.log(data);
          this.industries = data;
        });
      }


      getEdition(id) {
        this.industries = [];
        this.dataService.getEditions().subscribe((data: {}) => {
          // console.log(data);
          this.industries = data;
          // Call to json file response, find member with some id(url parameter) in it
          this.memberFoundParametersArray = this.industries.find(x => x.url === id).members;

          console.log(this.memberFoundParametersArray);
        });
      }

      getEditionProperties(id) {
        this.dataService.getEditions().subscribe((data: {}) => {
          console.log('editionProperties' + data);
        });
      }

      getDimensionsByFind(url) {
        return this.products.find(x => x.url === url);
      }

}
