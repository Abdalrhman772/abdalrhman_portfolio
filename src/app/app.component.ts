import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
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

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
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

  isMenuOpen = false;
  activeTab = 'all';
  scrolled = false;

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
    geo: ['Leaflet', 'Google Maps API', 'Interactive Dashboards'],
    tools: ['Git', 'Keycloak', 'Jenkins', 'OOP', 'Bitbucket'],
  };

  skillBlocks: SkillBlock[] = [
    { title: 'Core Frontend', icon: 'terminal', items: this.skills.core },
    { title: 'UI & Styling', icon: 'layers', items: this.skills.ui },
    { title: 'Maps & Data', icon: 'globe', items: this.skills.geo },
    { title: 'Tools & DevOps', icon: 'cpu', items: this.skills.tools },
  ];

  experience: Experience[] = [
    {
      title: 'Mid-level Frontend Developer',
      company: 'Eden Technologies',
      location: 'Cairo, Egypt (Hybrid)',
      period: '06/2025 – Present',
      description:
        'Led architecture and development of Angular applications. Defined scalable frontend structures and guided technical direction.',
      tags: ['Angular', 'RxJS', 'Lead', 'Architecture'],
    },
    {
      title: 'Part-time Frontend Developer',
      company: 'Astrik.ai',
      location: 'Remote',
      period: '07/2025 – Present',
      description:
        'Building optimized chat screens, improving SEO/Accessibility, and implementing RBAC for AI-driven platforms.',
      tags: ['AI', 'Accessibility', 'Remote', 'RBAC'],
    },
    {
      title: 'Frontend Developer',
      company: 'Eden Technologies',
      location: 'Cairo, Egypt',
      period: '04/2024 – 06/2025',
      description:
        'Delivered enterprise-level ticketing and customer care systems. Integrated statistical data visualization with Google Maps and Leaflet.',
      tags: ['Enterprise', 'Dashboards', 'Maps'],
    },
    {
      title: 'Frontend Developer Intern',
      company: 'TensorGraph',
      location: 'Internship',
      period: '06/2023 – 08/2023',
      description:
        'Contributed to Fluido.ai using Angular and Tailwind. Mastered HTTP interceptors and route guards.',
      tags: ['Learning', 'Fluido.ai', 'Clean Code'],
    },
  ];

  stats = [
    { label: 'Experience', val: '3+ Years' },
    { label: 'Tech Stack', val: 'Angular Focus' },
    { label: 'Projects', val: 'Enterprise' },
    { label: 'Location', val: 'Hybrid/Remote' },
  ];

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.scrolled = window.scrollY > 50;
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
