import React from 'react'
import { Aside, BoldText, Box, Box2, ButtonDiv, Card, Category, CenterDiv, Conteyner, InfoDiv, Main, MuiBtn, MuiBtnContained, MuiBtnOutlined, Paragraph, Pitag, Prise, Section, Span, Title } from './style'

const Menu = () => {
  return (
    <Main>
      <CenterDiv>
        <Section>
          <Conteyner>
            <Span>Menu</Span> <br /><br />
            <Paragraph>We change our menu every season. Here is what we are currently dishing up.</Paragraph> <br /><br /><br />
            <ButtonDiv>
              <MuiBtnContained variant='contained' >Food Menu</MuiBtnContained>
              <MuiBtnOutlined  variant="outlined" >Drinks Menu</MuiBtnOutlined>
              <MuiBtnOutlined  variant="outlined">Takeaway Menu</MuiBtnOutlined>
            </ButtonDiv>
          </Conteyner>
        </Section>
        <Aside>
          <InfoDiv>
            <Title>Latte Cofe</Title>
            <Box>
                <Category>Entres</Category>
              <Card>
                <BoldText>Avacado Pear Soup</BoldText>
                <Pitag>Avacado, Saratogo Chips, Szechuan Button</Pitag>
                <Prise>$24</Prise>
              </Card>
              <Card>
                <BoldText>Rocket Raisin Salad</BoldText>
                <Pitag>Smoked Olive, Fennel, Parmigiano di Reggiano</Pitag>
                <Prise>$18</Prise>
              </Card>
              <Card>
                <BoldText>Peppe alla Chittara </BoldText>
                <Pitag>Spaghetti, Pancetta, Pecorino Romano</Pitag>
                <Prise>$23</Prise>
              </Card>
              <Card>
                <BoldText>Chilli Lobster</BoldText>
                <Pitag>Served With Texast Toast</Pitag>
                <Prise>$42</Prise>
              </Card>
            </Box>
            <Box2>
              <Category>Mains</Category>
              <Card>
                <BoldText>New York Red Steak</BoldText>
                <Pitag>Fiddlehads, Day Lily, Arugual, Fingerling Potatoes</Pitag>
                <Prise>$63</Prise>
              </Card>
              <Card>
                <BoldText>Fig and Rosemary Salad</BoldText>
                <Pitag>Sauce Proposal, Cauliflower, Hazelnuts, Golden Rasins</Pitag>
                <Prise>$46</Prise>
              </Card>
              <Card>
                <BoldText>Everything From The Sea</BoldText>
                <Pitag>White & Green Asparagus, Spring Onion, Sugar Snaps,</Pitag>
                <Prise>$48</Prise>
              </Card>
              <Card>
                <BoldText>New York Red Steak</BoldText>
                <Pitag>Fiddlehads, Day Lily, Arugual, Fingerling Potatoes</Pitag>
                <Prise>$59</Prise>
              </Card>
              <Card>
                <BoldText>2-Month Slow Beef in Wine</BoldText>
                <Pitag>Charred Green Beans, Romesco, Beef Fat Balsamic Onion</Pitag>
                <Prise>$43</Prise>
              </Card>
            </Box2>
          </InfoDiv>
        </Aside>
      </CenterDiv>
    </Main>
  )
}

export default Menu