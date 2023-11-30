import CoverComponent from "../../components/coverComponent"
import SubscriptionNewsLetter from "../Home/Components/SubscriptionNewsLetter"
import DiscoverCollection from "./Components/DiscoverCollection"

const OurCollection = () => {
    return(
        <div>
            <CoverComponent image={'url(images/cover/our_collection.png)'} label={['OUR', 'COLLECTION']}/>
            <DiscoverCollection />
        </div>
    )
}

export default OurCollection