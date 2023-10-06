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
    <StyledWrapper>
      <BurgerMenuButton onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`} />
        <div className={`bar ${menuOpen ? "open" : ""}`} />
        <div className={`bar ${menuOpen ? "open" : ""}`} />
      </BurgerMenuButton>
      <NavMenu className={`nav-menu ${menuOpen ? "open" : ""}`}>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.to}>{link.name}</Link>
          </li>
        ))}
      </NavMenu>
    </StyledWrapper>
  );
};

export default NavBar;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BurgerMenuButton = styled.div`
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
      transform: rotate(-45deg) translate(-5px, 6px);
    }
    .bar:nth-child(2) {
      opacity: 0;
    }
    .bar:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
}`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-left: auto; /* Push the menu to the right side */
  li {
    margin-left: 1rem;
    color: ${({ theme }) => theme.colors.gray11};
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Horizontal direction */
    background-color: white;
    position: absolute;
    top: 0; /* Keep the menu at the top */
    right: -100%; /* Initially off-screen */
    width: auto; /* Allow the menu to expand horizontally */
    max-width: 100%; /* Limit the menu width */
    height: 100%; /* Take the full height of the viewport */
    overflow: hidden;
    transition: right 0.2s ease-in-out; /* Slide in/out horizontally */
    li {
      margin: 0;
      padding: 0.5rem 1rem;
    }
    &.open {
      right: 0; /* Slide the menu in from the right */
    }
  }
}`;
