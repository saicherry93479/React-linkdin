import styled from 'styled-components'
import React from 'react'
import { connect } from 'react-redux'
import { signInAPI } from '../actions'
import {Redirect} from 'react-router-dom'

export const Login = (props) => {
    return (
        <Container >
{ props.user && 
    <Redirect to="/home"></Redirect>}

            <Nav>
                <a href="/">
                    <img src="/images/login-logo.svg"></img>
                </a>
                <div>
                    <Join>
                        Join now
                    </Join>
                    <SignIn>
                        Sign in
                    </SignIn>
                </div>

            </Nav>
            <Section>

                <Hero>
                    <h1>Welcome to your professional community</h1>
                    <img src="/images/login-hero.svg"></img>
                </Hero>
                <Form>
                    <Google onClick={props.SignIn
                    }>
                        <img src="/images/google.svg"></img>
                        Sign in with Google
                    </Google>
                </Form>

            </Section>

        </Container>
    )
}

const Container = styled.div`
   padding:0px
  


`;

const Nav = styled.div`
  max-width:1128px;
  margin:auto;
  padding:12px 0px 16px;
  display:flex;
  align-items:center;
  position:relative;
  justify-content:space-between;
  flex-wrap:nowrap;

   &>a {
      width:135px;
      height:34px;
      @media (max-width:768px){
          padding: 0 5px;
      }
  }

`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color:rgba(0,0,0,0.6);
  border-radius: 4px;
  margin-right: 12px;
  &:hover{
      background-color: rgba(0,0,0,0.08);
      color: rgba(0,0,0,0.9);
      
  }

`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color:#0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0,0,0,0);
  &:hover{
      background-color: rgba(112,101,240,0.15);
      color: #0a66c2;
  }
`;

const Section = styled.div`
  align-content: start;
  display: flex;
  min-height: 700px;
  padding-top:40px ;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media (max-width:768px)
  {
      margin: auto;
      min-height: 0;
  }

`;

const Hero = styled.div`
  width: 100%;
  h1{
      padding-bottom: 0;
      width: 55%;
      font-size: 56px;
      color: #2977c9;
      font-weight: 200;
      line-height: 70px;
      @media (max-width:768px)
      {
          text-align: center;
          font-size: 20px;
          width: 100%;
          line-height: 2;

      }
  }
  img{
      /* z-index: -1; */
      width: 650px;
      position:absolute;
      top:40px;

      right: -150px;
      @media (max-width:768px){
          top:230px;
          width:initial;
          position: initial;
          height: initial;
      }

  }


`;


const Form = styled.div`
  
  margin-top: 100px;
  width: 408px;
  /* margin: auto; */
  @media (max-width:768px){
      margin-top: 20px;
      margin: auto;
  }




`;



const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 56px;
  width: 100%;
  border-radius: 24px;
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color:rgba(0,0,0,0.6);
  &:hover{
      background-color: rgba(207,207,207,0.25);
      color:rgba(0,0,0,0.75)
  }
  

`;




const mapStateToProps = (state) => {
    return {
        user:state.userState.user
    };
}
const mapDispatchToProps = (dispatch) => ({
    SignIn:()=> dispatch(signInAPI()),

}
);


export default connect(mapStateToProps, mapDispatchToProps)(Login);


