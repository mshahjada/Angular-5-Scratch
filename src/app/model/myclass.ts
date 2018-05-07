import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-my-class',
    template: `<p>My class info {{className}}</p>`
})

export class MyclassComponent implements OnInit {
    className = '';
    constructor() {
    }

    ngOnInit() {
        this.className = 'seven';
    }
}
