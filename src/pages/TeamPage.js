import React from 'react';
import styled from '@emotion/styled';
import Section from '../components/common/Section';
import hemaliImg from '../assets/images/depthhh/achievements/Hemali/Picture56.png';
import khushaliImg from '../assets/images/depthhh/achievements/khushali/Picture59.jpg';
import ujjvalImg from '../assets/images/depthhh/achievements/ujjval gajjar/Picture61.png';

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 2.5rem;
`;

const Card = styled.div`
  background: #f8f6f2;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(60, 40, 20, 0.08);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Avatar = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1.2rem;
  box-shadow: 0 2px 12px rgba(60, 40, 20, 0.10);
`;

const Name = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  color: #3d2c13;
  margin-bottom: 0.5rem;
`;

const Bio = styled.ul`
  font-size: 1.05rem;
  color: #4B5320;
  text-align: left;
  margin: 0 auto;
  padding-left: 1.2em;
  line-height: 1.7;
`;

const TeamPage = () => (
    <Section title="Our Team">
        <TeamGrid>
            <Card>
                <Avatar src={hemaliImg} alt="Hemali Vakani" />
                <Name>Hemali Vakani</Name>
                <Bio>
                    <li>Founder, Depth & Dimension</li>
                    <li>Diploma in Sculpture, Sheth C.N. College, 2002</li>
                    <li>Panchum-purusharth award (1st in state diploma exam)</li>
                    <li>Professional artist since 2002, specializing in clay, stone, wood, metal, terracotta, and mixed media</li>
                    <li>Lead artist for major public sculpture projects across Gujarat</li>
                </Bio>
            </Card>
            <Card>
                <Avatar src={khushaliImg} alt="Khushali Vakani" />
                <Name>Khushali Vakani</Name>
                <Bio>
                    <li>Diploma in Sculpture, Sheth C.N. College of Fine Arts (1999-2003)</li>
                    <li>National Award Winner, 91st All India Fine Arts & Crafts Society (2018)</li>
                    <li>Sculpture Solo Exhibition, Lalit Kala Art Gallery (2022)</li>
                    <li>Group Exhibition, Gujarat Visual Woman Artist's Association (2022)</li>
                    <li>Art Plaza, Kala Ghoda Art Exhibition for Sculpture (2022)</li>
                    <li>Artist Category Award, Lalit Kala Academy (2002)</li>
                    <li>Student Category Award, Lalit Kala Academy (2001)</li>
                </Bio>
            </Card>
            <Card>
                <Avatar src={ujjvalImg} alt="Ujjval Gajjar" />
                <Name>Ujjval Gajjar</Name>
                <Bio>
                    <li>BVA, Maharaja Sayajirao University, Fine Arts (Sculpture, 2002-2006)</li>
                    <li>MVA, Maharaja Sayajirao University, Creative Sculpture (2006-2008)</li>
                    <li>Inlaks Scholarship recipient (final year MVA, 2008)</li>
                </Bio>
            </Card>
        </TeamGrid>
    </Section>
);

export default TeamPage; 