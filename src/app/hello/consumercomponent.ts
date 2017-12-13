
import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-consumer',
  template: `You Entered:{{inputData}}`
})
export class ConsumerComponent implements OnChanges {
  @Input()
    inputData: String;
  ngOnChanges(changes: SimpleChanges): void {
     for (const propName in changes) {
       const change = changes[propName];
       const current = JSON.stringify(change.currentValue);
       const previous = JSON.stringify(change.previousValue);
       console.log (propName + ' currentvalue: ' + current + ' previous Value: ' + previous);
     }
  }

}
