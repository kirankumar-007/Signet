import React from 'react'
import Title from '../title'
import aboutBcg from '../../images/aboutBcg.jpg'


function info() {
    return (
        <section className="py-5">
            <div className="container"> 
            <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
<img src={aboutBcg} className="img-fluid img-thumbnail"  alt="about company" style={{background: "var(--darkGrey)"}}/>

        </div>
                    <div className="col-10 mx-auto col-md-6 my-3">


                        <Title title="About Us" center>

                        </Title>
                        <p className="text-lead text-muted my-3">Hey there, future-forward folks! At Skynet, we're not your average tech store—we're the cool nerds on the block, bringing you the slickest gadgets and gizmos straight out of sci-fi dreams. Picture this: a world where tech isn't just smart; it's downright genius. 
                        That's our vibe at Skynet. We're here to hook you up with the latest and greatest - from mind-boggling smartphones to laptops that make your workday feel like a breeze.</p>
                        <p className="text-lead text-muted my-3">What makes us stand out? We're not just tech enthusiasts; we're tech connoisseurs. We've combed through the tech universe to handpick the crème de la crème of gadgets. Why? Because we want your tech experience to be smoother than silk and cooler than the flip side of the pillow. But wait, there's more! Our team isn't just a bunch of geeks (okay, maybe a little). We're your partners in tech shenanigans.
                         Whether you're diving into the tech ocean headfirst or just dipping your toes, we've got your back with advice, solutions, and maybe a sprinkle of nerdy humor.</p>
                        <p className="text-lead text-muted my-3">Now, let's talk relationships. We're not here to ghost you after a sale. No way! We're in it for the long haul, offering you sweet deals, jaw-dropping discounts, and a sprinkle of tech magic to keep you grinning from ear to ear.At Skynet, we're rewriting the rulebook on tech shopping.
                         We're not just selling you stuff; we're inviting you to join our tech-fueled rollercoaster of fun and innovation.</p>
                        <p className="text-lead text-muted my-3">Thanks a zillion for choosing Skynet as your tech playground. Buckle up, because we're about to blast off into a world where tech isn't just a thing; it's an experience.But our dedication doesn't stop at providing exceptional products. Our team of tech enthusiasts is here to support and guide you. Whether you're a tech-savvy pro or just starting your journey, our knowledgeable staff is ready to offer expert advice, assistance, and solutions tailored to your needs.</p>
                         <p className="text-lead text-muted my-3"> Got questions, feedback, or just want to geek out with us? Reach out! We're here, armed with gadgets and ready to chat. </p>
                             <button className="main-link" type="button" style={{margin:"2rem"}}>
                                More Info
                             </button>

                    </div>

            </div>
            </div>
            

        </section>
   
    )
}

export default info
