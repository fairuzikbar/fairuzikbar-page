import styled from "@emotion/styled"
import Link from "next/link"
import { Dropdown } from 'flowbite-react';

const NavBar: React.FC = () => {
  const links = [
    { id: 1, name: "About", to: "/about" },
    { id: 2, name: "Resume", to: "/resume" },
    { id: 3, name: "Test", to: "/test" },
    { id: 4, name: "Contact", to: "/contact" }
  ]
//   return (
//     <StyledWrapper className="">
//       <ul>
//         {links.map((link) => (
//           <li key={link.id}>
//             <Link href={link.to}>{link.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </StyledWrapper>
//   )
// }

return (
    <>
      {/* Desktop Navbar */}
      <div className="flex-shrink-0 hidden md:block">
        <ul className="flex flex-row">
          {links.map((link) => (
            <li
              key={link.id}
              className="block ml-4 text-black text-gray-500 dark:text-white nav"
            >
              <Link href={link.to}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="block md:hidden">
      
        <Dropdown label="Menu">
          {links.map((link) => (
            <Dropdown.Item key={link.id}>
              <Link href={link.to}>
                <a>{link.name}</a>
              </Link>
            </Dropdown.Item>
          ))}
       </Dropdown>
      </div>
    </>
  );
};


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
`
