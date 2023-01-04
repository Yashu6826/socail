
import React from 'react';
import { createContext,useEffect,useState } from 'react';
 
export const AuthContext = createContext();

export const AuthContextProvider =({children}) =>{

const [currentUser,setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
);

const login =() =>{
setCurrentUser({ 
    id:1,
    name:"Yashraj",
    profilePic:
"https://www.google.com/url?sa=i&url=http%3A%2F%2Fclipart-library.com%2Fcool-pictures.html&psig=AOvVaw3W8bug1Bz2dcB-mGF6051O&ust=1672847912769000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPiMnJ7iq_wCFQAAAAAdAAAAABAJ",
});
};

useEffect(()=>{
localStorage.setItem("user",JSON.stringify(currentUser));
},[currentUser]
);

return(
    <AuthContext.Provider value ={{currentUser,login}}>
        {children}
    </AuthContext.Provider>
)

}

