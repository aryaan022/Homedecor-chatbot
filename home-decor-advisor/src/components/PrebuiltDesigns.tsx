import React from 'react';
import './PrebuiltDesigns.css';

interface Design {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    pinterestUrl: string;
}

const prebuiltDesigns: Design[] = [
    {
        id: 1,
        title: 'Modern Minimalist Living Room',
        description: 'Clean lines, neutral colors, and functional furniture create a serene space.',
        imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
        pinterestUrl: 'https://pinterest.com/search/pins/?q=modern%20minimalist%20living%20room'
    },
    {
        id: 2,
        title: 'Bohemian Bedroom',
        description: 'Layered textures, eclectic patterns, and natural elements for a cozy retreat.',
        imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
        pinterestUrl: 'https://pinterest.com/search/pins/?q=bohemian%20bedroom'
    },
    {
        id: 3,
        title: 'Scandinavian Kitchen',
        description: 'Light, airy spaces with functional design and natural materials.',
        imageUrl: 'https://images.unsplash.com/photo-1556911220-bff31c812dba',
        pinterestUrl: 'https://pinterest.com/search/pins/?q=scandinavian%20kitchen'
    }
];

const PrebuiltDesigns: React.FC = () => {
    return (
        <div className="prebuilt-designs-container">
            <h2>Inspiration Gallery</h2>
            <div className="designs-grid">
                {prebuiltDesigns.map((design) => (
                    <div key={design.id} className="design-card">
                        <img src={design.imageUrl} alt={design.title} className="design-image" />
                        <div className="design-content">
                            <h3>{design.title}</h3>
                            <p>{design.description}</p>
                            <a
                                href={design.pinterestUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pinterest-link"
                            >
                                View on Pinterest
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrebuiltDesigns; 