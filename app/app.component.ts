import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent { 
    title = 'Customer App';
    name = "John";
    wardsColor = "red";

    changeColor() {
        this.wardsColor = this.wardsColor === "blue" ? "red" : "blue";
    }
}
