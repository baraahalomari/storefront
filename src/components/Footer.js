import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
    
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">storefront</FooterLink>
           
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">food</FooterLink>
            <FooterLink href="#">elecotronics</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;