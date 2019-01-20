/* eslint-disable react/destructuring-assignment */
import React from 'react'
import styled from 'styled-components'

const Blur = styled.div`
  position: fixed;
  display: block;
  width: 100%;
  height:100%;
  overflow: none;
  top: 0;
  left: 0;
  margin: 0;
  z-index: 100;
  background-color: rgba(0,0,0,0.4);
  backdrop-filter: blur(1px);
`

const Box = styled.div`
  position: fixed;
  width: 375px;
  height: 75vh;
  right: 12%;
  top: 14vh;
  background: rgba(18, 18, 18);
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  z-index: 1000;
`

const IconWrapper = styled.div`
  ${tw`fill-current text-yellow `};
  z-index: 1000;
`


class Menu extends React.Component {

  state = {
    open: false,
  }

  menuOpener = () => {
    this.setState({open: true})
  }

  menuCloser = () => {
    this.setState({open: false})
  }


  render() {
    return (
      <>
        {!this.state.open && 
          <IconWrapper>
            <svg style= {tw`h-16 w-16 mt-1`} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" onClick={this.menuOpener}>
              <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/>
            </svg>
          </IconWrapper>
        }
        {this.state.open &&
          <>
            <IconWrapper>
              <svg style= {tw`h-12 w-12 pr-4`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={this.menuCloser}>
               <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
              </svg>
            </IconWrapper>
            {/* <Blur onClick = {this.menuCloser}/> */}
            <Blur/>
            <Box/>
          </>
        }        
      </>
    )
  }
}

export default Menu