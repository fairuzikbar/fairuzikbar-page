import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
      {CONFIG.blog.title}
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)`
  font-weight: bold; /* Membuat teks menjadi bold */
  text-decoration: none; /* Menghapus underline dari Link */
  color: inherit; /* Warna teks mengikuti warna default */
`