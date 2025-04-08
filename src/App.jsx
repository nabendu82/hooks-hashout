import './App.css'
import React from 'react'
import DocTitleOne from './components/DocTitleOne'
import DocTitleTwo from './components/DocTitleTwo'

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
    <>
      <DocTitleOne />
      <DocTitleTwo />
    </>
  )
}

export default App
