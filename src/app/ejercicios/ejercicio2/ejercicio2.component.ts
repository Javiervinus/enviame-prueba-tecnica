import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css']
})
export class Ejercicio2Component implements OnInit {
  result: any = {}
  values: any = {
    1: {
      carrier: "CCH",
      service: "DEX",
    },
    2: {
      carrier: "CCH",
      service: "express",
    },
    3: {
      carrier: "CCH",
      service: "priority",
    },
    15: {
      carrier: "CHP",
      service: "nextday",
    },
    16: {
      carrier: "CHP",
      service: "sameday",
    },
    17: {
      carrier: "CHP",
      service: "express",
    }
  }
  json: any = {
    data: {
      BUIN: [
        {
          limit: 1,
          over_carrier_service_id: 17,
          under_carrier_service_id: 17
        },
        {
          limit: 2,
          over_carrier_service_id: 15,
          under_carrier_service_id: 15
        }
      ],
      LAJA: [
        {
          limit: 2,
          over_carrier_service_id: 1,
          under_carrier_service_id: 1
        }, {
          limit: 5,
          over_carrier_service_id: 2,
          under_carrier_service_id: 2
        }, {
          limit: 1,
          over_carrier_service_id: 17,
          under_carrier_service_id: 17
        }
      ],

      LEBU: [
        {
          limit: 2,
          over_carrier_service_id: 1,
          under_carrier_service_id: 1
        }, {
          limit: 6,
          over_carrier_service_id: 3,
          under_carrier_service_id: 3
        }, {
          limit: 5,
          over_carrier_service_id: 2,
          under_carrier_service_id: 2
        }, {
          limit: 4,
          over_carrier_service_id: 16,
          under_carrier_service_id: 16
        }
      ],

      LOTA: [
        {
          limit: 2,
          over_carrier_service_id: 15,
          under_carrier_service_id: 15
        }, {
          limit: 4,
          over_carrier_service_id: 16,
          under_carrier_service_id: 16
        }, {
          limit: 1,
          over_carrier_service_id: 17,
          under_carrier_service_id: 17
        }
      ]
    }
  }
  constructor() { }

  ngOnInit(): void {
    console.log("Json", this.json)
    console.log("Values", this.values)

    this.generate()
  }
  generate() {
    const keys = Object.keys(this.json.data);
    keys.forEach(k => {
      // let maxObj = this.json['data'][k].reduce((max: any, obj: any) => max.limit > obj.limit ? max : obj);
      let max = _.maxBy(this.json['data'][k], (o: any) => { return o.limit })
      this.result[k] = {
        limit: max.limit,
        over: this.values[max.over_carrier_service_id],
        under: this.values[max.under_carrier_service_id]
      }
    })
    console.log("Resultado", this.result)

  }


}
