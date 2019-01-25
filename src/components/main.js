import React from 'react'
import styled from 'styled-components'
import 'typeface-noto-sans'
import 'typeface-nunito'
import 'typeface-nunito-sans'
import 'typeface-oldenburg'


const Wrapper = styled.div`
  width: 100%;
  padding-left: 10.5%;
  padding-top: 2.3%;
  height: 100%;
`


const Line = styled.div`
  ${tw`invisible sm:invisible md:visible lg:visible xl:visible`}
  border: 1px solid #F2C94C;
  position: absolute;
  height: 41%;
  right: 15%;
  bottom: 0%;;
`

const ContentWrapper = styled.div`
  padding-left: 3.7%;
  padding-top: 1%;
`
const Box = styled.div`
  /* position: absolute; */
  width: 41vw;
  height: 165px;
  margin-left: 0;
  background: #F2C94C;
  padding: 0;
  -webkit-transform: translateX(-15px); 
  -moz-transform: translateX(-15px); 
  transform: translateX(-15px);  
`

const BoxWrapper = styled.div`
  float: right;
  -webkit-transform: translateX(5px) translateY(47px); 
  -moz-transform: translateX(5px) translateY(47px); 
  transform: translateX(5px) translateY(47px); 
`

const Pre = styled.div`
  color: #333333;
  font-family: "Oldenburg";
  margin-left: 4px;
  font-size: 21px;
`

const Name = styled.div`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  font-size: 90px;
  color: #121212;
  padding: 0;
  margin: 0;
`

const Subtitle = styled.div`
  ${tw`mx-1`}
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 42px;

  color: #E0E0E0;
`

const SubContent = styled.div`
  ${tw`lg:w-1/2 pt-4 mx-2`}
  font-family: "Noto Sans";
  line-height: normal;
  font-size: 21px;
  color: #BDBDBD;
`


// eslint-disable-next-line react/prefer-stateless-function
class Main extends React.Component {
  render() {
    return (
      <>
      <Box>
        <BoxWrapper>
          <Pre>Hi, my name is </Pre>
          <Name>Milan Shah</Name>
        </BoxWrapper>
      </Box>  
      <Wrapper> 
        <Line/>                
        <ContentWrapper>
          <Subtitle>Magna duis nisi deserunt eiusmod</Subtitle> 
          <SubContent>
            Nostrud exercitation consectetur ipsum excepteur labore irure nulla aute qui minim consectetur nostrud aliqua.
          </SubContent>
        </ContentWrapper>
      </Wrapper>
      </>
    )
  }
}


export default Main
