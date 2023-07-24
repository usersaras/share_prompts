"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getProviders } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  //   useEffect(() => {
  //     const setProviders = async () => {
  //       const response = await getProviders();

  //       setProviders(response);
  //     };
  //   }, []);

  const signIn = (providerId: number) => {};
  return (
    <nav className="flex-between mb-16 pt-3 w-full">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/images/logo.svg"
          alt="Promtopia Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <div className="logo_text">Promptopia</div>
      </Link>

      {/* Desktop Nav */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt">
              <div className="black_btn">Create Post</div>
            </Link>

            <button type="button" className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src="images/logo.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="Profile Image"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                <button
                  type="button"
                  // key={provider.name}
                  onClick={() => {
                    // signIn(provider.id);
                  }}
                  className="black_btn"
                >
                  Sign in
                </button>;
              })}
          </>
        )}
      </div>

      {/* Mobile Nav */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div>
            <Image
              src="images/logo.svg"
              width={37}
              height={37}
              className="rounded-full"
              alt="Profile Image"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    // signOut();
                  }}
                  className="mt-5 black_btn w-full"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                <button
                  type="button"
                  // key={provider.name}
                  onClick={() => {
                    // signIn(provider.id);
                  }}
                  className="black_btn"
                >
                  Sign in
                </button>;
              })}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
