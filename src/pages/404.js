import React from 'react'
import styled from 'styled-components'
import 'typeface-nunito-sans'
import Layout from '../components/layout'



const Wrapper = styled.div`
  margin: 0;
  text-align: center;
`
const Container404 = styled.div`
  ${tw`pr-4`}
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  font-size: 150px;
  color: #F2C94C;
`

const Subtitle = styled.div`
  ${tw``}
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 25px;
  color: #E0E0E0;
`

const Pre = styled.div`
  ${tw`py-2`}
  color: #F2C94C;
  font-family: "Oldenburg";
  line-height: normal;
`


const NotFoundPage = () => (
  <Layout>
    <Wrapper>
      <Container404>404</Container404>
      <Subtitle>Oops... You just hit a roadblock</Subtitle>
      <Pre>Sorry 'bout that :/</Pre>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
