import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  faHeart = faHeart;
  isScrolled = false;
  logoAlt = "";
  logoImage = '../../assets/img/logo_full_alt.svg';

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = (window.scrollY || document.documentElement.scrollTop || document.body.scrollTop) > 125;
    this.logoImage = this.isScrolled ? '../../assets/img/logo_full.svg' : '../../assets/img/logo_full_alt.svg';
  }

  ngOnInit() {
    const tabLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.getElementById('navbarNav');
  
    tabLinks.forEach(tabLink => {
      tabLink.addEventListener('click', () => {
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          this.renderer.removeClass(navbarCollapse, 'show');
        }
      });
    });
  }

}
