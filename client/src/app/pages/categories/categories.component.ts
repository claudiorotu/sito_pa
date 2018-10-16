// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services

// START - USED SERVICES

// END - USED SERVICES

/**
 * Categories Component
 */
@Component({
    selector: 'app-categories',
    templateUrl : './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

    constructor(
        private location: Location
        ) {

    }
}
