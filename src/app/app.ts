import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import {NavItem,SocialLink, ContactInfo } from './pages/home/home.interface';

@Component({
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('LSJ');
  isMenuOpen: boolean = false;
  
    // Método para alternar el estado del menú
    toggleMenu(): void {
      this.isMenuOpen = !this.isMenuOpen;
    }
  
    // Método para cerrar el menú (por ejemplo al hacer clic en un enlace)
    closeMenu(): void {
      this.isMenuOpen = false;
    }
    
    collegeName = 'COLEGIO LICEO SAN JUAN';
    tagline = 'Educación, formación y valores para la vida.';
    logoUrl = '/logo.jpeg';
    currentYear = new Date().getFullYear();
  
    navItems: NavItem[] = [
      { label: 'INICIO', link: '/' },
      { label: 'OFERTA ACADÉMICA', link: '/OfertaAcademica' },
      { label: 'GALERÍA', link: '/Galeria' },
      { label: 'CONTACTO', link: '/Contacto' }
    ];

    contactInfo: ContactInfo = {
        address: 'Bo. Los Dolores, Calle La Fuente, Tegucigalpa, Francisco Morazán, Honduras.',
        phone: '(504) 8760-2515/ 3211-5442',
        email: 'sanjuanliceo@gmail.com',
        mailtoUrl: 'mailto:sanjuanliceo@gmail.com?Subject=Interesado%20en%20el%20curso'
      };
    
      socialLinks: SocialLink[] = [
        { platform: 'Facebook', url: 'https://www.facebook.com/liceo.saunjuan', iconUrl: '/Facebook.svg' },
        { platform: 'Instagram', url: 'https://www.instagram.com/liceosanjuanhn/', iconUrl: '/Instagram.svg' },
        { platform: 'WhatsApp', url: 'https://wa.me/message/6V4XPC5X2ECLN1', iconUrl: '/Whatsapp.svg' }
      ];
}
