import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Section from '../components/common/Section';
import theme from '../styles/theme';
import { FaTimes } from 'react-icons/fa';

// Import project images
// import jadeshwar1 from '../assets/images/depthhh/Archive/Jadeshwar van/Picture73.png';
// import jadeshwar2 from '../assets/images/depthhh/Archive/Jadeshwar van/Picture69.png';
// import jadeshwar3 from '../assets/images/depthhh/Archive/Jadeshwar van/Picture68.png';

// import rakshak1 from '../assets/images/depthhh/Archive/rakshak van/Picture88.png';
// import rakshak2 from '../assets/images/depthhh/Archive/rakshak van/Picture89.png';
// import rakshak3 from '../assets/images/depthhh/Archive/rakshak van/Picture87.png';

// import nalsarovar1 from '../assets/images/depthhh/Archive/nalsarovar/Picture128.png';
// import nalsarovar2 from '../assets/images/depthhh/Archive/nalsarovar/Picture127.png';
// import nalsarovar3 from '../assets/images/depthhh/Archive/nalsarovar/Picture125.png';

// import shakti1 from '../assets/images/depthhh/Archive/51shakti/Picture115.png';
// import shakti2 from '../assets/images/depthhh/Archive/51shakti/Picture114.png';
// import shakti3 from '../assets/images/depthhh/Archive/51shakti/Picture113.png';

// Project data (store folder names instead of image arrays)
const projects = [
    {
        id: 'jadeshwar',
        title: 'Jadeshwar Van',
        location: 'Ahmedabad',
        description: 'A flagship collaboration with the Forest Department featuring artistic entrance gates, bird sculptures, and immersive photo points celebrating avian biodiversity.',
        highlights: [
            'Striking stone entrance gate with artistic carvings',
            'Ferro cement Van Kutir',
            'Realistic flamingo and crane bird sculptures',
            'The Sarus Crane photo point',
            'Artistic chabutaro (bird tower)'
        ],
        folder: 'Jadeshwar van'
    },
    {
        id: 'rakshak',
        title: 'Rakshak Van',
        location: 'Bhuj',
        description: 'Home to our iconic 15-ft tall Shaurya Shilp in bronze, honoring India\'s courageous warriors, along with various murals and wildlife installations.',
        highlights: [
            '15-ft tall Shaurya Shilp in bronze',
            '6-ft soldier photo point',
            'Wall murals including Aircraft mural and Rudra Mata story mural',
            'Realistic life-size FRP lion sculpture',
            'Wildlife dioramas featuring sloth bear, spotted deer, and sarus crane'
        ],
        folder: 'rakshak van'
    },
    {
        id: 'nalsarovar',
        title: 'Nalsarovar Wetland Reserve',
        location: 'Nalsarovar Bird Sanctuary',
        description: 'An ecological project featuring monumental sculptures and installations that blend seamlessly into the serene landscape of Gujarat\'s premier wetland reserve.',
        highlights: [
            'Monumental main entrance gate (24m x 9m x 3.5m)',
            'Metal flamingo sculptures (9 ft height)',
            'Life-size FRP flamingo island installation',
            'Informative signage and fountains (4m diameter)',
            'Pelican marble sculptures'
        ],
        folder: 'nalsarovar'
    },
    {
        id: 'shaktipeeth',
        title: '51 Shaktipeeth Parikrama Path',
        location: 'Gabbar Hill, Ambaji',
        description: 'A sacred pathway featuring monumental murals and selfie points celebrating Shakti temples across India, blending mythology with immersive public art.',
        highlights: [
            'CNC-cut "Maa Ambe" metal sculpture',
            'Murals of Ashapura Mata, Bahuchraji, Chamunda Devi',
            'Rukmini Devi, Khodiyar, and Umiya Mata murals',
            'FRP and metal murals (12 ft x 8 ft or larger)',
            'Immersive selfie points and photo opportunities'
        ],
        folder: '51shakti'
    },
    {
        id: 'thol',
        title: 'Thol Project',
        location: 'Thol',
        description: 'A project at Thol with a collection of sculptures and installations.',
        highlights: [
            'Diverse sculpture installations',
            'Integration with natural surroundings',
            'Community engagement features'
        ],
        folder: 'thol'
    },
    {
        id: 'shymal',
        title: 'Shymal Van',
        location: 'Shymal',
        description: 'A project at Shymal Van with unique artistic features and public art.',
        highlights: [
            'Unique public art installations',
            'Nature-inspired sculptures',
            'Interactive spaces for visitors'
        ],
        folder: 'shymal van'
    },
];

// Helper to dynamically import all images from a folder
function importAll(r) {
    return r.keys()
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
        .map(r);
}

const imageContexts = {
    'Jadeshwar van': importAll(require.context('../assets/images/depthhh/Archive/Jadeshwar van', false, /\.(png|jpg)$/i)),
    'rakshak van': importAll(require.context('../assets/images/depthhh/Archive/rakshak van', false, /\.(png|jpg)$/i)),
    'nalsarovar': importAll(require.context('../assets/images/depthhh/Archive/nalsarovar', false, /\.(png|jpg)$/i)),
    '51shakti': importAll(require.context('../assets/images/depthhh/Archive/51shakti', false, /\.(png|jpg)$/i)),
    'thol': importAll(require.context('../assets/images/depthhh/Archive/thol', false, /\.(png|jpg)$/i)),
    'shymal van': importAll(require.context('../assets/images/depthhh/Archive/shymal van', false, /\.(png|jpg)$/i)),
};

const PageContainer = styled.div`
    padding: ${theme.spacing(5)};
`;

const IntroText = styled.p`
    text-align: center;
    max-width: 800px;
    margin: 0 auto ${theme.spacing(8)};
    font-size: ${theme.typography.fontSize.lg};
    line-height: 1.8;
    color: ${theme.colors.text.secondary};
`;

const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: ${theme.spacing(6)};
    margin-top: ${theme.spacing(8)};
`;

const ProjectCard = styled(motion.div)`
    background: ${theme.colors.background.paper};
    border-radius: ${theme.borderRadius.large};
    overflow: hidden;
    box-shadow: ${theme.shadows.medium};
    transition: transform ${theme.transitions.medium};
    cursor: pointer;
    
    &:hover {
        transform: translateY(-5px);
    }
`;

const ProjectImage = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
`;

const ProjectContent = styled.div`
    padding: ${theme.spacing(4)};
`;

const ProjectTitle = styled.h3`
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSize.xl};
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing(2)};
`;

const ProjectLocation = styled.p`
    color: ${theme.colors.text.secondary};
    font-size: ${theme.typography.fontSize.md};
    margin-bottom: ${theme.spacing(2)};
`;

const ProjectDescription = styled.p`
    color: ${theme.colors.text.secondary};
    font-size: ${theme.typography.fontSize.md};
    line-height: 1.6;
    margin-bottom: ${theme.spacing(3)};
`;

const ViewButton = styled.button`
    background: ${theme.colors.primary.main};
    color: white;
    border: none;
    padding: ${theme.spacing(2)} ${theme.spacing(4)};
    border-radius: ${theme.borderRadius.medium};
    font-size: ${theme.typography.fontSize.md};
    cursor: pointer;
    transition: background ${theme.transitions.medium};
    
    &:hover {
        background: ${theme.colors.primary.dark};
    }
`;

// Modal Styles
const ModalOverlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: ${theme.spacing(4)};
`;

const ModalContent = styled(motion.div)`
    background: white;
    border-radius: ${theme.borderRadius.large};
    max-width: 1000px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
`;

const CloseButton = styled.button`
    position: absolute;
    top: ${theme.spacing(2)};
    right: ${theme.spacing(2)};
    background: none;
    border: none;
    color: ${theme.colors.text.primary};
    font-size: ${theme.typography.fontSize.xl};
    cursor: pointer;
    z-index: 1;
`;

const ModalHeader = styled.div`
    padding: ${theme.spacing(4)};
    border-bottom: 1px solid ${theme.colors.accent.sage};
`;

const ModalTitle = styled.h2`
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSize['2xl']};
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing(2)};
`;

const ModalLocation = styled.p`
    color: ${theme.colors.text.secondary};
    font-size: ${theme.typography.fontSize.lg};
`;

const ModalBody = styled.div`
    padding: ${theme.spacing(4)};
`;

const HighlightsList = styled.ul`
    list-style: none;
    padding: 0;
    margin-bottom: ${theme.spacing(4)};
`;

const HighlightItem = styled.li`
    color: ${theme.colors.text.secondary};
    font-size: ${theme.typography.fontSize.md};
    margin-bottom: ${theme.spacing(2)};
    padding-left: ${theme.spacing(4)};
    position: relative;
    
    &:before {
        content: '•';
        position: absolute;
        left: 0;
        color: ${theme.colors.primary.main};
    }
`;

const ImageGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: ${theme.spacing(4)};
    margin-top: ${theme.spacing(4)};
    max-height: 60vh;
    overflow-y: auto;
`;

const ProjectDetailImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: ${theme.borderRadius.medium};
`;

const ProjectsPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    // Helper to get all images for a project
    const getProjectImages = (project) => imageContexts[project.folder] || [];

    // Get all images for the selected project
    const selectedImages = selectedProject ? getProjectImages(selectedProject) : [];

    return (
        <>
            <Helmet>
                <title>Our Projects | Depth & Dimension</title>
                <meta name="description" content="Explore our portfolio of public installations, forest department projects, and cultural heritage works at Depth & Dimension." />
            </Helmet>

            <PageContainer>
                <Section title="Our Projects" align="center">
                    <IntroText>
                        Welcome to our Projects page, where art meets public space. At Depth & Dimension,
                        we have been privileged to collaborate with state departments, ecological sanctuaries,
                        and cultural heritage sites across Gujarat. Explore our highlighted projects below,
                        each brought to life with a unique artistic vision, fine craftsmanship, and a deep
                        respect for local narratives.
                    </IntroText>

                    <ProjectGrid>
                        {projects.map(project => {
                            const images = getProjectImages(project);
                            const previewImage = images && images.length > 0 ? images[0] : '';
                            return (
                                <ProjectCard
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <ProjectImage src={previewImage} alt={project.title} />
                                    <ProjectContent>
                                        <ProjectTitle>{project.title}</ProjectTitle>
                                        <ProjectLocation>{project.location}</ProjectLocation>
                                        <ProjectDescription>{project.description}</ProjectDescription>
                                        <ViewButton>View Project</ViewButton>
                                    </ProjectContent>
                                </ProjectCard>
                            );
                        })}
                    </ProjectGrid>
                </Section>

                <AnimatePresence>
                    {selectedProject && (
                        <ModalOverlay
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                        >
                            <ModalContent
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                onClick={e => e.stopPropagation()}
                            >
                                <CloseButton onClick={() => setSelectedProject(null)}>
                                    <FaTimes />
                                </CloseButton>
                                <ModalHeader>
                                    <ModalTitle>{selectedProject.title}</ModalTitle>
                                    <ModalLocation>{selectedProject.location}</ModalLocation>
                                </ModalHeader>
                                <ModalBody>
                                    <HighlightsList>
                                        {selectedProject.highlights.map((highlight, index) => (
                                            <HighlightItem key={index}>{highlight}</HighlightItem>
                                        ))}
                                    </HighlightsList>
                                    <ImageGrid>
                                        {selectedImages.map((image, index) => (
                                            <ProjectDetailImage
                                                key={index}
                                                src={image}
                                                alt={`${selectedProject.title} - Image ${index + 1}`}
                                            />
                                        ))}
                                    </ImageGrid>
                                </ModalBody>
                            </ModalContent>
                        </ModalOverlay>
                    )}
                </AnimatePresence>
            </PageContainer>
        </>
    );
};

export default ProjectsPage;