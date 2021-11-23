import React from "react";
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" />
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build the Community your fans will love</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              deserunt dolore eligendi, veniam necessitatibus doloremque rem
              ullam. Molestias, similique, cumque iusto, necessitatibus nisi
              excepturi quod incidunt tempore laudantium quo cum.
            </p>

            <Button bg='#ff0099' color ='white'>
                Get Started For Free
            </Button>
          </div>

          <Image src='/images/illustration-mockups.svg' alt=''/>
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
