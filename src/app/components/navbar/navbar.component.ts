import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isScrolled = false;
  logoAlt = "";
  logoImage = '../../assets/img/logo_full_alt.svg';

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = (window.scrollY || document.documentElement.scrollTop || document.body.scrollTop) > 125;
    this.logoImage = this.isScrolled ? '../../assets/img/logo_full.svg' : '../../assets/img/logo_full_alt.svg';
  }
}
