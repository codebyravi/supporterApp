import React from "react";
import Link from "./Link";
import styled from "styled-components";
import { MailOption } from "grommet-icons";

const Wrapper = styled.div`
  background-color: #1ab394;
  width: 85vw;
  margin: auto;
`;
const Title = styled.h1`
  color: #fff;
  text-shadow: 2px 2px 2px gray;
`;
const Contact = styled.h2`
  color: #fff;
`;
const Anchor = styled.a`
  color: #337ab7;
  margin-right: 7px;
`;

const Negative = ({ whichLink, whichAdapter }) => {
  return (
    <Wrapper>
      <Title>
        You'll need a
        <br />
        {whichAdapter}
        <br />
        Supporter APIs
      </Title>
      <Contact>
        Contact Support at <u>123-456-7891</u> or email us by clicking{" "}
        <Anchor href="mailto:info@codebyravi.com">here</Anchor>
        <MailOption size="small" color="#337ab7" />
      </Contact>
      <Link whichAdapter={whichAdapter} whichLink={whichLink} />
    </Wrapper>
  );
};

export default Negative;
