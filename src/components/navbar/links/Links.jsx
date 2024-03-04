"use client";

import React, { useState } from "react";
import styles from "./links.module.css";
import Navlink from "./navLink/navLink";
import Image from "next/image";
const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  const isAdmin = true;
  const session = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((links) => {
          return <Navlink item={links} key={links.title} />;
        })}

        {session ? (
          <>
            {isAdmin && <Navlink item={{ title: "Admin", path: "/admin" }} />}
            {/* <button className={styles.logout} onClick={() => alert("Logout")}>
              Log Out
            </button>{" "} */}
          </>
        ) : (
          <Navlink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt="menu"
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <Navlink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
