import { Component } from '@angular/core';
//import { FormsModule }   from '@angular/forms';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent { 
    title = 'Customer App';
    name = "John";
    name2 = "Steve";
    wardsColor = "blue";
    customers = [
        {id: 1, name: 'Ward'},
        {id: 2, name: 'Sally'},
        {id: 3, name: 'Nancy'},
        {id: 4, name: 'Steve'},
        {id: 5, name: 'John'},
    ];

    changeColor() {
        this.wardsColor = this.wardsColor === "green" ? "red" : "green";
    }
}
