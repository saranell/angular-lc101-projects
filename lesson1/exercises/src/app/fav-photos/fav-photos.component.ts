import { Component, OnInit } from '@angular/core';

@Component({
  selector: "fav-photos",
  templateUrl: "./fav-photos.component.html",
  styleUrls: ["./fav-photos.component.css"],
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Frogs Make Me Happy";
  image1 =
    "https://i.pinimg.com/736x/46/04/0a/46040a61360717868e5262a8eb0ef075.jpg";
  image2 =
    "https://i.pinimg.com/564x/56/2f/a7/562fa755855d9846afa1179b346b70a9.jpg";
  image3 =
    "https://i.pinimg.com/564x/1d/c8/2d/1dc82df5536334b735ad551f5e894303.jpg";

  constructor() {}

  ngOnInit() {}
}