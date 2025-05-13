import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive = (pathname: string) => router.pathname === pathname;

  let left = (
    <div className="left">
      <Link href="/" className={`bold ${isActive("/") ? "active" : ""}`}>
        Feed
      </Link>
      <style jsx>{`
        .bold {
          font-weight: bold;
        }

        .left :global(a) {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }

        .left :global(.active) {
          color: gray;
        }

        .left :global(a + a) {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  );

  let right = null;

  return (
    <nav>
      {left}
      {right}
      <style jsx>{`
        nav {
          display: flex;
          padding: 2rem;
          align-items: center;
        }
      `}</style>
    </nav>
  );
};

export default Header;
