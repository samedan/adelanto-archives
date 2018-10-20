import { Component, OnInit, Input } from '@angular/core';
import { PipeTransform, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../services/data.service';
import { HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-drh',
  templateUrl: './drh.component.html',
  styleUrls: ['./drh.component.css'],
  providers: [DataService]
})
export class DrhComponent implements OnInit {

  url: { id: number};
  link = 'https://www.drh-info.com/index.php';


  products: any = [];

  @Input()
  productData: any = { prod_name: '', prod_desc: '', prod_price: 0 };

  constructor(private routeActivated: ActivatedRoute, private dataService: DataService, private httpService: HttpClientModule) { }

  ngOnInit() {
    this.url = {
      id: this.routeActivated.snapshot.params['id']
    };


    this.routeActivated.params
      .subscribe(
        (params: Params) => {
          this.url.id = params['id'];
          this.link = 'https://www.drh-info.com/index_drh_' + this.url.id + '.php';
          // this.getProducts();
          this.dataService.getProduct(this.url.id).subscribe((data: {}) => {
            // console.log(data);
            this.productData = data;
        });
        }
      );


    }

    getDrh(id) {
     this.dataService.getProduct(this.url);
    }

    getProducts() {
      this.products = [];
      this.dataService.getProducts().subscribe((data: {}) => {
        console.log(data);
        this.products = data;
      });

}
}
