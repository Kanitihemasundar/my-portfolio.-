import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const EmailLink = styled.a`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  border: 2px solid ${({ theme }) => theme.primary};
  padding: 10px 18px;
  border-radius: 8px;
  transition: 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const Contact = () => {
  return (
    <Container>
      
      <Title>Contact Me</Title>
      
      <EmailLink href="mailto:kanitihemasundar@mail.com">
       kanitihemasundar@mail.com
      </EmailLink>
    </Container>
  );
};

export default Contact;
