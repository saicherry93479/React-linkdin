import { auth,provider,storage } from "../firebae";
import { SET_USER } from "./actionType"
import db from "../firebae"


export const setUser=(payload)=>({
    type:SET_USER,
    user:payload
})

export function signInAPI(){

  
    return   (dispatch)=> auth.signInWithPopup(provider).then((payload)=>{
       dispatch(setUser(payload.user))

    }).catch((error)=>alert(error.message));
}

export function getUserAuth(){
    return (dispatch)=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                dispatch(setUser(user))
            }

        })
    }
}

export function signOutAPI()
{
    return (dispatch)=>{
        auth.signOut().then(()=>{
            dispatch(setUser(null))
        }).catch(err=>{
            console.log(err)
        })
    }
}


export function postArticleAPI(payload){

    return (dispatch)=>{
        if(payload.image !="")
        {
            const upload=storage.ref(`images/${payload.image.name}`)
            .put(payload.image);
            upload.on('state_changed',
            snapshot=>{
                const progress=
                    (snapshot.byetestTransferred / snapshot.totalBytes)*100;
                    console.log(` progress : ${progress}%`)
                    if(snapshot.state === "RUNNING")
                    {
                        console.log(`Progress : $ {progress}%`);
                    }
            },err=>console.log(err.code),
            async ()=>{
                const downloadURL = await upload.snapshot.ref.getDownloadURL();
                db.collection("articles").add({
                    actor :{
                        description:payload.user.email,
                        title:payload.user.displayName,
                        date:payload.timestamp,
                        image:payload.user.photoURL
                    },
                    video :payload.video,
                    sharedImage: downloadURL,
                    comments:0,
                    description:payload.description,

                })
            });
           
        }
    }

}