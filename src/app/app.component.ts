import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {

  cnyValue = 1;
  usdValue = 50;
  dataList = [];
  exchangeRate = 6.8;
  section = 20;
  step = 0.2;

  constructor() {

  }

  ngOnInit() {
    this.generateDataList(this.cnyValue);
  }

  initConfigParams() {
    this.step = 0.2;
    this.section = 30;
  }

  fixStep(value) {
    this.initConfigParams();
    if (!Number.isInteger(value)) {
      this.step = this.step * 0.1;
      this.section = this.section * 0.1;
    }
  }

  generateDataList(cny, usd?) {
    this.dataList = [];
    if (cny || cny === 0) {
      let i = cny;
      this.fixStep(cny);
      while (i < cny + this.section) {
        this.dataList.push({
          cny: i,
          usd: i / this.exchangeRate
        });
        i += this.step;
      }
    } else if (usd) {
      let i = usd;
      this.fixStep(usd);
      while (i < usd + this.section) {
        this.dataList.push({
          cny: i * this.exchangeRate,
          usd: i
        });
        i += this.step;
      }
    }
  }

  cnyConfirm() {
    this.generateDataList(this.cnyValue);
  }

  usdConfirm() {
    this.generateDataList(null, this.usdValue);
  }

  ngOnChanges() {
  }
}
