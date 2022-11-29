import React from 'react'
import { BoldText, Card, CenterDiv, Main, Paragraph } from './style'

const Worktime = () => {
  return (
    <Main>
      <CenterDiv>
        <Card>
          <BoldText>Location</BoldText>
          <Paragraph>Te Aro, Wellington</Paragraph>
        </Card>
        <Card>
          <BoldText>Hours</BoldText>
          <Paragraph>Tuesday to Friday</Paragraph>
          <Paragraph>7AM - 3PM</Paragraph>
          <br />
          <Paragraph>Saturday to Sunday</Paragraph>
          <Paragraph>8AM - 3PM</Paragraph>
        </Card>
        <Card>
          <BoldText>Mondays?</BoldText>
          <Paragraph>We are closed on Mondays to reflect and refuel</Paragraph>
        </Card>
      </CenterDiv>
    </Main>
  )
}

export default Worktime