import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";
import ScrollToTop from "../utils/ScrollToTop";

const StyledAppLayout = styled.div`
  display : flex;
  height: auto;
  overflow: hidden;
  flex-direction: column;
`;


const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
`;
const Footer = styled.div`
  display: flex;
  width: 100%;
  bottom: 0;
  background: linear-gradient(90deg, #434BFD 0%, #FF4747 100%);
  height: .5rem;
  z-index: 9999;
`

function AppLayout() {
  return (
    <StyledAppLayout>
      <ScrollToTop/>
     <NavBar/>
        <Container>
          <Outlet />
        </Container>
      <Footer></Footer>
    </StyledAppLayout>
  );
}

export default AppLayout;
