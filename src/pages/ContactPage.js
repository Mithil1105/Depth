import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import PageBanner from '../components/common/PageBanner';
import Section from '../components/common/Section';
import theme from '../styles/theme';

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing(10)};
  margin-top: ${theme.spacing(8)};

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background: ${theme.colors.background.sage};
  padding: ${theme.spacing(8)};
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.medium};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${theme.spacing(6)};
  
  svg {
    color: ${theme.colors.primary.main};
    font-size: ${theme.typography.fontSize['2xl']};
    margin-right: ${theme.spacing(4)};
    margin-top: ${theme.spacing(1)};
  }
`;

const ContactText = styled.div`
  h3 {
    color: ${theme.colors.primary.main};
    margin-bottom: ${theme.spacing(2)};
    font-size: ${theme.typography.fontSize.lg};
  }

  p {
    color: ${theme.colors.text.secondary};
    line-height: 1.6;
    margin-bottom: ${theme.spacing(2)};
  }
`;

const MapContainer = styled.div`
  height: 400px;
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${theme.shadows.medium};

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const BusinessHours = styled.div`
  margin-top: ${theme.spacing(4)};
  
  h4 {
    color: ${theme.colors.primary.main};
    margin-bottom: ${theme.spacing(3)};
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    padding: ${theme.spacing(2)} 0;
    border-bottom: 1px solid ${theme.colors.background.dark};
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Contact Us | Depth & Dimension</title>
                <meta name="description" content="Get in touch with Depth & Dimension for custom sculpture commissions, inquiries, or to schedule a studio visit." />
            </Helmet>

            <PageBanner
                title="Contact Us"
                subtitle="Get in touch for commissions, inquiries, or studio visits"
                bgImage="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            />

            <Section>
                <ContactGrid>
                    <ContactInfo>
                        <ContactItem>
                            <FaMapMarkerAlt />
                            <ContactText>
                                <h3>Visit Our Studio</h3>
                                <p>B/10 Sankalp estate,</p>
                                <p>Rakhial, Ahmedabad,</p>
                                <p>Gujarat, India</p>
                            </ContactText>
                        </ContactItem>

                        <ContactItem>
                            <FaPhone />
                            <ContactText>
                                <h3>Call Us</h3>
                                <p>+91 98987 17128</p>
                                <p>Monday to Saturday, 10:00 AM - 6:00 PM</p>
                            </ContactText>
                        </ContactItem>

                        <ContactItem>
                            <FaEnvelope />
                            <ContactText>
                                <h3>Email Us</h3>
                                <p>info@depthanddimension.com</p>
                                <p>For commissions: commissions@depthanddimension.com</p>
                            </ContactText>
                        </ContactItem>

                        <ContactItem>
                            <FaClock />
                            <ContactText>
                                <h3>Business Hours</h3>
                                <BusinessHours>
                                    <ul>
                                        <li>
                                            <span>Monday - Friday</span>
                                            <span>10:00 AM - 6:00 PM</span>
                                        </li>
                                        <li>
                                            <span>Saturday</span>
                                            <span>10:00 AM - 4:00 PM</span>
                                        </li>
                                        <li>
                                            <span>Sunday</span>
                                            <span>Closed</span>
                                        </li>
                                    </ul>
                                </BusinessHours>
                            </ContactText>
                        </ContactItem>
                    </ContactInfo>

                    <MapContainer>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8896269507837!2d72.6266!3d23.0297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85c5c9c8f95f%3A0x7b5c5e7087c9e28a!2sRakhial%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1629789456789!5m2!1sen!2sin"
                            title="Depth & Dimension Studio Location"
                            allowFullScreen=""
                            loading="lazy"
                        />
                    </MapContainer>
                </ContactGrid>
            </Section>
        </>
    );
};

export default ContactPage; 