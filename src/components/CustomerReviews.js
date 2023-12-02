import './CustomerReviews.css'
import Customer1 from '../assets/images/homeImage/customer_batool.png'
import Customer2 from '../assets/images/homeImage/customer_jacob.png'
import Customer3 from '../assets/images/homeImage/customer_sharon.png'
import OrganizationLogo from '../assets/images/homeImage/org_logo.png'

const CustomerReview = ({label}) => {
    const customerArray = [
        {
            name: 'Batool Dharamsey',
            desc: 'Amazing service. Shirley and Juliana were  very welcoming and knowledgeable with the products . We entered thinking we are going to a showroom but it is warehouse with so much variety. Excellent experience. Definitely going back for the bathroom',
            designation: 'Customer',
            image: Customer1
        },
        {
            name: 'Jacob M',
            desc: 'Great experience with Shirley. She was very friendly and answered any questions we had. They had a bunch to choose from and I think we found what we are going to go with. I just wish they had their granite options on the website.',
            designation: 'Customer',
            image: Customer2
        },
        {
            name: 'Sharon White',
            desc: 'Shelley was extremely amazing. She was so kind helped me find exactly what I was looking for right in time for birthday. I can’t wait to come back! She was truly amazing',
            designation: 'Customer',
            image: Customer3
        },
    ]
    return (
        <div className="home-customerreview-container">
            <div className="home-customerreview-header">{label}</div>

            <div className='home-customerreview-cardcontainer'>
                {
                    customerArray.map((v, i) => (
                        <div className='home-customerreview-card'>
                            <div style={{ margin: 30 }}>{v.desc}</div>
                            <div className='home-customerreview-talentcontainer'>
                                <div style={{ display: 'flex', margin: '0px 10px' }}>
                                    <img className='profile-image' src={v.image} />
                                    <div style={{ margin: '0px 10px' }}>
                                        <div className='home-customerreview-customername'>{v.name}</div>
                                        <div className='home-customerreview-customer'>{v.designation}</div>
                                    </div>
                                </div>
                                <img style={{ marginRight: 10 }} src={OrganizationLogo} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default CustomerReview