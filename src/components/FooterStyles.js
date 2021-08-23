import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 20px 0px;
  background: #0000b3;
  position: absolute;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 20px 0px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: auto ;
    margin-top : 20px;
    margin-bottom : 0px;
    top : 100px ;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 0px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 20px;
  color: #fff;
  margin-bottom: 0px;
  font-weight: bold;
`;