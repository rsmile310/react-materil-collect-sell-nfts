# [Minto NFT Marketplace](https://minto-nft-marketplace.netlify.app/)

**Minto NFT Marketplace** is a marketplace where you can _buy_, _sell_, _bid_, and _create_ NFTs. Here you can find category wised NFTs with their seller and creators. Besides, you can connect with your crypto wallet and start creating your own assets and can sell them!

### Table of Contents

- [Minto NFT Marketplace](#minto-nft-marketplace)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
    - [Tools](#tools)
    - [Core Features](#core-features)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
  - [Usage](#usage)
    - [Main App.js File](#main-appjs-file)
    - [Folder Structure](#folder-structure)
    - [Components](#components)
    - [Pages](#pages)
    - [Hooks](#hooks)
    - [Utilities](#utilities)
    - [Assets](#assets)
  - [Customization](#customization)
    - [Theme Customization](#theme-customization)
    - [Language Customization](#language-customization)
  - [Deployment](#deployment)

## [Features](#features)

This project is Build with [React](https://reactjs.org/), a **JavaScript** frameworks for building user interfaces. Besides, [Material UI](https://mui.com) was used as a UI component library. These are the main tools that are used in this project and the other tools and libraries are listed below:

### [Tools](#tools)

- [Axios](#) - For data fetching.
- [React Router V6](#) - For in app routing.
- [i18Next](#) - For internationalization.
- [i18Next Browser Language Detector](#) - For detecting the browsers default language.
- [i18Next Http Backend](#) - Backend layer plugin for **i18Next**
- [React Icons](#) - Icon component library.
- [React Slick](#) - For slideshow on Homepage.
- [Slick Carousel](#) - Core dependance library for **React Slick**.
- [Anime.js](#) - For animating the SVGs.
- [React Spring](#) - For cards animation on Homepage.
- [React Use Gesture](#) - Dependancy for using gesture in **React Spring**.
- [Date FNS](#) - For managing date-time in countdown board.

Here is the list of all dependancies -

```json
"dependencies": {
    "@emotion/react": "^11.7.1",
    "@emotion/styled": "^11.6.0",
    "@mui/lab": "^5.0.0-alpha.62",
    "@mui/material": "^5.2.4",
    "@mui/styled-engine-sc": "^5.1.0",
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.0.0",
    "@testing-library/user-event": "^13.2.1",
    "animejs": "^3.2.1",
    "axios": "^0.24.0",
    "date-fns": "^2.27.0",
    "i18next": "^21.6.5",
    "i18next-browser-languagedetector": "^6.1.2",
    "i18next-http-backend": "^1.3.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-i18next": "^11.15.3",
    "react-icons": "^4.3.1",
    "react-lazy-load-image-component": "^1.5.1",
    "react-router-dom": "6",
    "react-scripts": "5.0.0",
    "react-slick": "^0.28.1",
    "react-spring": "^9.4.2",
    "react-use-gesture": "^9.1.3",
    "slick-carousel": "^1.8.1",
    "styled-components": "^5.3.3",
    "web-vitals": "^2.1.0"
  },
```

### [Core Features](#core_features)

- Responsive Design
- Dark / Light Theme
- Internationalization with four languages.
  - English.
  - Hindi.
  - Tamil.
  - Bengali.
- Crypto Wallet Connect.
  - [Meta Mask](#)
  - [Binance](#)
  - [Trust Wallet](#)
  - [Math Wallet](#)
- Live Auction Count Down.

## [Getting Started](#getting-started)

It is a complete [React](#) Project, so we assume that you have the latest version of [Node.js](#) pre-installed. The Node Package Manager or NPM came with the [Node.js](#) bundle so you don't need to install it separately. However, if you want to use [Yarn](#) package manager which is our recommendation, simply run:

```bash
npm install --global yarn
```

Then check the version with:

```bash
yarn --version
```

### [Installation](#installation)

To get started change directory to the project folder by running:

```bash
cd minto-nft-marketplace
```

Then you have to install all the dependacies that came with the project. We recommend to use [Yarn](#), as there exist a `.lock` file.

`TL;DR` - it will make your life easier. 😎

```bash
yarn # or npm install
```

After installing all required dependancies, now we are good to start our project by running:

```bash
yarn start # or npm start
```

That's it. Now you can view the entire project on your local server.

## [Usage](#usage)

So, the basic usage of the application is really simple. We divided this section with [Folder Structure](#folder_structure), [Components](#components), [Pages](#pages), [Hooks](#hooks), [Utitlities](#utilities), and [Assets](#assets). Besides, the initial `index.html` and other publicly seen assets can be found in `/public` folder.

### [Main App.js File](#app_js_file)

The `App.js` file is the root of all the **Pages** and **Components** that will described below. Here we used the **Custom Theme Provider**, the states of theme switching and the [AnimatedLoader](#animatedLoader_utils)

Here is the full view

```javascript
import { useState } from "react";
import { useEffect } from "react";

// Material UI
import { ThemeProvider } from "@emotion/react";
import { Box, useMediaQuery } from "@mui/material";

// React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Modules
import ArtCardDetails from "./components/ArtCardDetails/ArtCardDetails";
import Layout from "./components/Layout/Layout";
import useCustomTheme from "./hooks/useCustomTheme";
import Auction from "./Pages/Auction/Auction";
import Explore from "./Pages/Explore/Explore";
import Favourites from "./Pages/Favourites/Favourites";
import TrendingSellers from "./Pages/TrendingSellers/TrendingSellers";
import Home from "./Pages/Home/Home";
import SellersDetails from "./Pages/SellerDetails/SellersDetails";
import Footer from "./components/Footer/Footer";
import UserProfile from "./Pages/UserProfile/UserProfile";
import TrendingCreators from "./Pages/TrendingCreators/TrendingCreators";
import ProfileInterface from "./components/ProfileInterface/ProfileInterface";
import KYCInterface from "./components/KYCInterface/KYCInterface";
import LanguageInterface from "./components/LanguageInterface/LanguageInterface";
import ThemeInterface from "./components/ThemeInterface/ThemeInterface";
import EditProfile from "./components/ProfileInterface/EditProfile";
import KYCPending from "./components/KYCInterface/KYCPending";
import KYCApproved from "./components/KYCInterface/KYCApproved";
import TermsAndCondition from "./Pages/Terms&Condition/TermsAndCondition";
import FAQ from "./Pages/FAQ/FAQ";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import ContactUs from "./Pages/ContactUs/ContactUs";
import CreateAssets from "./Pages/CreateAssets/CreateAssets";
import DummyUserProfile from "./Pages/DummyUser/DummyUserProfile";
import AuctionCardDetails from "./components/AuctionCardDetails/AuctionCardDetails";
import CreatorsDetails from "./Pages/CreatorsDetails/CreatorsDetails";
import AnimatedLoader from "./Utils/AnimatedLoader/AnimatedLoader";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const { customTheme } = useCustomTheme(darkMode);

  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    const appLoader = setTimeout(() => setShowApp(true), 2000);
    return () => clearTimeout(appLoader);
  }, []);

  const isMobile = useMediaQuery("(max-width:600px)");

  const handleDarkThemeSwitch = () => {
    localStorage.setItem("theme", "dark");
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  const handleLightThemeSwitch = () => {
    localStorage.setItem("theme", "light");
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    } else if (theme === "light") {
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    }
  }, [customTheme]);

  return (
    <ThemeProvider theme={customTheme}>
      <div
        style={{
          backgroundColor: `${darkMode ? "#040404" : "#ffffff"}`,
          height: "100vh",
        }}
      >
        {showApp ? (
          <Box bgcolor={darkMode ? "#040404" : "#ffffff"}>
            <BrowserRouter>
              <Layout darkMode={darkMode}>
                <Routes>
                  <Route path="/" element={<Home darkMode={darkMode} />} />
                  <Route path="/home" element={<Home darkMode={darkMode} />} />
                  <Route
                    path="/explore"
                    element={<Explore darkMode={darkMode} />}
                  />
                  <Route
                    path="/auction"
                    element={<Auction darkMode={darkMode} />}
                  />
                  <Route
                    path="/explore/:id"
                    element={<ArtCardDetails darkMode={darkMode} />}
                  />
                  <Route
                    path="/auction/:id"
                    element={<AuctionCardDetails darkMode={darkMode} />}
                  />
                  <Route
                    path="/favourites"
                    element={<Favourites darkMode={darkMode} />}
                  />
                  <Route
                    path="/trending-sellers"
                    element={<TrendingSellers darkMode={darkMode} />}
                  />
                  <Route
                    path="/trending-sellers/:id"
                    element={<SellersDetails darkMode={darkMode} />}
                  />
                  <Route
                    path="/user/dummy"
                    element={<DummyUserProfile darkMode={darkMode} />}
                  />
                  <Route
                    path="/create-asset"
                    element={<CreateAssets darkMode={darkMode} />}
                  />
                  <Route
                    path="/profile"
                    element={<UserProfile darkMode={darkMode} />}
                  >
                    <Route
                      path="user-profile"
                      element={<ProfileInterface darkMode={darkMode} />}
                    />
                    <Route
                      path="edit-profile"
                      element={<EditProfile darkMode={darkMode} />}
                    />
                    <Route
                      path="kyc"
                      element={<KYCInterface darkMode={darkMode} />}
                    />
                    <Route
                      path="kyc-pending"
                      element={<KYCPending darkMode={darkMode} />}
                    />
                    <Route
                      path="kyc-approved"
                      element={<KYCApproved darkMode={darkMode} />}
                    />
                    <Route
                      path="language"
                      element={<LanguageInterface darkMode={darkMode} />}
                    />
                    <Route
                      path="theme"
                      element={
                        <ThemeInterface
                          darkMode={darkMode}
                          setDarkMode={setDarkMode}
                          handleDarkThemeSwitch={handleDarkThemeSwitch}
                          handleLightThemeSwitch={handleLightThemeSwitch}
                        />
                      }
                    />
                  </Route>
                  <Route
                    path="/trending-creators"
                    element={<TrendingCreators darkMode={darkMode} />}
                  />
                  <Route
                    path="/trending-creators/:id"
                    element={<CreatorsDetails darkMode={darkMode} />}
                  />
                  <Route
                    path="/privacy-policy"
                    element={<PrivacyPolicy darkMode={darkMode} />}
                  />
                  <Route
                    path="/terms-and-condition"
                    element={<TermsAndCondition darkMode={darkMode} />}
                  />
                  <Route
                    path="/frequently-asked-questions"
                    element={<FAQ darkMode={darkMode} />}
                  />
                  <Route
                    path="/contact-us"
                    element={<ContactUs darkMode={darkMode} />}
                  />
                </Routes>
                {!isMobile && <Footer darkMode={darkMode} />}
              </Layout>
            </BrowserRouter>
          </Box>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <AnimatedLoader />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
```

### [Folder Structure](#folder_structure)

The project has approximately `26` reusable **components**, `8` sub-components and `15` **Pages**. Besides, all the main **hooks** that were used in this project can be found on `/src/hooks` folder and the **utilities** are situated in the `/src/Utils` folder.

Here is the full `src` folders and files tree view.

```bash
|   App.css
|   App.js
|   index.css
|   index.js
|   reportWebVitals.js
|
+---assets
|   |   accepteeImg.png
|   |   backdropMobile.svg
|   |   BackgroundWrinkles1.svg
|   |   BackgroundWrinkles2.svg
|   |   backgroundWrinklesLight.svg
|   |   bidderImg.png
|   |   contact-us-writing.svg
|   |   darkUIPrev.svg
|   |   exploreBackDropCircle.svg
|   |   feamaleUser.png
|   |   femaleUser.svg
|   |   heroVectorLineDark.svg
|   |   heroVectorLineLight.svg
|   |   heroVectorMainDark.svg
|   |   heroVectorSecondaryOneDark.svg
|   |   heroVectorSecondaryTwoDark.svg
|   |   kycApprovedImg.svg
|   |   kycPendingImg.svg
|   |   lightUIPrev.svg
|   |   mainLogo.svg
|   |   mainLogoLight.svg
|   |   polygonInner.svg
|   |   polygonInnerMobile.svg
|   |   polygonOuter.svg
|   |   polygonOuterMobile.svg
|   |   sideFooterLogoDark.svg
|   |   sideFooterLogoLight.svg
|   |   sideNavigationShadow.svg
|   |   sideNavRef.png
|   |   StatHexaInner.svg
|   |   StatHexaOuter.svg
|   |   userProfileAvatar.png
|   |
|   +---Icons
|       +---darkUIIcons
|       |       metaMaskIcon.svg
|       |       minuteDotIcon.svg
|       |
|       +---lightUIIcons
|               metaMaskIcon.svg
|
+---components
|   +---ArtCard
|   |       ArtCard.js
|   |       ArtCard.module.css
|   |
|   +---ArtCardContainer
|   |       AllArtCards.js
|   |       ArtArtCards.js
|   |       ArtCardContainer.js
|   |       MemesArtCards.js
|   |       MusicArtCards.js
|   |       PosterArtCards.js
|   |       SignatureArtCards.js
|   |
|   +---ArtCardDetails
|   |       ArtCardDetails.js
|   |       ArtCardDetails.module.css
|   |       biddingData.js
|   |       SingleArtWork.js
|   |       SingleArtWork.module.css
|   |       TabPanel.js
|   |
|   +---AssetPropertiesModal
|   |       AssetProperModal.js
|   |       AssetProperModal.module.css
|   |
|   +---AuctionCard
|   |       AuctionCard.js
|   |       AuctionCard.module.css
|   |       AuctionCardPrev.js
|   |       AuctionCardPrev.module.css
|   |
|   +---AuctionCardDetails
|   |       AuctionCardDetails.js
|   |       AuctionCardDetails.module.css
|   |       biddingData.js
|   |       SingleAuctionCard.js
|   |       SingleAuctionCard.module.css
|   |       TabPanel.js
|   |
|   +---BackDrop
|   |       BackDrop.js
|   |       Backdrop.module.css
|   |
|   +---ConnectWalletPopUp
|   |       ConnectWalletPopUp.js
|   |       PopUp.module.css
|   |
|   +---CountDownBoard
|   |       CountDownBoard.js
|   |
|   +---CreatorCard
|   |       CreatorCard.js
|   |
|   +---FavouriteCard
|   |       FavoriteCardPrev.js
|   |       FavouriteCard.css
|   |       FavouriteCard.js
|   |
|   +---FilterTab
|   |       FilterTab.js
|   |
|   +---Footer
|   |       Footer.js
|   |
|   +---KYCInterface
|   |       KYCApproved.js
|   |       KYCInterface.js
|   |       KYCPending.js
|   |
|   +---LanguageInterface
|   |       LanguageInterface.js
|   |
|   +---Layout
|   |       Layout.js
|   |
|   +---LiveAuctions
|   |       LiveAuctions.js
|   |
|   +---Navigation
|   |       MobileNavigation.js
|   |       Navigation.js
|   |
|   +---PastAuctions
|   |       PastAuctions.js
|   |
|   +---ProfileInterface
|   |       EditProfile.css
|   |       EditProfile.js
|   |       ProfileInterface.js
|   |
|   +---ProfileSideBar
|   |       ProfileSideBar.js
|   |
|   +---SellerDetailsCard
|   |       SellerDetailsCard.js
|   |
|   +---SellersCard
|   |       SellersCard.js
|   |       SellersCardPrev.js
|   |
|   +---SideBar
|   |       SideBar.js
|   |       SideDrawer.js
|   |
|   +---Skeletons
|   |       ArtCardFB.js
|   |       ArtCardHome.js
|   |       AuctionCardFB.js
|   |       AuctionCardHome.js
|   |       TrendingSellersFB.js
|   |       TrendingSellersHome.js
|   |
|   +---ThemeInterface
|           ThemeInterface.css
|           ThemeInterface.js
|
+---hooks
|       useCountDown.js
|       useCustomTheme.js
|       useQuery.js
|
+---Pages
|   +---Auction
|   |       Auction.js
|   |
|   +---ContactUs
|   |       ContactUs.js
|   |
|   +---CreateAssets
|   |       CreateAssets.js
|   |
|   +---CreatorsDetails
|   |       CreatorsDetails.js
|   |
|   +---DummyUser
|   |       DummyUserProfile.js
|   |
|   +---Explore
|   |       Explore.js
|   |
|   +---FAQ
|   |       FAQ.js
|   |
|   +---Favourites
|   |       AuctionBookmark.js
|   |       Favourites.js
|   |       NftBookmarks.js
|   |
|   +---Home
|   |       CardDeck.js
|   |       cardStyle.module.css
|   |       HeroBanner.js
|   |       heroBannerStyles.module.css
|   |       Home.js
|   |       LiveAuctionContainer.js
|   |       MobileCardDeck.js
|   |       TrendingNFTContainer.js
|   |       TrendingSellersContainer.js
|   |
|   +---PrivacyPolicy
|   |       PrivacyPolicy.js
|   |
|   +---SellerDetails
|   |       SellersDetails.js
|   |
|   +---Terms&Condition
|   |       TermsAndCondition.js
|   |
|   +---TrendingCreators
|   |       TrendingCreators.js
|   |
|   +---TrendingSellers
|   |       TrendingSellers.js
|   |
|   +---UserProfile
|           UserProfile.js
|
+---Utils
    +---AnimatedLoader
    |       AnimatedLoader.js
    |
    +---GradientButtons
    |       GradientButtons.js
    |
    +---StatsComponent
            StatsComponent.js
            statsComponent.module.css
```

### [Components](#components)

As mentioned before the project has `26` components. Here is a briefing of all the components.

- [ArtCard Component](#artCard_compo)
  - First one is the `ArtCard.module.css` component folder. It has it own separate `CSS` modules and all the styles excep the dynamic ones can be found on that `ArtCard.module.css` file.
- [ArtCardContainer Component](#artCardContainer_compo)
  - This components holds all the `ArtCard` components. There are **7** differnt container for them.
- [ArtCardDetails Component](#artCardDetails_compo)

  - Every ArtCard from the explore section has a descriptive details about it and this component mainly holds the `SingleArtWork` component. Have a look at the functionality:

  ```js
  const ArtCardDetails = ({ darkMode }) => {
    const { id } = useParams(); // Read from the url

    const [artWorks, setArtWorks] = useState([]);

    useEffect(() => {
      axios.get("/artWorkData.json").then((res) => {
        setArtWorks(res.data);
      });
    }, [id]);

    //TODO: After adding API endpoints, we do not need to filter

    // Filtering artwork by IDs
    const filteredArtWork = artWorks.filter((artWork) => artWork.id === id);

    return (
      <Container className={styles.artCardDetailsContainer}>
        <Typography variant="h3" color="secondary.main">
          {filteredArtWork.map((fa) => (
            <SingleArtWork darkMode={darkMode} key={fa.id} fa={fa} />
          ))}
        </Typography>
      </Container>
    );
  };
  ```

- [AssetPropertiesModal Component](#assetPropertiesModal_compo)

  - This modal component will pop-up when you need to create your own assets in `/src/Pages/CreateAssets` Page. All the styles of the component except the dynamic styles can be found on its `module.css` folder.

- [AuctionCard Component](#auctionCard_compo)

  - Similar to [ArtCard](#artCard_compo) component, this cards are used in `/src/Pages/Auction` Page for showing auction items. Along with this component there is also a sub-component named [AuctionCardPrev.js](#auctionCardPrev_compo) which is used in `/src/Pages/Home` page for showing the Live Auctions.

- [AuctionCardDetails Component](#auctionCardDetails_compo)

  - This component is also very similar to the [ArtCardDetails](#artCardDetails_compo) component, but it only holds the details for the auction items. It mainly holds the `SingleAuctionCard` sub-component.

- [BackDrop Component](#backdrop_compo)

  - It only holds the `backdrop` effect found in web view.

- [ConnectWalletPopUp Component](#connectWalletPopUp_compo)

  - This modal will show if any user try to connect the crypto wallets.

- [CountDownBoard](#countDownBoard_compo)

  - This component is used to show the `Auction` countdown on the **Trending NFTs** and the **Auction Cards**. It heavily depends on the `useCountDown Hook` for performing its functionality. We will talk more about it later on the [Hooks](#hooks) section.

- [CreatorCard Component](#creatorCard_compo)

  - This component is basically the cards that were used to show the `Trending Creators` on the `/src/Pages/TrendingCreators` page.

- [FavouriteCard Component](#favouriteCard_compo)

  - This is the component card that were used to show the cards on `/src/Pages/Favourites` page. The styling are separated on its own `CSS` file. Besides, it has another sub-component called [FavouriteCardPrev](#favouriteCardPrev_compo) for showing the Trending NFTs on the `/src/Pages/Home` page.

- [FilterTab Component](#filterTab_compo)

  - This component was used to show the top tabs in `/src/Pages/Explore` page. This component has also a separate **Menu** item for filtering and sorting the items present in the [Explore](#explore_page) page.

- [Footer Component](#footer_compo)

  - The Footer component is used to show the Footer. Although, it will not appear on small devices.

- [KYCInterface Component](#kycInterface_compo)

  - This component was used in the settings of `/src/Pages/UserProfile` page for registering as a seller on the marketplace. It has `2` other sub-component named [KYCApproved](#) and [KYCPending](#) which were used to show the the pending and approved status of that seller.

- [LanguageInterface Component](#languageInterface_compo)

  - This component was used to switch between the **Languages** that we primarily support. This mainly manipulates and triggers the `i18Next` library to change the language of the entire application. Also, it gets the language changes data that stored in the browser's `Cookie` storage and set it as the default value of the `radio` buttons, so it doesn't break the change. Follow the below code snippet:

  This function is used to get the cookie value.

  ```javascript
  const changeLang = () => {
    const localeLang = document.cookie;
    return localeLang.slice(8);
  };
  ```

  After that it sets as the default value of the `radio`, like this:

  ```html
  <RadioGroup
    aria-label="language"
    defaultValue="{changeLang}"
    name="language-button-group"
  ></RadioGroup>
  ```

  Basically, the `changeLanguage(lang)` method from `i18next` triggered the changes. We will talk more about it in the [Customization](#customization) section. For now you can see something like this:

  ```html
  <Radio
    onClick={() => i18next.changeLanguage("en")} <!-- "en" is changeable >
  />
  ```

- [Layout Component](#layout_compo)

  - This component basically holds the main structure of the of the page. It holds the [Navigation](#navigation_compo) and [SideBar](#sideBar_compo), and it takes `children` props to show all other components that were used underneath. The whole [Layout] Component is used in `/src/App.js` file.

- [LiveAuction Component](#liveAuction_compo)
  - It was mainly used as a container for holding the [AuctionCard](#auctionCard_compo) component/s which are `live`
- [PastAuction Component](#pastAuction_compo)
  - Similar to [LiveAuction](#liveAuction_compo) Component, used to show the [AuctioCard](#auctionCard_compo) which are `past`.
- [Navigation Component](#navigating_compo)

  - This component can be divided into two sub-component which are `Navigation.js` for the web view and `MobileNavigation.js` for smaller devices. Although, the `MobileNavigation` component is rely on the `Navigation` component which is also the parent or container components that holds the `MobileNavigation`. Besides, this component has some smaller components like `Menu` item for showing a drop-down menu on the `Connect Wallet` button. The wallet connection happens here. Also, it holds the [ConnectWalletPopUp](#connectWalletPopUp_compo) Component.

- [ProfileInterface Component](#profileInterface_compo)

  - This component is used to show the user profile information altogether. It has another sub-component which is called [EditProfile](#) for editing the user profile information.

- [ProfileSideBar Component](#profileSideBar_compo)
  - This mainly act like a navigation panel situated on `/src/Pages/UserProfile` Setting page.
- [SellerDetailsCard Component](#sellerDetailsCard_compo)

  - This reusable component is used mainly showing the tab panel content. It used in [CreatorsDetails](#creatorsDetails_page), [SellersDetails](#sellersDetails_page), and [DummyUserProfile](#dummyUserProfile)

- [SellerCard Component](#sellerCard_compo)

  - This component is similar to the [CreatorCard](#creatorCard_compo). However, it was used to show the `Trending Sellers` on the `/src/Pages/TrendingSellers` page. It also has a sub-component named [SellerCardPrev](#sellerCardPrev_compo) which showed on the `/src/Pages/Home` page.

- [SideBar Component](#sideBar_compo)

  - This component has two sub-component. The main [SideBar](#sideBar_compo) is used to show the sidebar all over the place of the application, and the [SideDrawer](#) is used to show a drawer like navigation for the smaller devices.

- [Skeletons Component](#skeletons_compo)

  - This folders contains all the skeletons screen for [ArtCard](#artCard_compo) (both for `Home` and `Explore` page), [AuctionCard](#auctionCard_compo)(both for `Home` and `Auction` page), [TrendingSeller](#trendingSeller_compo), [TrendingCreator](#trendingCreator_compo).

- [ThemeInterface Component](#themeInterface_compo)

  - This component in used to switch between the `light` and `dark` theme. This also works like the Radio button in [LanguageInterface](#languageInterface_compo) by invoking a function like this:

  ```javascript
  const whatTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      return "darkUI";
    } else if (theme === "light") {
      return "lightUI";
    }
  };
  ```

### [Pages](#pages)

As we mentioned there are `15` pages in this project. Find the brief description below:

**Main Pages**

- [Home Page](#home_page)

  This the main landing page of this marketplace application. It has `6` sub-components which are

  - [CardDeck](#cardDeck_compo) - For showing the draggable cards in the [HeroBanner](#heroBanner_compo) section.
  - [HeroBanner](#heroBanner_compo) - Mainly a container where the banner and draggable [CardDeck](#cardDeck_compo) contain.
  - [LiveAuctionContainer](#liveAuctionContainer_compo) - It mainly holds the [AuctionCardPrev](#auctionCardPrev_compo) component.
  - [MobileCardDeck](#mobileCardDeck_compo) - It is the mobile version of above mentioned [CardDeck](#cardDeck_compo).
  - [TrendingNFTContainer](#trendingNFTContainer_compo) - It is the container that holds the [FavouriteCardPrev](#favouriteCardPrev_compo) component.
  - [TrendingSellersContainer](#trendingSellerContainer) - For showing the [SellerCardPrev](#sellerCardPrev_compo) components.

- [Auction Page](#auction_page)

  - The **Auction Page** is a separate `route` and a container for holding all the [AuctionCard](#auctionCard_compo) Component.

- [Explore Page](#explore_page)

  - The **Explore Page** is a separate `route` mainly show all the [ArtCard](#artCard_compo) components.

- [UserProfile Page](#userProfile_page)

  - This is the user settings page with a separate `route` named `/profile`. It mainly holds the [ProfileSideBar](#profileSideBar_compo) components and the `outlets`.

- [SellerDetails Page](#sellerDetails_page)

  - Mainly a separate page that holds the all the information about a seller. This is a dynamic page with `route` and holds the [SellerDetailsCard](#sellerDetailsCard_compo) component.

- [CreatorDetails Page](#creatorDetails_page)
  - Similar to [SellerDetails](#sellerDetails_page) and show the [CreatorDetailsCard](#creatorDetailsCard_compo).
- [DummyUserProfile Page](#dummyUserProfile_page)

  - A separate `route` only for the user, where a user can view his/her NFTs.

- [Favourite Page](#favourtie_page) - All the favourite cards of a user showed in this page. It mainly holds the [FavouriteCard](#favouriteCard_compo) component.

- [TrendingSeller Page](#trendingSeller_page) - It is a container for showing all the [SellerCard](#sellerCard_compo) components.
- [TrendingCreator Page](#trendingCreator_page) - Similar to [TrendingSeller Page](#trendingSeller_page). It is the container for showing all the [CreatorCard](#creatorCard_compo) components.

**Other Pages**

- [CreateAsset Page](#createAsset_page) - For creating NFT assets.
- [ContactUs Page](#contactUs_page) - A static page for contacting with the authority.
- [FAQ Page](#faq_page)
- [PrivacyPolicy Page](#privacyPolicy_page)
- [Terms&Condition Page](#termsAndCondition_page)

### [Hooks](#hooks)

This project has `3` custom hooks. They are:

[useCountDown Hook](#useCountDown_hook)

This hook has one purpose only, that is show the desired countdown on the [AuctionCard](#auctionCard_compo) item. It takes an argument with the parameter of `futureDate` which can be passed during the use of this hook. The code is below:

```javascript
export const useCountDown = (futureDate) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [futureDate]);

  const isTimeUp = isBefore(futureDate, now);

  if (isTimeUp) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isTimeUp };
  }

  let { days, hours, minutes, seconds } = intervalToDuration({
    start: now,
    end: futureDate,
  });

  return { days, hours, minutes, seconds, isTimeUp };
};
```

It is using the `date-fns` library for handling the date-time.

[useCustomTheme Hook](#useCustomTheme_hook)

This is the main theme hook for the entire project. We were used a custom theme color palette with custom `FontFamily` other than **Roboto** that comes with the `Material UI` by default.
It was used in the main `App.js` file with a `ThemeProvider` context from the `@emotion-react` library.

```javascript
const useCustomTheme = (darkMode) => {
  const customTheme = createTheme(
    darkMode
      ? {
          palette: {
            primary: {
              main: "#121212",
            },
            secondary: {
              main: "#ffffff",
            },
            accent: {
              main: "#171C26",
            },
            pink: {
              main: "#E552FF",
            },
            blue: {
              main: "#01D4FA",
            },
            black: {
              main: "#040404",
            },
          },
          typography: {
            fontFamily: "'Poppins', sans-serif",
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 700,
          },
        }
      : {
          palette: {
            background: {
              default: "#ffffff",
            },
            primary: {
              main: "#ffffff",
            },
            secondary: {
              main: "#121212",
            },
            accent: {
              main: "#ffffff",
            },
            pink: {
              main: "#E552FF",
            },
            blue: {
              main: "#01D4FA",
            },
            black: {
              main: "#FFFFFF",
            },
          },
          typography: {
            fontFamily: "'Poppins', sans-serif",
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 700,
          },
        }
  );

  return { customTheme };
};
```

[useQuery Hook](#useQuery_hook)

This hook is relatively a utility hook for reading and manipulating the query parameters from the URL using the `useMemo` hook from [React](https://reactjs.org) and the `useLocation` hook from [React Router DOM](https://react-router.com).

```javascript
const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};
```

### [Utilities](#utils)

There are three different utility components which are [AnimatedLoader](#animatedLoader_utils), [GradientButtons](#gradientButton_utils), and [StatsComponent](#statsComponent_utils).

[AnimatedLoader](#animatedLoader_utils)

This component was used to show the animated loader for the entire application. It will show on the first entry on this app and if the user refreshes it. Mainly, this component is built by using the [Anime.js](#anime_js) library. This JavaScript library is a handy way to build simple animations with the SVGs.

The code:

```javascript
const AnimatedLoader = () => {
  useEffect(() => {
    var pathEls = document.querySelectorAll("path");
    for (var i = 0; i < pathEls.length; i++) {
      var pathEl = pathEls[i];
      var offset = anime.setDashoffset(pathEl);
      pathEl.setAttribute("stroke-dashoffset", offset);
      anime({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: anime.random(1000, 1500),
        delay: function (el, i) {
          return i * 250;
        },
        loop: true,
        direction: "alternate",
        easing: "easeInOutSine",
        autoplay: true,
      });
    }
  }, []);

  return (
    <svg>
      <path/>
      // All paths...
    </svg>
  )
```

Here it mainly targets all the svg path that with correspondent with the `pathEl` variable and loops through it. The main functionality in done within the `anime()` function. It takes an object of instructions like `targets` `duration` `loop` `direction` `easing` `delay`. The `duration` and the `delay` can also be used as function. Here we use the `delay` dynamically by invoking a function.

```javascript
function (el, i) {
  return i * 250;
}
```

[GradientButtons](#gradientButton_utils)

This is basically a styled component function that contains two different `gradient buttons`. Mainly we used the styled components with the power of `Material UI` by invoking the `styled` from it.

[StatsComponent](#statsComponent_utils)

This utility component was used to build the statistics shown on the [Home](#home_page) page. [Anime.js] library is also used here. Mainly this component takes `totalNFT` `totalSeller` `totalSold` as props. However, if there is no data passed through these props it will invoke its default values which are `80` `30` `50` to show the numbers in the stats.
There used two different function wrapped up with the `useEffect` hook from [React](#). These two different function takes inner path and outer path as the path variable and loops through it.

Take a look:

```javascript
// Outer paths
useEffect(() => {
  const outerPathEls = document.querySelectorAll(".outerPath");
  // var pathEls = document.getElementsByClassName("path");
  for (var i = 0; i < outerPathEls.length; i++) {
    let pathEl = outerPathEls[i];
    let offset = anime.setDashoffset(pathEl);
    pathEl.setAttribute("stroke-dashoffset", offset);
    anime({
      targets: pathEl,
      strokeDashoffset: [offset, 0],
      duration: anime.random(1000, 1000),
      delay: function (el, i) {
        return i * 250;
      },
      loop: false,
      direction: "alternate",
      easing: "easeInOutSine",
      autoplay: true,
    });
  }
}, []);
```

```javascript
// Inner Paths
useEffect(() => {
  const innerPathEls = document.querySelectorAll(".innerPath");
  for (var i = 0; i < innerPathEls.length; i++) {
    let pathEl = innerPathEls[i];
    let offset = anime.setDashoffset(pathEl);
    let x = 0.5;
    let y = -0.5;
    pathEl.setAttribute("stroke-dashoffset", offset);
    anime({
      targets: pathEl,
      strokeDashoffset: [offset, 0],
      duration: anime.random(1000, 3000),
      delay: function (el, i) {
        return i * 150;
      },
      loop: false,
      direction: "alternate",
      translateX: function () {
        return x * 3;
      },
      translateY: function () {
        return y * 3;
      },
      easing: "easeInOutSine",
      autoplay: true,
    });
  }
}, []);
```

### [Assets](#asset)

The **Asset** folder contains all the static image assets and icons that were used in this application.

## [Customization](#customization)

The customization will cover the following topics

- [Theme Customization](#theme_customization)
- [Language Customization](#language_customization)

### [Theme Customization](#theme_customization)

if you want to customize the look and feel of the application, go to the `/src/hooks/useCustomTheme.js` folder. There are two different palette for `dark` and `light` UI. Have a look:

```json
palette: {
  primary: {
    main: "#121212",
  },
  secondary: {
    main: "#ffffff",
  },
  accent: {
    main: "#171C26",
  },
  pink: {
    main: "#E552FF",
  },
  blue: {
    main: "#01D4FA",
  },
  black: {
   main: "#040404",
  },
},
```

This palette is for the dark UI.

- The `primary` color here is `#121212` which mainly used for the background and the cards.
- The `secondary` color here is `#ffffff` which mainly used for the texts.
- The `accent` color was used for the `Papers` and `Card` background color.
- The `pink` and `blue` were used in buttons and highlighter.
- The `black` was used as another shade of the `primary` color.

Similarly, for the light UI, take a look at this palette.

```json
palette: {
  background: {
    default: "#ffffff",
  },
  primary: {
    main: "#ffffff",
  },
  secondary: {
    main: "#121212",
  },
  accent: {
    main: "#ffffff",
  },
  pink: {
    main: "#E552FF",
  },
  blue: {
    main: "#01D4FA",
  },
  black: {
    main: "#FFFFFF",
  },
},
```

All the above code is same as for the dark UI, here we just alter the color combination.

### [Language Customization](#language-customization)

This application used the `i18next` library for managing all the language related work that took place within the app. The language customization folder can be found in `/public/locales` directory.

[Let's add a new language!](#add_new_lang)

Go to `/public/locales` directory and create new folder with its correspondent `ISO 639-1 Code`. Let's say we are adding the `Bengali` language. For this:

- Create a folder in this `/public/locales` directory named `bn` and create a `json` file named as `translation.json`.
- Then go to `/public/locales/en/translation.json` and copy all the data into our newly created `translation.json` file located in `/public/locales/bn`
- Then re-add the correspondent keywords like this:
  ```json
  {
    "NAV_HOME": "হোম",
    "NAV_EXPLORE": "খুঁজুন",
    "NAV_AUCTION": "নিলাম",
    "NAV_CREATE_ASSET": "অ্যাসেট তৈরি করুন",
    "NAV_CONNECT_WALLET": "ওয়ালেট কানেক্ট করুন",
    "SETTINGS_USER_PROFILE": "ইউজার প্রোফাইল",
    "SETTINGS_EDIT_PROFILE": "এডিট প্রোফাইল",
    "SETTINGS_KYC": "কেওয়াইসি",
    "SETTINGS_KYC_APPROVED": "কেওয়াইসি অনুমোদিত",
    "SETTINGS_KYC_PENDING": "কেওয়াইসি চলছে",
    "SETTINGS_LANGUAGE": "ভাষা",
    "SETTINGS_THEME": "থিম",
    "LIVE_AUCTIONS": "চলতি নিলামসমূহ",
    "PAST_AUCTIONS": "বিগত নিলামসমূহ",
    "FAVOURITES": "প্রিয়গুলো",
    "SETTINGS": "সেটিংস",
    "TOTAL_NFT": "সর্বমোট এনএফটি"
  }
  ```
- Then go to the `/src/index.js` file and add the language's `ISO 639-1 Code` in that array like this:
  ```javascript
  supportedLngs: ["en", "bn", "hi", "ta"],
  ```
  Here we also add the the `ISO 639-1 Code` for `Hindi` and `Tamil`.
- It mainly takes this below by using the [i18Next Http Backend](#) plugin.
  ```javascript
  backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  ```
  That's it. now you can switch and view this with `Bengali` language.

_Note: Here we just demonstrated the existing language translation. If you really want to add another language make sure you add the switcher in [Language Interface](#languageInterface_compo) component_

## [Deployment](#deploy)

So, by far we're done with the [usage](#usage) and the [customization](#customization), now this application is good to deploy.

To deploy the local build in your machine, run:

```bash
yarn build #or npm run build
```

You can also view the live website by deploying it to Netlify. For this you can simply drag your build folder on Netlify.

But, if you like CI/CD and want to done everything automatically, you may want to use `vercel`.
For deploying the project with `vercel` without connecting to `git`, first you have to install the `vercel cli`, run:

```bash
yarn global add vercel

#or

npm i -g vercel
```

Then open your shell `cd` to the project folder and run

```bash
vercel #all right, that's it!!
```

It will automatically minified and build the project and give you a live url where you can `preview` the project.

If you want to go to `production` build, simply run:

```bash
vercel --prod
```

_Note: If you are using the `vercel cli` for the first time, we recommend you to go through the [vercel cli docs](https://vercel.com/docs/cli) at once. It just makes your life easier._
