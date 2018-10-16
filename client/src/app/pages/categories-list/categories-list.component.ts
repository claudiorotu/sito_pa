import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { CategoriesService } from '../../services/categories.service';
// Import Models
import { Categories } from '../../domain/sito_pa_db/categories';

// START - USED SERVICES
/**
* CategoriesService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* CategoriesService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Categories
 * @class CategoriesListComponent
 */
@Component({
    selector: 'app-categories-list',
    templateUrl: './categories-list.component.html',
    styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
    list: Categories[];
    search: any = {};
    idSelected: string;
    constructor(
        private categoriesService: CategoriesService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.categoriesService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Categories to remove
     *
     * @param {string} id Id of the Categories to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Categories
     */
    deleteItem() {
        this.categoriesService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
