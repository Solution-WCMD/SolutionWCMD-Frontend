import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-content.component.html',
  styleUrl: './social-content.component.css'
})
export class SocialContentComponent {
  socials = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@SolutionOfficialChannel',
      icon: 'fa-brands fa-youtube',
      color: '#FF0000',
      description: 'Watch trailers, devlogs, and gameplay!'
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/56p8gDYn9n',
      icon: 'fa-brands fa-discord',
      color: '#5865F2',
      description: 'Join the community and chat with us!'
    },
    {
      name: 'Patreon',
      url: 'https://patreon.com/SolutionGame',
      icon: 'fa-brands fa-patreon',
      color: '#F96854',
      description: 'Support development and get exclusive perks!'
    },
    {
      name: 'Steam',
      url: 'https://store.steampowered.com/app/soon',
      icon: 'fa-brands fa-steam',
      color: '#171A21',
      description: 'Wishlist Solution and follow updates on Steam.'
    },
    {
      name: 'Unity Asset Store',
      url: 'https://assetstore.unity.com/publishers/soon',
      icon: 'fa-solid fa-cubes',
      color: '#333333',
      description: 'Check out our Unity assets and tools.'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/MrMystery10-del',
      icon: 'fa-brands fa-github',
      color: '#181717',
      description: 'Explore open-source tools and contributions.'
    }
  ];
}
