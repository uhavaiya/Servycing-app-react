import Axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/button";
import { deviceSize } from "../../components/responsive";
import { ServiceCard } from "../../components/serviceCard";

const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: ${deviceSize.laptop}px;
`;

const Title = styled.h1`
  font-weight: 900;
  color: #000;
`;

const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const WarningText = styled.h3`
  color: rgba(100, 100, 100);
  font-weight: 500;
`;

const BottonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ViewMoreButton = styled(Button)`
  background-color: #f2f2f2;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  color: #959595;
`;

const wait = (num) => new Promise((rs) => setTimeout(rs, num));

function Services(props) {
  const [offeredServices, setServices] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const isServicesEmpty =
    !offeredServices || (offeredServices && offeredServices.length === 0);

  const fetchServices = async () => {
    setLoading(true);
    const response = await Axios.get("http://localhost:7000/services").catch(
      (err) => {
        console.log("Error: ", err);
      }
    );

    await wait(1500);

    if (response) {
      setServices(response.data);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <ServicesContainer>
      <Title>Most used Service & More</Title>
      <ServicesWrapper>
        {isServicesEmpty && !isLoading && (
          <WarningText>No Service are Published </WarningText>
        )}
        {isLoading && <WarningText>Loading... </WarningText>}
        {!isServicesEmpty &&
          !isLoading &&
          offeredServices.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
      </ServicesWrapper>
      <BottonContainer>
        {!isServicesEmpty && !isLoading && (
          <ViewMoreButton>View More</ViewMoreButton>
        )}
      </BottonContainer>
    </ServicesContainer>
  );
}

export default Services;
