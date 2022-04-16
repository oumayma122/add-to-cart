import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'add-to-cart';

public dataFields: Object= {text: 'Item' , value: 'Id'};

public localData: Object[] = [
    { Id: 'item1' , Item: 'wall1'},
    { Id: 'item2' , Item: 'wall2'},
    { Id: 'item3' , Item: 'floor'},
    { Id: 'item4' , Item: 'placeholder'}
];
}
