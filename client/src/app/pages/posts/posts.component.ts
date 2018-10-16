// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services

// START - USED SERVICES

// END - USED SERVICES

/**
 * Posts Component
 */
@Component({
    selector: 'app-posts',
    templateUrl : './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent {

    constructor(
        private location: Location
        ) {

    }
}
