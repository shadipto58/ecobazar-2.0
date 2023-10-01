import React from 'react';
import Hero from './Hero/Hero';
import Categorie from './Categorie/Categorie';
import Popular from './Popular/Popular';


const Home = () => {
    return (
        <div>
            {/* <Hero></Hero> */}
            <Categorie></Categorie>
            <Popular></Popular>

        </div>
    );
};

export default Home;