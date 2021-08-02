import styled from 'styled-components'
import { useState } from 'react';
import ReactPlayer from 'react-player'
import { connect} from 'react-redux'
import firebase from 'firebase'
import { postArticleAPI } from '../actions';

const PostModal = (props) => {
    const reset = (e) => {
        SetEditorText("")
        setShareImage("")
        setVideoLink("")
        setAssetArea("")
        props.handleClick(e);
    }
    const [editorText, SetEditorText] = useState("")
    const [shareImage, setShareImage] = useState("")
    const [videoLink, setVideoLink] = useState("")
    const [assetArea, setAssetArea] = useState("")

    const handleChange = (e) => {
        const image = e.target.files[0];
        if (image === "" || image === undefined) {
            alert(`not an image ,the file is a ${typeof image}`)
            return;

        }
        setShareImage(image)
    }
    const switchAssetArea = (area) => {
        setShareImage("");
        setVideoLink("")
        setAssetArea(area)
    }
    const postArticle=(e)=>{
        e.preventDefault();
        if(e.target !== e.currentTarget)
        {
            return;
        }
        const payload={
            image: shareImage,
            video : videoLink,
            user : props.user,
            description:editorText,
            timestamp:firebase.firestore.Timestamp.now(),
        };
        props.postArticle(payload);
        reset(e);
    }
    return (

        <>

            {props.showModal === "open" &&
                <Container>
                    <Content>

                        <Header>
                            <h2>Create a post</h2>
                            <button onClick={(event) => reset(event)}>
                                <img src="/images/close-icon.png"></img>
                            </button>
                        </Header>
                        <SharedContent>
                            <UserInfo>
                                {
                                    props.user.photoURL?<><img  src={props.user.photoURL}></img> <span>{props.user.displayName}</span></>:<><img src="/images/user.svg"></img><span>name</span></>
                                }
                                
                               
                            </UserInfo>
                            <Editor>
                                <textarea value={editorText} onChange={(e) => SetEditorText(e.target.value)}
                                    placeholder="what do u want to talk about?" onFocus="true"></textarea>

                                {
                                    assetArea === "image" ?(
                                        <UploadImage>
                                            <input type="file" accept="image/gif ,image/jpeg ,image/png"
                                                name="image" id="file"
                                                style={{ display: "none" }}
                                                onChange={handleChange}></input>
                                            <p><label htmlFor="file"
                                            >Select an Image to share</label></p>
                                            {shareImage && <img src={URL.createObjectURL(shareImage)}></img>}

                                        </UploadImage>)

                                        : assetArea==="media"&& <>
                                            <input type="text" placeholder="please input a video Link" value={videoLink}
                                                onChange={(e) => setVideoLink(e.target.value)} ></input>
                                            {
                                                videoLink && <ReactPlayer width={"100%"} url={videoLink} />
                                            }
                                        </>



                                }


                            </Editor>
                        </SharedContent>
                        <SharedCreation>
                            <AttachAssets>
                                <AssetButton onClick={()=>switchAssetArea("image")}>
                                    <img src="/images/share-image.svg"></img>
                                </AssetButton>
                                <AssetButton onClick={()=>switchAssetArea("media")}>
                                    <img src="/images/share-video.svg"></img>
                                </AssetButton>
                            </AttachAssets>
                            <ShareComment>
                                <AssetButton>
                                    <img src="/images/share-comment.svg"></img>
                                    Anyone
                                </AssetButton>
                            </ShareComment>
                            <PostButton disabled={!editorText ? true : false} onClick={(event)=>
                              postArticle(event)
 
                            }>
                                Post

                            </PostButton>


                        </SharedCreation>

                    </Content>

                </Container>
            }
        </>
    )
}


const Container = styled.div`
  position: fixed;
  top:0;
  left:0;
  right: 0;
  bottom: 0;
  z-index:1000;
  background-color: rgba(0,0,0,0.8);
  animation:fadeIn 0.3s;

`;
const Content = styled.div`
width:100%;
max-width:552px;
background-color: white;
max-height: 90%;
overflow:initial;
border-radius: 5px;
position:relative;
display:flex;
flex-direction: column;
top:32px;
margin: 0 auto;

`;


const Header = styled.div`
  display: block;
  padding :16px 20px;
  border-bottom: 1px solid rgba(0,0,0,0.15);
  font-size: 16px;
  line-height: 1.5;
  color:rgba(0,0,0,0.6);
  display:flex;
font-weight:600;
 justify-content: space-between;
 align-items: center;
 button{
     height:40px;
     width:40px;
     min-width: auto;
     color:rgba(0,0,0,0.15);
     img{
         pointer-events: none;
         opacity: 0.5;

     }

 }
  
`;

const SharedContent = styled.div`
  display:flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y:auto;
  vertical-align: baseline;

  background: transparent;
  
 
  padding: 8px 12px;

  
  `;

const UserInfo = styled.div`
   display:flex;
   align-items: center;
   padding :12px 24px;
   svg ,img {
       width:48px;
       height:48px;
       background-clip: content-box;
       border:2px solid transparent;
       border-radius:50%;

   }
   span{
       font-size:16px;
       line-height:1.5;
       font-weight:600;
       margin-left: 5px;
   }

`;


const SharedCreation = styled.div`
  display:flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;
const AssetButton = styled.button`

  display:flex;
  align-items: center;
  height: 40px;
  
  min-width:auto;
  color:rgba(0,0,0,0.5);

`;

const AttachAssets = styled.div`
  display: flex;
  align-items:center;
  padding-right:8px;
  ${AssetButton}{
      width:40px;
  }

`;

const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0,0,0,0.15);
  ${AssetButton}{
      img{
          margin-right: 5px;
      }

  }

`;

const PostButton = styled.button`
  min-width:60px;
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 16px;
  background:${props => props.disabled ? "rgba(0,0,0,0.6)" : "#0a66c2"};
  color:white;
  /* border:${props => props.disabled ? "none" : true} */
  border:none;
  &:hover{
      background: ${props => props.disabled ? "rgba(0,0,0,0.8)" : "#004182"};
  }

`;

const Editor = styled.div`

padding: 12px 24px;
textarea{
    width:100%;
    min-height: 100px;
    resize: none;
}

input{
    width:100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
}


`;

const UploadImage = styled.div`
  text-align:center;
  img{
      width:100%;
      
  }
  
`;



const mapStateTOProps=(state)=>{
    return {
        user :state.userState.user,

    }
}
const mapStateToDispacth=(dispatch)=>(
   {
       postArticle :(payload)=>dispatch(postArticleAPI(payload))

    }

)



export default connect(mapStateTOProps,mapStateToDispacth)(PostModal)
