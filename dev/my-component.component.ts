import {Component, OnInit} from '@angular/core'
import {TestComponent} from './test.component'

@Component({
    selector: 'my-component',
    templateUrl: '../templates/mycomponent.component.html'
          
    ,
    styleUrls: ['../src/css/mycomponent.css'],
    directives: [TestComponent] 


})

export class MyComponentComponent implements OnInit{
    name: string; 

    
    ngOnInit(): any{
        this.name = 'Kaushik';
    }



}