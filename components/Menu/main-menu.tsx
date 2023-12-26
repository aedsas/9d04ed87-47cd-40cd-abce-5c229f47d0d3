'use client';

import './main-menu.scss';
import type { RootState } from '@/redux/store';
import React, { Suspense, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';
import Link from 'next/link';
import AuthStatus from '@/components/Menu/auth-status';
import { useDispatch, useSelector } from 'react-redux';
import SignOut from '@/components/Menu/sign-out';
import { loadState } from '@/redux/localstorage';
import { setLocale } from '@/redux/localeSlice';
import {
  HomeIcon,
  ChartBarSquareIcon,
  AdjustmentsHorizontalIcon,
  UserCircleIcon
} from '@heroicons/react/24/solid';

export default function MainMenu({ active }: { active: string }) {
  const locale = useSelector((state: RootState) => state.locale.value);
  const persistedState = loadState();
  const dispatch = useDispatch();

  useEffect(() => {
    const currentLocale =
      (persistedState?.locale.value as string) ?? ('DE' as string);
    if (currentLocale !== null) {
      const parsedValue = currentLocale;
      dispatch(setLocale(parsedValue));
    }
  }, [persistedState, dispatch]);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary w-100"
      id="mainMenu"
    >
      <Container>
        <Navbar.Brand>
          <b>CHG APP {active}</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link href={'/'} title={'Home'} className={'nav-link'}>
              <HomeIcon /> <span>Home</span>
            </Link>
            <Link
              href={'/dashboard'}
              title={'Dashboard'}
              className={
                active === 'dashboard' ? 'nav-link active' : 'nav-link'
              }
            >
              <ChartBarSquareIcon /> Dashboard
            </Link>
            <Link
              href={'/admin'}
              title={'Admin'}
              className={active === 'admin' ? 'nav-link active' : 'nav-link'}
            >
              <AdjustmentsHorizontalIcon /> <span>Admin</span>
            </Link>
            <NavDropdown title="Account" id="collapsible-nav-dropdown">
              <NavDropdown.Item className={'nav-link'}>
                <Suspense fallback="Loading...">
                  <UserCircleIcon />{' '}
                  <span>
                    <AuthStatus />
                  </span>
                </Suspense>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.ItemText className={'nav-link sign-out-link'}>
                <SignOut />
              </NavDropdown.ItemText>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link
              href={'/localization'}
              title={'Localization'}
              className={
                active === 'localization' ? 'nav-link active' : 'nav-link'
              }
            >
              <div className={'current-locale'}>
                <p className="p-0 m-0">({locale})</p>
                <Image
                  src={'/flags/' + locale?.toLowerCase() ?? 'N/A' + '.svg'}
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
