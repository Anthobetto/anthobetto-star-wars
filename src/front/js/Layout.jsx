import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";
// Custom Components
import ScrollToTop from "./component/ScrollToTop.jsx";
import { BackendURL } from "./component/BackendURL.jsx";
import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
//Custom Pages / View
import { Home } from "./pages/Home.jsx";
import { Demo } from "./pages/Demo.jsx";
import { Single } from "./pages/Single.jsx";
import { AddContact } from "./pages/AddContact.jsx";
import { Contacts } from "./pages/Contacts.jsx";
import { EditContact } from "./pages/EditContact.jsx";
import { Characters } from "./pages/Characters.jsx";
import { Planets } from "./pages/Planets.jsx";
import { Starships } from "./pages/Starships.jsx";
import { CharacterInformation } from "./pages/CharacterInformation.jsx";
import { PlanetInformation } from "./pages/PlanetInformation.jsx";
import { StarshipsInformation } from "./pages/StarshipsInformation.jsx";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";
    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;
    return (
        <div className=" d-flex flex-column min-vh-100">
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<AddContact />} path="/add-contact" />
                        <Route element={<Characters />} path="/characters" />
                        <Route element={<CharacterInformation />} path="characters/:uid" />
                        <Route element={<Planets />} path="/planets" />
                        <Route element={<PlanetInformation />} path="/planets/:uid" />
                        <Route element={<Starships />} path="/starships" />
                        <Route element={<StarshipsInformation />} path="/starships/:uid"/>
                        <Route element={<Contacts />} path="/contacts" />
                        <Route element={<EditContact />} path="/edit-contact" />
                        <Route element={<h1>Not found!</h1>} path="*"/>
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};
export default injectContext(Layout);