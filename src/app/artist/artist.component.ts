import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../interfaces/album';
import { Artist } from '../interfaces/artist';

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
    id: string;
    artist: Artist[];
    albums: Album[];

    constructor(private searchService: SearchService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.params.map(params => params['id'])
            .subscribe((id) => {
                this.searchService.getArtist(id).subscribe(artist => {
                    this.artist = artist;
                });

                this.searchService.getAlbums(id).subscribe(albums => {
                    this.albums = albums.items;
                });
            })
    }

}
