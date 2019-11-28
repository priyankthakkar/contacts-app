import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ContactCard from "./ContactCard";
import { loadContacts } from "./contacts-action";

const ContactsContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  min-width: 23%;
  justify-content: space-around;
`;

const Contacts = ({ contacts, loadContacts }) => {
  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <>
      <h1>Contacts</h1>
      <ContactsContainer>
        {contacts &&
          contacts.length > 0 &&
          contacts.map(contact => {
            const { id, first_name, last_name, email } = contact;
            return (
              <ContactCard
                key={id}
                id={id}
                firstName={first_name}
                lastName={last_name}
                email={email}
              />
            );
          })}
      </ContactsContainer>
    </>
  );
};

const mapStateToProps = ({ areContactsLoading, contacts, error }) => ({
  areContactsLoading,
  contacts,
  error
});

const mapDispatchToProps = dispatch => ({
  loadContacts: () => dispatch(loadContacts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
