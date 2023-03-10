// import { IconButton } from "@chakra-ui/button";
// import { useColorMode } from "@chakra-ui/color-mode";
// import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
// import { FaSun, FaMoon } from "react-icons/fa";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Flex, VStack, Heading, Switch } from "@chakra-ui/react";

import { ChakraProvider, Modal } from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import UserDashboard from "./pages/UserDashboard";
// import NavBar from "./components/Header";
import Landing from "./pages/Landing"
import Profile from "./pages/profile"

import UserSettings from "./pages/UserSettings"
import ProductHistory from "./pages/ProductHistory"
import ProductHistoryNC from "./pages/ProductHistoryNC"
import Home from "./pages/Home"
import HomeWalletC from "./pages/HomeWalletC"
import AdminDashboard from "./pages/AdminDashboard";
import ManufacturerDashboard from "./pages/ManufacturerDashboard";
import Header from "./components/Header";
import InfoUser from "./pages/InfoUser";
import axios from "axios";

function App() {

    const [userdata, setUserdata] = useState({
        address: "",
        Balance: 0,
      });
      
const [userType, setUser] = useState("");
// const getUser = () => {
//     axios.get("http://localhost:5000/api/customer/signIn/manufac")
//     .then((res) => {
//         console.log(res.data.message);
//         setUser(res.data.message);
//     });
// };

// useEffect(()=> getUser(),[])


    return (
        
        // <ChakraProvider>
            // <InfoUser />
        // </ChakraProvider>
        
        

        <>
            <Router>
            <Header _setdata={setUserdata} _data={userdata} _usertype={userType} _setuser={setUser}/>  
                <Routes>
                    <Route path='/' element={userdata.address? <Navigate to='/home' /> : <Landing />} />
                    <Route path='/home' element={userdata.address? <Home  _usertype={userType} _data={userdata.address} /> : <Landing />} />
                    <Route path='/customer' element={<UserDashboard _usertype={userType} _address={userdata.address}/>} />
                    <Route path='/manufacturer' element={<ManufacturerDashboard _usertype={userType} _address={userdata.address}/>} />
                    <Route path='/settings' element={<UserSettings />} />
                    <Route path='/admin' element={<AdminDashboard _setdata={setUserdata} _data={userdata} />} />
                    {/* <Route path='/history' element={userdata.address? <ProductHistory _address={userdata.address}/> : <ProductHistoryNC _address={userdata.address}/>} /> */}
                    <Route path='/history/:productID' element={userdata.address? <ProductHistory _address={userdata.address}/> : <ProductHistoryNC _address={userdata.address}/>} />
                    <Route path='/Profile/:address' element={userdata.address? <ProductHistory _address={userdata.address}/> : <Profile _address={userdata.address}/>} />
                    {/* <Route path='/' element={<Landing />} /> */}

                    {/* <Home/> */}
                    {/* <HomeWalletC/> */}
                    {/* <AdminDashboard/> */}
                    {/* <ManufacturerDashboard/> */}
                    {/* <UserDashboard /> */}
                    {/* <ProductHistory/> */}
                    {/* <ProductHistoryNC/> */}
                    {/* <UserSettings /> */}
                </Routes>
            </Router>
            </>
    )
}

export default App;
