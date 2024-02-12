import React from "react";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ item }) => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <Link
        href={item.path}
        className={`${styles.container} ${
          pathname === item.path && styles.active
        }`}
      >
        {item.title}
      </Link>
    </div>
  );
};

export default NavLink;
