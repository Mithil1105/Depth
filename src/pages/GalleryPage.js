import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';
import PageBanner from '../components/common/PageBanner';
import Section from '../components/common/Section';

// Dynamically import all images from the gallery
const importAll = (r) => {
    return r.keys().map(filename => ({
        src: r(filename),
        name: filename.replace('./', ''),
    }));
};

// All image descriptions, materials, and heights
const imageDescriptions = {
    'Picture1.png': {
        title: 'Lion Sculpture made from Metal',
        height: '13 ft. height',
        material: 'Metal',
    },
    'Picture2.png': {
        title: 'Deer Sculpture made from Metal',
        height: 'Life size',
        material: 'Metal',
    },
    'Picture3.png': {
        title: 'Lion Sculpture made from Metal',
        height: 'Life size',
        material: 'Metal',
    },
    'Picture4.png': {
        title: 'Lion Sculpture made from Metal',
        height: 'Life size',
        material: 'Metal',
    },
    'Picture5.png': {
        title: 'Lion Sculpture made from Metal',
        height: 'Life size',
        material: 'Metal',
    },
    'Picture6.png': {
        title: 'Egret bird Sculpture made from Metal',
        height: '10 ft. height',
        material: 'Metal',
    },
    'Picture7.png': {
        title: 'Egret bird Sculpture with Lighting made from Metal',
        height: '10 ft. height',
        material: 'Metal',
    },
    'Picture8.png': {
        title: 'Pelican bird Sculpture with lighting made from Metal',
        height: '10 ft. height',
        material: 'Metal',
    },
    'Picture9.png': {
        title: 'Pelican bird Sculpture with lighting made from Metal',
        height: '9 ft. height',
        material: 'Metal',
    },
    'Picture10.png': {
        title: 'Deer Sculpture made from Metal',
        height: '8 ft. height',
        material: 'Metal',
    },
    'Picture11.png': {
        title: 'Butterfly Sculpture with lighting made from Metal',
        height: '8 ft. height',
        material: 'Metal',
    },
    'Picture12.png': {
        title: 'Leaf Sculpture with lighting made from Metal',
        height: '18 ft. height',
        material: 'Metal',
    },
    'Picture13.png': {
        title: 'Flamingo Sculpture made from Metal',
        height: 'Life size',
        material: 'Metal',
    },
    'Picture14.png': {
        title: 'Butterfly Sculpture made from Metal',
        height: '8 ft. height',
        material: 'Metal',
    },
    'Picture15.png': {
        title: 'Blue Whale Sculpture made from Metal',
        height: '12 ft. length',
        material: 'Metal',
    },
    'Picture16.png': {
        title: 'Nandi Sculpture made from Metal',
        height: '20 ft. height',
        material: 'Metal',
    },
    'Picture17.png': {
        title: 'Butterfly Sculpture made from Metal & FRP',
        height: '9 ft.',
        material: 'Metal, Frp',
    },
    'Picture18.png': {
        title: 'Tiger Sculpture made from Metal & FRP',
        height: '8 ft. height',
        material: 'Metal, Frp',
    },
    'Picture19.png': {
        title: 'Garba Lady made from Metal & FRP',
        height: '14 ft., 10 ft., 8 ft. & 6 ft. height',
        material: 'Metal, Frp',
    },
    'Picture20.png': {
        title: 'Camel Sculpture made from Metal & FRP',
        height: '8 ft. height',
        material: 'Metal, Frp',
    },
    'Picture21.png': {
        title: 'Lion Sculpture made from Metal & FRP',
        height: '7 ft. height',
        material: 'Metal, Frp',
    },
    'Picture22.png': {
        title: 'Leopard Sculpture made from FRP',
        height: '8 ft. height',
        material: 'Frp',
    },
    'Picture23.png': {
        title: 'Lion Sculpture made from FRP',
        height: '8 ft. height',
        material: 'Frp',
    },
    'Picture24.png': {
        title: 'Spotted Deer Sculpture made from FRP',
        height: 'Larger than life size',
        material: 'Frp',
    },
    'Picture25.png': {
        title: 'Spotted Deer Sculpture made from FRP',
        height: 'Larger than life size',
        material: 'Frp',
    },
    'Picture26.png': {
        title: 'Crocodile Sculpture made from FRP',
        height: 'Life size',
        material: 'Frp',
    },
    'Picture27.png': {
        title: 'Pelican Sculpture made from FRP',
        height: 'Life size',
        material: 'Frp',
    },
    'Picture28.png': {
        title: 'Sculpture made from FRP',
        height: 'Life size',
        material: 'Frp',
    },
    'Picture29.png': {
        title: 'Sculpture made from FRP',
        height: 'Life size',
        material: 'Frp',
    },
    'Picture30.png': {
        title: 'Woman Head Sculpture made from FRP',
        height: '5 ft. height',
        material: 'Frp',
    },
    'Picture31.png': {
        title: 'Butterflies on hand Sculpture made from FRP',
        height: '8 ft. Height',
        material: 'Frp',
    },
    'Picture32.png': {
        title: 'Human Sculpture made from FRP',
        height: '3 ft. height',
        material: 'Frp',
    },
    'Picture33.png': {
        title: 'Nature Sculpture made from FRP',
        height: '10 ft. length',
        material: 'Frp',
    },
    'Picture34.png': {
        title: '"I LOVE AMBARDI SAFARI PARK" made from FRP',
        height: '40 ft. height',
        material: 'Frp',
    },
    'Picture35.png': {
        title: 'Lion Family Sculpture made from Ferro Cement',
        height: '31 ft. height & 165 ft. length',
        material: 'Ferro Cement',
    },
    'Picture36.png': {
        title: 'Signage made from Ferro Cement',
        height: '12 ft. height & 17 ft. width',
        material: 'Ferro Cement',
    },
    'Picture37.png': {
        title: 'Signage made from Ferro Cement',
        height: 'ft. height & ft. width',
        material: 'Ferro Cement',
    },
    'Picture38.png': {
        title: 'Ferro Cement Gate',
        height: '33 ft. height 105 ft. width',
        material: 'Ferro Cement',
    },
    'Picture39.png': {
        title: 'Ferro Cement Gate',
        height: '33 ft. height 100 ft. width',
        material: 'Ferro Cement',
    },
    'Picture40.png': {
        title: 'Ferro Cement Gate',
        height: 'ft. height ft. width',
        material: 'Ferro Cement',
    },
    'Picture41.png': {
        title: 'Lion Sculpture made from Bronze',
        height: '10 ft. height',
        material: 'Bronze',
    },
    'Picture42.png': {
        title: 'Lion Sculpture made from Marble',
        height: '6 ft. height',
        material: 'Marble',
    },
    'Picture43.png': {
        title: 'Lion Sculpture made from Marble',
        height: 'Life size',
        material: 'Marble',
    },
    'Picture44.png': {
        title: 'Lion Sculpture made from Marble',
        height: 'Life size',
        material: 'Marble',
    },
    'Picture45.png': {
        title: 'Pelican Sculpture made from Marble',
        height: 'Life size',
        material: 'Marble',
    },
    'Picture46.png': {
        title: 'Pelican Sculpture made from Marble',
        height: 'Life size',
        material: 'Marble',
    },
    'Picture47.png': {
        title: 'Pelican Sculpture made from Marble',
        height: 'Life size',
        material: 'Marble',
    },
    'Picture48.png': {
        title: 'Pelican Sculpture made from Marble',
        height: 'Life size',
        material: 'Marble',
    },
};

function getAllMaterials() {
    const set = new Set();
    Object.values(imageDescriptions).forEach(desc => {
        desc.material.split(',').forEach(mat => set.add(mat.trim()));
    });
    return Array.from(set);
}

const GalleryPage = () => {
    const [images, setImages] = useState([]);
    const [selectedMaterial, setSelectedMaterial] = useState('All');
    const allMaterials = getAllMaterials();

    useEffect(() => {
        try {
            const importedImages = importAll(require.context('../assets/images/gallary', false, /\.(png|jpe?g|svg)$/));
            setImages(importedImages);
        } catch (error) {
            console.error('Error importing images:', error);
        }
    }, []);

    const filteredImages = selectedMaterial === 'All'
        ? images
        : images.filter(img => {
            const desc = imageDescriptions[img.name];
            if (!desc) return false;
            return desc.material.split(',').map(m => m.trim().toLowerCase()).includes(selectedMaterial.toLowerCase());
        });

    return (
        <>
            <Helmet>
                <title>Gallery | Depth & Dimension</title>
                <meta name="description" content="Explore our collection of handcrafted sculptures at Depth & Dimension." />
            </Helmet>

            <PageBanner
                title="Our Gallery"
                subtitle="Explore our collection of handcrafted sculptures"
                bgImage="https://images.unsplash.com/photo-1561839561-b13bcfe95249?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            />

            <Section>
                <GalleryContainer>
                    <FilterBar>
                        <FilterButton
                            active={selectedMaterial === 'All'}
                            onClick={() => setSelectedMaterial('All')}
                        >
                            All
                        </FilterButton>
                        {allMaterials.map(mat => (
                            <FilterButton
                                key={mat}
                                active={selectedMaterial === mat}
                                onClick={() => setSelectedMaterial(mat)}
                            >
                                {mat}
                            </FilterButton>
                        ))}
                    </FilterBar>
                    <ImageGrid>
                        {filteredImages.map((img, index) => {
                            const desc = imageDescriptions[img.name];
                            return (
                                <ImageWrapper key={index}>
                                    <Image src={img.src} alt={desc?.title || `Sculpture ${index + 1}`} loading="lazy" />
                                    <ImageDetails>
                                        <h3>{desc?.title}</h3>
                                        <p><b>Height:</b> {desc?.height}</p>
                                        <p><b>Material(s):</b> {desc?.material}</p>
                                    </ImageDetails>
                                </ImageWrapper>
                            );
                        })}
                    </ImageGrid>
                </GalleryContainer>
            </Section>
        </>
    );
};

const GalleryContainer = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem;
`;

const FilterBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 2rem;
`;

const FilterButton = styled.button`
    background: ${({ active }) => (active ? '#8B4513' : '#eaeaea')};
    color: ${({ active }) => (active ? '#fff' : '#6B3E23')};
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1.2rem;
    font-size: 1rem;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s, color 0.2s;
    &:hover {
        background: #b97c4b;
        color: #fff;
    }
`;

const ImageGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
    width: 100%;
`;

const ImageWrapper = styled.div`
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    background: #f8f5f2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
`;

const Image = styled.img`
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: contain;
    background: #eaeaea;
    border-radius: 6px;
`;

const ImageDetails = styled.div`
    margin-top: 1rem;
    text-align: center;
    h3 {
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
        color: #6B3E23;
    }
    p {
        margin: 0.2rem 0;
        color: #4d3a1a;
        font-size: 0.95rem;
    }
`;

export default GalleryPage; 