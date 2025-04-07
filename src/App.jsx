import './App.css'
import React from 'react'
import ParentComp from './components/ParentComp'
// import GrandParent from './components/GrandParent';

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

function App() {
  return (
    // <UserContext.Provider value="Nabendu">
    //   <ChannelContext.Provider value="Hashout">
    //     <GrandParent />
    //   </ChannelContext.Provider>
    // </UserContext.Provider>
    <ParentComp />
  )
}

export default App
