import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contacts/Contact';
import Courses from '../Courses/Courses';
import Fetures from '../Fetures/Fetures';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const Allitem = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <Banner></Banner>
            <Courses></Courses>
            <Fetures></Fetures>
            <Contact></Contact>
            {/* <Footer></Footer> */}
            

        </div>
    );
};

export default Allitem;