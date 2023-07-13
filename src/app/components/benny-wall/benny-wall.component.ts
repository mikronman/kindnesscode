import { Component } from '@angular/core';

@Component({
  selector: 'app-benny-wall',
  templateUrl: './benny-wall.component.html',
  styleUrls: ['./benny-wall.component.scss']
})
export class BennyWallComponent {
  pictures: { url: string }[] = [];

  constructor() {
    this.buildPictures();
  }

  private buildPictures(): void {
    for (let i = 1; i <= 42; i++) {
      const picture = { url: `benny_${i}.png` };
      this.pictures.push(picture);
    }
  }
}
