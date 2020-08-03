import React from 'react';
import { Footer, Hero, Container, Content } from 'react-bulma-components';

const FooterC = () => {
  return (
    <Hero>
      <Hero.Head renderAs="header" />
      <Hero.Footer>
        <Footer>
          <Container>
            <Content style={{ textAlign: 'center' }}>
              <p>
                <a href="https://www.instagram.com/laiasw/"><strong>Laia Swimwear</strong></a>
              </p>
            </Content>
          </Container>
        </Footer>
      </Hero.Footer>
    </Hero>
  )
}

export default FooterC;
