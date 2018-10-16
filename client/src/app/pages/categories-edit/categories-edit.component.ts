// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { CategoriesService } from '../../services/categories.service';
// Import Models
import { Categories } from '../../domain/sito_pa_db/categories';

// START - USED SERVICES
/**
* CategoriesService.create
*	@description CRUD ACTION create
*
* CategoriesService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* CategoriesService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Categories
 */
@Component({
    selector: 'app-categories-edit',
    templateUrl: 'categories-edit.component.html',
    styleUrls: ['categories-edit.component.css']
})
export class CategoriesEditComponent implements OnInit {
    item: Categories;
    model: Categories;
    formValid: Boolean;

    constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Categories();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.categoriesService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save Categories
     *
     * @param {boolean} formValid Form validity check
     * @param Categories item Categories to save
     */
    save(formValid: boolean, item: Categories): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.categoriesService.update(item).subscribe(data => this.goBack());
            } else {
                this.categoriesService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



