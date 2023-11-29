import './DiscoverCollection.css'

const DiscoverCollection = () => {
    const collections = [
        {
            name: 'ESSENTIALS COLLECTION',
            image: 'url(images/collections/essentials.png)'
        },
        {
            name: 'INDULGE COLLECTION',
            image: 'url(images/collections/indulge.png)'
        },
        {
            name: 'INTERNATIONAL COLLECTION',
            image: 'url(images/collections/international.png)'
        },
        {
            name: 'MY COLLECTION',
            image: 'url(images/collections/mythology.png)'
        },
    ]
    return(
        <div className='discover-collection-component'>
            <div className='discover-collection-heading'>DISCOVER OUR NEW COLLECTION</div>
            <div className='discover-collection-desc'>For over three decades, we’ve been crafting the most trusted countertops by blending exquisite design with top durability. Join us on a journey of partnership and creativity, to fulfill your dream with the countertop that brings it to life.</div>
            <div className='discover-collection-collections'>
                <div>
                    <div style={{backgroundImage: 'url(images/collections/mythology.png)'}} />
                </div>
            </div>
        </div>
    )
}

export default DiscoverCollection;