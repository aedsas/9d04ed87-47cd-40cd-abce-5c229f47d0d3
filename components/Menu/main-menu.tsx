"use client";
import {Suspense} from "react";
import Link from "next/link";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SignOut from "@/components/sign-out";
import AuthStatus from "@/components/auth-status";

export default function MainMenu() {
  return (
      <Nav>
        <Navbar>
          <div className="nav-item p-3">
            <Link href={"/"} title={"Home"}>
              Home
            </Link>
          </div>
          <div className="nav-item p-3">
            <Link href={"/dashboard"} title={"Dashboard"}>
              Dashboard
            </Link>
          </div>
          <div className="nav-item p-3">
            <Link href={"/admin"} title={"Admin"}>
              Admin
            </Link>
          </div>
          <div className="nav-item p-3">
            Current Language CODE
          </div>
          <div className="nav-item p-3">
            <Suspense fallback="Loading...">
              <AuthStatus />
            </Suspense>
          </div>
          <div className="nav-item p-3">
            <SignOut />
          </div>
        </Navbar>
      </Nav>
  );
}