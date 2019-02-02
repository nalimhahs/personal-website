import React from 'react'
import styled from 'styled-components'
import 'typeface-noto-sans'
import 'typeface-nunito'
import 'typeface-nunito-sans'
import 'typeface-oldenburg'

const MainWrapper = styled.div`
  margin: 0;
  width: 100%;
  padding-top: 3%;
  padding-right: 2%;
  margin-bottom: 15%
`

const Wrapper = styled.div`
  width: 100%;
  padding-left: 10.5%;
  padding-top: 2.3%;
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
  padding-right: 5%;
`
const Box = styled.div`
  position: relative;
  ${tw`w-5/6 sm:w-2/3 md:w-1/2 lg:w-3/5 xl:w-1/2`}
  height: 165px;
  margin-left: 0;
  background: #F2C94C;
  padding: 0;
  -webkit-transform: translateX(-15px); 
  -moz-transform: translateX(-15px); 
  transform: translateX(-15px);  
`

const BoxWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  -webkit-transform: translateX(1.17%) translateY(21.3%); 
  -moz-transform: translateX(1.17%) translateY(21.3%); 
  transform: translateX(1.17%) translateY(21.3%); 
`

const Pre = styled.div`
  ${tw`text-l lg:text-xl xl:text-xl`}
  color: #333333;
  font-family: "Oldenburg";
  margin-left: 4px;
`

const Name = styled.div`
  ${tw`text-s15 sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl`}
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  color: #121212;
  padding: 0;
  margin: 0;
`

const Subtitle = styled.div`
  ${tw`mx-1 text-m1 md:text-s1 lg:text-s15 xl:text-5xl`}
  font-family: Nunito;
  font-style: normal;
  font-weight: 650;
  line-height: normal;
  color: #E0E0E0;
  margin-right: 3%;
`

const SubContent = styled.div`
  ${tw`w-5/6 sm:w-5/6 md:w-3/5 lg:w-1/2 xl:w-1/2 pt-4 mx-2`}
  font-family: "Noto Sans";
  line-height: normal;
  font-size: 21px;
  color: #BDBDBD;
`

// eslint-disable-next-line react/prefer-stateless-function
class Main extends React.Component {
  render() {
    return (
      <MainWrapper>
        <Box>
          <BoxWrapper>
            <Pre>Hi, my name is </Pre>
            <Name>Milan Shah</Name>
          </BoxWrapper>
        </Box>  
        <Wrapper> 
          <Line/>                
          <ContentWrapper>
            <Subtitle>I make things for the web</Subtitle> 
            <SubContent>
              This site is still under construction... Check back later for more :-)
            </SubContent>
          </ContentWrapper>
        </Wrapper>
      </MainWrapper>
    )
  }
}


export default Main
