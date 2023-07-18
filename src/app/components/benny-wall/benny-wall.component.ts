import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-benny-wall',
  templateUrl: './benny-wall.component.html',
  styleUrls: ['./benny-wall.component.scss']
})
export class BennyWallComponent {
  pictures: { url: string, loaded: boolean }[] = [];
  totalPictures = 59;
  batchSize = 10;
  currentBatchIndex = 0;

  constructor() {
    this.loadNextBatch();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    if (documentHeight - (windowHeight + scrollTop) < windowHeight / 2) {
      this.loadNextBatch();
    }
    
  }

  loadNextBatch(): void {
    const start = this.currentBatchIndex;
    const end = Math.min(this.currentBatchIndex + this.batchSize, this.totalPictures);

    for (let i = start; i < end; i++) {
      const picture = { url: `benny_${i + 1}.png`, loaded: false };
      this.pictures.push(picture);
    }

    this.currentBatchIndex += this.batchSize;
  }

  onPictureLoad(picture: { url: string, loaded: boolean }): void {
    setTimeout(() => {
      picture.loaded = true;
    }, 0);
  }
}
