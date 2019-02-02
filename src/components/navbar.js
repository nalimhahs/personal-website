import React from 'react'
import styled from 'styled-components'
import Menu from './menu'

const NavbarWrapper = styled.header`
  /* ${tw`flex justify-between bg-transparent w-100 py-6 px-12`} */
  height: 15vh;
  width: 100vw;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  top: 0px;
  padding: 0px 50px;
  box-sizing: border-box;
`

const NavContent = styled.nav`
  width: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: relative;

`

const Logo = styled.div`
  ${tw`text-yellow`}
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`

// eslint-disable-next-line react/prefer-stateless-function
class Navbar extends React.Component {

  render() {
    return (
      <> 
        <NavbarWrapper>
          <NavContent>
            <Logo>
              <svg style= {tw`h-12 w-12`} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="36" height="36" viewBox="0 0 485.688 485.688" xmlSpace="preserve" preserveAspectRatio="xMidYMid">
                <path d="M364.269,453.155H121.416L0,242.844L121.416,32.533h242.853l121.419,210.312L364.269,453.155z M131.905,434.997h221.878    l110.939-192.152L353.783,50.691H131.905L20.966,242.844L131.905,434.997z" fill="#F2C94C"/>  
              </svg>
            </Logo>
            <Menu/>
          </NavContent>
        </NavbarWrapper>
      </>
    )
  }
}


export default Navbar
