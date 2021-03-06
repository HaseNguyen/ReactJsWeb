import React, { Component } from "react";
import Header from "../Common/Header";
import image from "../assets/img/home-background.jpg"

//Re-usable components
import Services from "../Common/Services";
import Portfolio from "../Common/Portfolio";
import Team from "../Common/Team";
import TimeLine from "../Common/TimeLine";

class Home extends Component {
    render() {
        return (
            <div>
                <Header
                    title="Welcome To Our Studio"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="TELL ME MORE"
                    link="/services"
                    showButton={true}
                    image={image}
                />

                <Services />
                <Portfolio />
                <TimeLine />
                <Team />
            </div>
        );
    }
}

export default Home;