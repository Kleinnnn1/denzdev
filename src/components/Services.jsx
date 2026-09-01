import {
    Code2,
    GraduationCap,
    Smartphone,
    Palette,
    Plug,
    LifeBuoy,
} from 'lucide-react';

const services = [
    {
        title: 'Capstone & Thesis Systems',
        description:
            'End-to-end development of academic capstone and thesis projects — from system design to a fully working, defense-ready application.',
        icon: GraduationCap,
    },
    {
        title: 'Web Development',
        description:
            'Custom websites and web apps built with React, Next.js, Laravel, or Django — fast, responsive, and built to scale.',
        icon: Code2,
    },
    {
        title: 'Mobile-Friendly Apps',
        description:
            'Responsive, app-like web experiences that work smoothly across phones, tablets, and desktops.',
        icon: Smartphone,
    },
    {
        title: 'UI/UX Design',
        description:
            'Clean, intuitive interfaces designed around real user workflows, from wireframes to polished, production-ready screens.',
        icon: Palette,
    },
    {
        title: 'API Integration',
        description:
            'Connecting your app to third-party services, payment gateways, and databases with secure, well-structured integrations.',
        icon: Plug,
    },
    {
        title: 'Maintenance & Support',
        description:
            'Bug fixes, updates, and ongoing support after launch, so your system keeps running smoothly as your needs grow.',
        icon: LifeBuoy,
    },
];

function Services() {
    return (
        <section id="services">
            <div className="services-header">
                <span className="eyebrow">What I Offer</span>
                <h2>Services</h2>
            </div>

            <div className="services-grid">
                {services.map(({ title, description, icon: Icon }) => (
                    <div className="service-card" key={title}>
                        <span className="service-icon">
                            <Icon size={22} />
                        </span>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;