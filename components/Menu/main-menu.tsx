'use client';

import './main-menu.scss';
import React, { Suspense } from 'react';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';
import Link from 'next/link';
import { RootState } from '@/redux/store';
import AuthStatus from '@/components/Menu/auth-status';
import { useSelector } from 'react-redux';
import SignOut from '@/components/Menu/sign-out';

export default function MainMenu() {
  const locale = useSelector((state: RootState) => state.locale.value);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary w-100" id="mainMenu">
      <Container>
        <Navbar.Brand><b>CHG APP</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link href={'/'} title={'Home'} className={'nav-link'}>
              Home
            </Link>
            <Link href={'/dashboard'} title={'Dashboard'} className={'nav-link'}>
              Dashboard
            </Link>
            <Link href={'/admin'} title={'Admin'} className={'nav-link'}>
              Admin
            </Link>
            <NavDropdown title="Account" id="collapsible-nav-dropdown">
              <NavDropdown.Item>
                <Suspense fallback="Loading...">
                  <AuthStatus />
                </Suspense>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <SignOut />
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link href={'/localization'} title={'Localization'} className={'nav-link'}>
              <div className={'current-locale'}>
                <p className="p-0 m-0">({locale})</p>
                <Image
                  src={'flags/' + locale.toLowerCase() + '.svg'}
                  priority
                  alt={locale}
                  width={450}
                  height={300}
                  className="flag rounded-3"
                />
              </div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
