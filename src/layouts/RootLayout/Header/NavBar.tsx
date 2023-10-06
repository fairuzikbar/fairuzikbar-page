import styled from "@emotion/styled"
import Link from "next/link"
import { useState } from "react"

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: 1, name: "About", to: "/about" },
    { id: 2, name: "Resume", to: "/resume" },
    { id: 3, name: "Test", to: "/test" },
    { id: 4, name: "Contact", to: "/contact" },
    { id: 5, name: "Contact", to: "/contact" },
    { id: 6, name: "Contact", to: "/contact" },
    { id: 7, name: "Contact", to: "/contact" }
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledWrapper className="">
      <BurgerMenuButton onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`} />
        <div className={`bar ${menuOpen ? "open" : ""}`} />
        <div className={`bar ${menuOpen ? "open" : ""}`} />
      </BurgerMenuButton>
      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  )
}

export default NavBar

const StyledWrapper = styled.div`
  flex-shrink: 0;
  ul {
    display: flex;
    flex-direction: row;
    li {
      display: block;
      margin-left: 1rem;
      color: ${({ theme }) => theme.colors.gray11};
    }
  }
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
}

.nav-menu {
  @media (max-width: 768px) {
    flex-direction: column;
    background-color: white;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-in-out;
    &.open {
      max-height: 300px; /* Adjust this value as needed */
    }
    li {
      margin: 0;
      padding: 0.5rem 1rem;
    }
  }
}
