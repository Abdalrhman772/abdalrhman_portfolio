import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger,
} from '@angular/animations';
import {
  LucideAngularModule,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Layers,
  Cpu,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Globe,
  Terminal,
  User,
  Menu,
  X,
} from 'lucide-angular';

interface NavLink {
  name: string;
  href: string;
}

interface Position {
  role: string;
  date: string;
  description: string;
}

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description?: string;
  positions?: Position[];
  tags: string[];
}

interface SkillBlock {
  title: string;
  icon: string;
  items: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // Fade in animation
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-out', style({ opacity: 1 })),
      ]),
    ]),

    // Slide down animation for mobile menu
    trigger('slideDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-in',
          style({ opacity: 0, transform: 'translateY(-10px)' })
        ),
      ]),
    ]),

    // Fade in up with delay
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(
          '{{delay}}ms 600ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),

    // Stagger animation for hero content
    trigger('staggerFadeIn', [
      transition(':enter', [
        query(
          ':self',
          [
            style({ opacity: 0, transform: 'translateY(30px)' }),
            stagger(100, [
              animate(
                '800ms ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),

    // Slide in from left
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate(
          '800ms 300ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
    ]),

    // Slide in from right
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate(
          '800ms 300ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  // Icon exports for template
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Mail = Mail;
  readonly Phone = Phone;
  readonly MapPin = MapPin;
  readonly ExternalLink = ExternalLink;
  readonly Code = Code;
  readonly Layers = Layers;
  readonly Cpu = Cpu;
  readonly Terminal = Terminal;
  readonly Globe = Globe;
  readonly User = User;
  readonly GraduationCap = GraduationCap;
  readonly ChevronRight = ChevronRight;
  readonly Menu = Menu;
  readonly X = X;
  readonly Briefcase = Briefcase;

  isMenuOpen = false;
  scrolled = false;
  activeSection = '';

  navLinks: NavLink[] = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
  ];

  skills = {
    core: [
      'Angular',
      'TypeScript',
      'RxJS',
      'Standalone Components',
      'Lazy Loading',
    ],
    ui: ['Tailwind CSS', 'Bootstrap', 'Angular Material', 'PrimeNG'],
    geo: ['Leaflet', 'Google Maps API', 'Interactive Dashboards', 'Data Viz'],
    tools: ['Git', 'Keycloak', 'Jenkins', 'Bitbucket', 'OOP'],
  };

  skillBlocks: SkillBlock[] = [
    { title: 'Core Frontend', icon: 'terminal', items: this.skills.core },
    { title: 'UI & Styling', icon: 'layers', items: this.skills.ui },
    { title: 'Maps & Data', icon: 'globe', items: this.skills.geo },
    { title: 'Tools & DevOps', icon: 'cpu', items: this.skills.tools },
  ];

  experience: Experience[] = [
    {
      title: 'Frontend Developer',
      company: 'Eden Technologies',
      location: 'Cairo, Egypt (Hybrid)',
      period: 'Apr 2024 – Present',
      positions: [
        {
          role: 'Mid-level Frontend Developer',
          date: 'Jun 2025 – Present',
          description:
            'Leading architecture and development of Angular applications. Defining scalable frontend structures and guiding technical direction for enterprise solutions.',
        },
        {
          role: 'Frontend Developer',
          date: 'Apr 2024 – Jun 2025',
          description:
            'Delivered enterprise-level ticketing and customer care systems. Integrated statistical data visualization with Google Maps and Leaflet for real-time monitoring.',
        },
      ],
      tags: ['Angular', 'Enterprise', 'Lead', 'Maps', 'Dashboards'],
    },
    {
      title: 'Part-time Frontend Developer',
      company: 'Astrik.ai',
      location: 'Remote',
      period: 'Jul 2025 – Present',
      description:
        'Building optimized chat interfaces for AI-driven platforms. Improving SEO/Accessibility metrics and implementing RBAC (Role-Based Access Control) for secure, scalable user management.',
      tags: ['AI', 'Accessibility', 'Remote', 'RBAC', 'Chat UI'],
    },
    {
      title: 'Frontend Developer Intern',
      company: 'TensorGraph',
      location: 'Internship',
      period: 'Jun 2023 – Aug 2023',
      description:
        'Contributed to Fluido.ai using Angular and Tailwind CSS. Mastered HTTP interceptors, route guards, and clean code principles in a professional development environment.',
      tags: ['Learning', 'Fluido.ai', 'Clean Code', 'Tailwind'],
    },
  ];

  stats = [
    { label: 'Experience', val: '3+ Years' },
    { label: 'Tech Stack', val: 'Angular Focus' },
    { label: 'Projects', val: 'Enterprise' },
    { label: 'Location', val: 'Hybrid/Remote' },
  ];

  ngOnInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.scrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const sections = ['about', 'experience', 'skills', 'education'];
    const current = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      }
      return false;
    });
    if (current) {
      this.activeSection = current;
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  getIconForSkillBlock(icon: string): any {
    const iconMap: { [key: string]: any } = {
      terminal: Terminal,
      layers: Layers,
      globe: Globe,
      cpu: Cpu,
    };
    return iconMap[icon];
  }

  sendEmail(): void {
    window.location.href = 'mailto:abdalrhmanmahmoud27@gmail.com';
  }
}
