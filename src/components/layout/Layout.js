import React from 'react';
import { Outlet } from 'react-router-dom';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import Header from './Header';
import Footer from './Footer';
import globalStyles from '../../styles/globalStyles';

const MainContent = styled.main`
  min-height: calc(100vh - 200px);
  margin-top: 80px; // To account for fixed header
  display: flex;
  flex-direction: column;
`;

const Layout = () => {
    return (
        <>
            <Global styles={globalStyles} />
            <Header />
            <MainContent>
                <Outlet />
            </MainContent>
            <Footer />
        </>
    );
};

export default Layout; 