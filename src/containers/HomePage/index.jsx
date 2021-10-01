import React from "react";
import { Navbar } from "../../components/navbar";
import PageContainer from "../../components/pageContainer";
import TopSection from "./topSection";
import Fade from "react-reveal/Fade";

function HomePage(props) {
  return (
    <PageContainer>
      <TopSection>
        <Fade top>
          <Navbar />
        </Fade>
      </TopSection>
    </PageContainer>
  );
}

export default HomePage;
