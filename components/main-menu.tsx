"use client";
import {Suspense} from "react";
import Navbar from 'react-bootstrap/Navbar';
import SignOut from "@/components/sign-out";
import AuthStatus from "@/components/auth-status";

export default function MainMenu() {
  return (
      <Navbar>
          <Suspense fallback="Loading...">
            <AuthStatus />
          </Suspense>
          <SignOut />
      </Navbar>
  );
}