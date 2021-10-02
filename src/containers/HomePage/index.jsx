import React from "react";
import { Navbar } from "../../components/navbar";
import PageContainer from "../../components/pageContainer";
import TopSection from "./topSection";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import { InnerPageContainer } from "../../components/pageContainer";
import { deviceSize } from "../../components/responsive";
import Services from "./services";
import { SpecialistAd } from "../../components/specialistAd";
import { Marginer } from "../../components/marginer";

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

function HomePage(props) {
  return (
    <PageContainer>
      <TopSection>
        <Fade top>
          <Navbar />
        </Fade>
      </TopSection>
      <InnerPageContainer>
        <ContentContainer>
          <Services />
        </ContentContainer>
        <Marginer direction="vertical" margin="5em" />
        <SpecialistAd />
        <Marginer direction="vertical" margin="5em" />
        
      </InnerPageContainer>
    </PageContainer>
  );
}

export default HomePage;
