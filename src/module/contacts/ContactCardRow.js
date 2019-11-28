import React from "react";
import styled from "styled-components";

const ContactCardDetailRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ContactCardRow = ({ label, data }) => (
  <ContactCardDetailRow>
    <div>{`${label}:`}</div>
    <div>{data}</div>
  </ContactCardDetailRow>
);

export default ContactCardRow;
