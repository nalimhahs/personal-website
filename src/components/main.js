import React from 'react'
import styled from 'styled-components'
import 'typeface-noto-sans'
import 'typeface-nunito'
import 'typeface-nunito-sans'
import 'typeface-oldenburg'


const Wrapper = styled.div`
  /* ${tw`container mx-auto`} */
/*   height: 100%;*/
  width: 100%;
  padding-left: 10.5%;
  padding-top: 2.3%;
`


const Line = styled.div`
  ${tw`sm:invisible md:visible lg:visible xl:visible`}
  border: 1px solid #F2C94C;
  position: absolute;
  height: 42.5%;
  left: 16%;
  bottom: 0%;;
`

const ContentWrapper = styled.div`
  /* ${tw`container mx-auto`} */
  /* padding-top: 5%; */
`

const Pre = styled.div`
  color: #F2C94C;
  font-family: "Oldenburg";
`

const Name = styled.div`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  font-size: 90px;
  color: #F2F2F2;
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
  ${tw`lg:w-3/5 lg:text-xl pt-4 mx-1`}
  font-family: "Noto Sans";
  line-height: normal;

  color: #BDBDBD;
`


// eslint-disable-next-line react/prefer-stateless-function
class Main extends React.Component {
  render() {
    return (
      <Wrapper> 
        <Line/>
        <ContentWrapper>
          <Pre>Hi, my name is </Pre>
          <Name>Milan Shah</Name>
          <Subtitle>Magna duis nisi deserunt eiusmod</Subtitle> 
          <SubContent>
            Nostrud exercitation consectetur ipsum excepteur labore irure nulla aute qui minim consectetur nostrud aliqua
          </SubContent>
        </ContentWrapper>
      </Wrapper>
    )
  }
}


export default Main
