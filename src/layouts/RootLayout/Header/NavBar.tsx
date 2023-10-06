import styled from "@emotion/styled";
import Link from "next/link";
import { useState } from "react";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: 1, name: "About", to: "/about" },
    { id: 2, name: "Resume", to: "/resume" },
    { id: 3, name: "Test", to: "/test" },
    { id: 4, name: "Contact", to: "/contact" },
    { id: 5, name: "Contact", to: "/contact" },
    { id: 6, name: "Contact", to: "/contact" },
    { id: 7, name: "Contact", to: "/contact" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledNavBar>
      <BurgerMenuButton onClick={toggleMenu} menuOpen={menuOpen}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </BurgerMenuButton>
      <NavMenu menuOpen={menuOpen}>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.to}>{link.name}</Link>
          </li>
        ))}
      </NavMenu>
    </StyledNavBar>
  );
};

export default NavBar;

const StyledNavBar = styled.div`
  display: flex;
  align-items: center;
`;

const BurgerMenuButton = styled.div<{ menuOpen: boolean }>`
  display: none;
  flex-direction: column;
  cursor: pointer;
  .bar {
    width: 30px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.gray11};
    margin: 4px 0;
    transition: 0.4s;
  }
  &.open {
    .bar:nth-child(1) {
      transform: ${({ menuOpen }) => (menuOpen ? "rotate(-45deg) translate(-5px, 6px)" : "none")};
    }
    .bar:nth-child(2) {
      opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
    }
    .bar:nth-child(3) {
      transform: ${({ menuOpen }) => (menuOpen ? "rotate(45deg) translate(-5px, -6px)" : "none")};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavMenu = styled.ul<{ menuOpen: boolean }>`
  list-style: none;
  display: flex;
  align-items: center;
  margin-left: auto; /* Push the menu to the right side */
  li {
    margin-left: 1rem;
    color: ${({ theme }) => theme.colors.gray11};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: white;
    position: absolute;
    top: 0;
    right: ${({ menuOpen }) => (menuOpen ? "0" : "-100%")}; /* Slide in/out horizontally */
    width: auto;
    max-width: 100%;
    height: auto;
    overflow: hidden;
    transition: right 0.2s ease-in-out; /* Slide in/out horizontally */
    li {
      margin: 0;
      padding: 0.5rem 1rem;
    }
  }
`;
