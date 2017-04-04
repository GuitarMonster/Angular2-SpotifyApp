import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../interfaces/album';
import { Artist } from '../interfaces/artist';

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

    id: string;
    album: Album[];

    constructor(private searchService: SearchService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.map(params => params['id'])
            .subscribe((id) => {
                this.searchService.getAlbum(id).subscribe(album => {
                    this.album = album;
                });
            })
    }

}
