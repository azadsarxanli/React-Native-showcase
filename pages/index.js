import { Button, Download, SectionWrapper, Features } from "../components";
import assets from "../assets";

import { styles } from "./_app";

export default function Home() {
  return (
    <>
      <SectionWrapper
        title="You own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience the best NFT marketplace with a simple and intuitive interface. Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users devices. You can easily get your app into people's hands."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen is the home screen which contains the list of all the NFTs. The second screen is the detail screen which contains the details of the NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 flex justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}  `}>
          Made with love by <span className="bold">Azad Sarkhanli</span>
        </p>
      </div>
    </>
  );
}
