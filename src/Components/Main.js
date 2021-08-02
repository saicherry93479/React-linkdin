import React,{useState} from 'react'
import styled from 'styled-components'
import PostModal from './PostModal'


const Main = () => {

    const [showModal,setShowModal]=useState("close");

    const handleClick=(e)=>{
        e.preventDefault();
        if(e.target !== e.currentTarget)
        {
            return ;
        }
        switch(showModal)
        {
            case "open":
                setShowModal("close");
                break;
            case "close"    :
                setShowModal("open");
                break;
            default:
                setShowModal("close");
                break;    
        }
    }
    return (
        <Container>
           <ShareBox>
                share
                <div>
                    <img src="/images/user.svg"></img>
                    <button onClick={handleClick}>Start a post</button>
                </div>
                <div>
                    <button><img src="/images/photo-icon.svg"></img>
                    <span>photo</span>
                    </button>
                    <button>
                        <img src="/images/video-icon.svg"></img>
                        <span>video</span>
                    </button>
                    <button>
                        <img src="/images/event-icon.svg"></img>
                        <span>event</span>
                    </button>
                    <button>
                        <img src="/images/article-icon.svg"></img>
                        <span>article</span>
                    </button>

                </div>
           </ShareBox>
           <div>
               <Article>
                   <SharedActor>
                       <a>
                           <img src="/images/user.svg"></img>
                           <div>
                               <span>Title</span>
                               <span>Info</span>
                               <span>Date</span>
                           </div>
                       </a>
                       <button>
                           <img src="/images/ellipses.png"  ></img>
                       </button>
                   </SharedActor>
                   <Description>
                       Description
                   </Description>
                   <SharedImg>
                       <a>
                           <img  src="/images/shared-image-j.jpg"></img>
                       </a>
                   </SharedImg>
                   <SocialCount>
                       <li>
                           <button>
                               <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"></img>

                               <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"></img>
                               <span>75</span>
                           </button>
                       </li>
                       <li>
                           <a>
                               2 comments
                           </a>
                       </li>
                   </SocialCount>
                   <SocialActions>
                   <button>
                       <img src="/images/like-icon.svg"></img>
                       <span>Like</span>
                   </button>
                   <button>
                       <img src="images/Comments-icon.svg"></img>
                       <span>Comments</span>
                   </button>
                   <button>
                       <img src="images/share-icon.svg"></img>
                       <span>share</span>
                   </button>
                   <button>
                       <img src="images/send-icon.svg"></img>
                       <span>send</span>
                   </button>
                   </SocialActions>
               </Article>
           </div>
           <PostModal  showModal={showModal} handleClick={handleClick}></PostModal>

        </Container>
    )
}
const Container=styled.div`
   grid-area: main;

`;

const CommonCard=styled.div`
  text-align:center;
  overflow:hidden;
  margin-bottom: 8px;
  background-color: white;
  border-radius: 5px;
  position: relative;
  border:none;
  box-shadow:0 0 0 1px rgb(0 0 0 / 15%),0 0 0 rgb(0 0 0 /20%);

`;
const ShareBox=styled(CommonCard)`
   display:flex;
   flex-direction: column;
   color: #958b7b ;
   margin: 0 0 8px;
   background-color: white;
     div{
         button{
             outline:none;
             color:rgba(0,0,0,0.6);
             font-size:14px;
             line-height:1.5;
             min-height:40px;
             background:transparent;
             border:none;
             display:flex;
             align-items: center;
             font-weight: 600;;

         }
         &:first-child{
             display:flex;
             align-items: center;
             padding:0px 16px 0px 16px;
             img {
                 width:48px;
                 margin-right: 8px;
                 border-radius:50%;
             }
             button{
                 margin: 4px 0;
                 flex-grow:1;
                 border-radius:35px;
                 padding-left:16px;
                 border :1px solid rgba(0,0,0,0.15);
                 background-color:white;
                 text-align:left;
             }
         }
         &:nth-child(2){
             display:flex;
             flex-wrap: wrap;
             justify-content: space-around;
             padding-bottom:4px;
             button{
                 img{
                     margin:0 4px 0 -2px;

                 }
                 span{
                     color:#70b5f9;
                 }
             }
         }
     }


`;


const Article=styled(CommonCard)`
  margin:0;
  padding: 0 0 8px;
  overflow: visible;



`;

const SharedActor=styled.div`
  padding-right:40px;
  flex-wrap: nowrap;
  padding:12px 16px 0px;
  margin-bottom: 8px;
  align-items: center;
  display:flex;
  a{
      margin-right: 12px;
      flex-grow:1;
      overflow: hidden;
      display:flex;
      img{
      width:40px;
      height: 40px;
  }
  & > div{
      display: flex;
      flex-direction:column;
      flex-grow: 1;
      flex-basis:0;
      margin-left: 8px;overflow:hidden;
      span{
          text-align:left;
          &:first-child{
              font-size: 14px;
              font-weight: 700;
              color:rgba(0,0,0,1);

          }
          &:nth-child(n + 1)
          {
              font-size:12px;
              color:rgba(0,0,0,0.6);

          }
      }



  }
  }
  button{
      position: absolute;
      background:transparent;
      right: 12px;
      top:0;
      border:none;
      outline:none;
      height:20px;
      /* z-index:1; */
      img{
          height: 100%;
          opacity:0.6;
      }
  }
  
 
  
  `;


const Description=styled.div`
   padding: 0 16px;
   overflow: hidden;
   color:rgba(0,0,0,0.9);
   text-align: left;


`;

const SharedImg=styled.div`
  
  margin-top:8px;
  width:100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img{
      object-fit:contain;
      width:100%;
      height:100%;
  }

`;

const SocialCount=styled.ul`
   list-style: none;
   display: flex;
   line-height: 1.33;
   align-items: flex-start;
   overflow:auto;
   margin:0 16px;
   padding :8px 0;
   border-bottom: 1px solid #e9e5df;
   li{
       margin-right: 5px;font-size:12px;
       button{
           display:flex;
       }
   }
  
`;

const SocialActions=styled.div`
   align-items: center;
   display:flex;
   margin:0 ;
   min-height: 40px;
   padding :4px 8px;
   button{
       display:inline-flex;
       align-items: center;
       padding:8px;
       color:#0a66c2;
       @media (min-width:768px){
           span{
            margin-left:8px;

           }
          
       }
   }


`;

export default Main
