import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                        About us
Green Earth is an Indian online platform a lifestyle brand with an idea to empower, imbibe and expand horizon for people of Karnataka by
giving them a platform to promote a healthy lifestyle, or we can say a natural lifestyle which has organic product’s, traditional
handicraft ,naturally breed plants and seeds to grow by yourself , all being produced by the locals.
We associate with local artisans, organic farmers, NGOs, small scale businesses and bring a beautiful blend of horticultural	organic food, natural décor, and purest	culture to the world with love and good vibes. We the students of Dr.T.M.A.Pai polytechnic ,manipal	while
building this software believe that customer satisfaction is our foremost
priority and tried	our best to implement the easiest user interface and usability that a website could ever have so that we wont even miss a single customer who are not so website friendly.
All the raw integredents are directly picked from the local organic farms to your door step.
The platform also provides resources such as articles, videos, and a gardening community for enthusiasts to share their knowledge and experiences.
	Customer Focused
	Free quotation
	Creative ideas
	Customized gifts



                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img style={{ width: 500, height: 500 }} src="https://d3nn873nee648n.cloudfront.net/900x600/17758/1-HX787143.jpg"alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
