import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Album } from '../interfaces/album';
import { Artist } from '../interfaces/artist';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	searchRes:Artist[];

    constructor(private searchService: SearchService) {}

    ngOnInit() {}

    searchMusic(string: string) {
        if (string) {
            this.searchService.search(string).subscribe(res => {
                this.searchRes = res.artists.items;
            });
        }
    }
}

