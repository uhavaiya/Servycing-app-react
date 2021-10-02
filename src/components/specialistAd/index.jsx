import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Marginer } from "../marginer";
import Fade from "react-reveal/Fade";
import FarmingImg from "../../images/farming.png";
import { Button } from "../button";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";

const SpecialistAdContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  background-color: #264653;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    flex-direction: column-reverse;
  }
`;

const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 5em;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
    margin: 0;
  }
`;

const Slogan = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #fff;
  font-weight: 700;
  line-height: 1.3;
  text-align: start;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 20px;
  }
`;

const StandoutImage = styled.div`
  width: 35em;
  height: 29em;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 18em;
    height: 14em;
  }
  transition: transform 0.2s;
  cursor: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48aW1hZ2UgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDZ0FBQUFvQ0FZQUFBQ00vcmh0QUFBQUFYTlNSMElBcnM0YzZRQUFCSzlKUkVGVVdFZnRtRzFJcTNVWXhxOGRtN09hYzVSRkZ2bkc4R1VpWm9rWVV5ZUk2QmNSTmN3WitJYUlmaER6QlVxRldhR0I2Qkhkam9wS21uRFluRmtXZmpnb2dhQ2VvVzV4RGdkSGFpbHI0aktucnRwMGJSNDk4Ui9QVGg3YjVzdWN4dy8rNFdIczJiTm52MTNYZmQzM2Y2UGhtaS9hTmVmRERhQ3JEdGxUa0p5em5YOENnQnpQYlowRUpNL3Back81UjYxV0Q0YUdoaW9CSEFBNGZGNkVKd0U5QUx5a1Vxays0bks1UFZ0Ylc5MERBd090ZFhWMXYxT2dSMWNOYWcvUXU3bTUrYjM2K3ZvZkNZekpaUHBWcTlWMmNqaWNyd0dZQVR5K1N0dFBBdDRDd0FMd3BrNm51MTlkWGMwdUxTMDF4OGZITS9SNi9iM0Z4Y1hiaVltSmNnQ1dxN0xkWGtpOENhQktwZnBtWW1JaXNycTZHc1hGeFJDTHhZY01CdU14c2IybXBxWkZLcFhxS2R2ZEdpSjdnQzhDOEZ0WVdQakNaRExsOHZsOFVwZWcwK2tRaVVRb0t5dkQvdjYrU3FQUmRJYUhoMHNCL0VQWjdwYnl0QWZvQ2VEMWtaR1I0clMwTkNHYnpmWTRPdm92R3p3ZUQxMWRYZWFvcUNqRzd1N3VkMHFsOG5acWF1b0RxajR2UFVUMkFGOEE4RXBGUlVXOFNDVDZOalkyRmdxRjRuL3FWRlZWb2IyOUhRY0hCNGJOemMwNy92NytMU1JUbDIyN28wYk5CdUN2MCttbUd4b2FXSDE5ZlhidDgvSHhRWGQzOTVPOHZEeWEwV2o4U2ExV2QwUkdSbzRkUzd2THRqdWF4U1FvYnkwdExRMVBUVTFGbFplWE8vMmdsSlFVOVBiMldvS0NnankzdDdlbGNybThOU01qNDJjcTdTN1o3Z2lRQk9VTmhVTHhKWTFHeTQ2SmlhR2ZSWXFHaGdZME5UVVIyN2UwV3UyZHdNREFUaXBFWkJwZEtPMk9BSzFCa2Nsa1JabVptWjh4bWN4YkZndHBmYWN2UHo4L291WmhlbnE2aDlGb3ZMK3hzU0VLQ3d2N2dWTHozSkNPQUsxQktTa3BlYisvdi85N2tseTVuUFJueDR2TDVTSWhJUUZ4Y1hGSGlZbUpCOEhCd1l6MTlYVzF4V0tacE5QcDR3RUJBZmN1MHR3ZEFaTHoxcURvOWZwcG9WRElFb3ZGejlBbEpTVWhLQ2dJeWNuSjRQRjRoNEdCZ1I0N096dDdhMnRydjZ5dXJpb21KeWNYQmdjSEh3SFFBU0JOZlk5SytPazJITHZDMlliVkdwVFYxVlhwek16TU80V0ZoYy9jdUtPakE1V1ZsVmhlWHRhbzFlcUhjM056ajFwYVdoNllUQ1lEQldNRThEY0E4a2pnTGpRZW5RRmFnekkvUDkvTVpESS9pSWlJZUJxVTdPeHNqSTZPWW5oNCtLNUFJQmdGOE5jeEVOSUx5WFFoUU9RZ0FTRWJESkxtUzZ0Qm9oWUp5bXNTaWFSUUlCQTBNWmxNN08zdHdjdkxDMHFsOHREVDAvTmhTRWpJcHdEK0FQQW4xYVNQQTVFOXBFc3Roa0E0VTVETTRGZno4L05qaDRhR3h2bDhQcWFucDlIVDA0T0NnZ0p6VVZGUnFVd21XNkJxak5oNFlaV2NGYVV6UUZ0UTNqWVlERE9Oalkyc2xaVVZqSStQUXlhVGlYTnpjNzhDc0VHcFIrRGNzazc3VldmZGVtazBtcnV6czdQdmtybHNNQmprMGRIUm53RDREY0FPVlc5dWdUdk5Zdks2TFNpZisvcjZmc2hpc1N5VmxaVmxFb2xrbnFvOWtrNlg2K3lpRmo4Tmlrd21FK1RrNUxTT2pZMjFaMlZsRFZIV2t1UzZ6Vm9iOUdrV2s2Q3doVUpoVEg1K2ZoMkh3L21ZQ29YYnJUMHJJUGtDTHdQd3JxMnQ5VzlyYTFzSFlHdkViclgycklEa090S2d5VUhtTTdHVTlEcTNXM3NlUU5zL0RlU1JUSUlyVWU0OGdHNXJJV2U1OFdraE9jczkzSHJORGFDcjh0NG9lS09ncXdxNCt2NXJYNFAvQXYxRXZUaGJtdVpYQUFBQUFFbEZUa1N1UW1DQyIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+PC9zdmc+)
      4 4,
    auto;

  &:hover {
    transform: scale(0.9);
  }
`;

export function SpecialistAd(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <SpecialistAdContainer>
      <ContentContainer>
        <SloganContainer>
          <BrandLogo
            logoSize={isMobile ? 33 : 40}
            textSize={isMobile ? 28 : 35}
          />
          <Marginer direction="vertical" margin="1em" />
          <SloganContainer>
            <Slogan>You’re a Specialist, and you </Slogan>
            <Slogan>have an outstanding</Slogan>
            <Slogan>Service to offer?</Slogan>
          </SloganContainer>
          <Marginer direction="vertical" margin="0.8em" />
          <Fade left>
            <Button size={15}>Join as Specialist</Button>
          </Fade>
        </SloganContainer>
        <Fade bottom>
        <StandoutImage>
          <img src={FarmingImg} alt="join-as-specialist" />
        </StandoutImage>
        </Fade>
      </ContentContainer>
    </SpecialistAdContainer>
  );
}
