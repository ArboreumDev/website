import React from "react";
import styled from "styled-components";
import PartnershipCard from "./PartnershipCard";
import Partnerships from "./assets/data/copy.json";

interface partner {
  title: string;
  image: string;
  description: string;
  buttontext: string;
  url: string;
  partnerLogo?: [];
}

const HowItworksContainer = styled.div`
  margin: 0 auto;
  background-color: #fff;
`;

const DivContainer = styled.div`
  margin: 0 auto;
  max-width: 1272px;
  padding: 100px 20px 150px 20px;
`;

const TitleContainer = styled.div`
  margin: 0 auto 100px auto;
  text-align: center;
  max-width: 720px;
`;

const ContentContainer = styled.div`
  padding: 20px 0;
  border-radius: 5px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.11);
`;

const Map: React.FunctionComponent<{}> = () => {
  const PartnershipsCards = Partnerships.map((d: partner, i: number) => {
    return (
      <PartnershipCard
        key={i}
        title={d.title}
        description={d.description}
        image={d.image}
        buttontext={d.buttontext}
        url={d.url}
      />
    );
  });
  return (
    <HowItworksContainer>
      <DivContainer>
        <TitleContainer>
          <h1>Products</h1>
          <h3>
            We partner with businesses and NGOs to build independent credit networks in pre-existing communities. If external funding is needed, we arrange it through our panel of pro-social investors.
         
            <br />
            <br />
            Our current product suite is:
          </h3>
        </TitleContainer>
        <ContentContainer>{PartnershipsCards}</ContentContainer>
      </DivContainer>
    </HowItworksContainer>
  );
};

export default Map;
