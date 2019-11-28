import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ContactCardRow from './ContactCardRow';

const ContactCardContainer = styled.div`
  width: 20%;
  padding: 5px;
  border: 1px solid;
  margin-bottom: 5px;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
`;

const ContactCard = ({ id, firstName, lastName, email }) => (
  <ContactCardContainer key={id}>
    <ContactCardRow label="Firstname" data={firstName} />
    <ContactCardRow label="Lastname" data={lastName} />
    <ContactCardRow label="E-mail" data={email} />
    <DetailsContainer>
      <Link to={`/contacts/${id}`}>Details</Link>
    </DetailsContainer>
  </ContactCardContainer>
);

export default ContactCard;
