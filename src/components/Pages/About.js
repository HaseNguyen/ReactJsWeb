
import React, { Component } from "react";
import Header from "../Common/Header";
import image from "../assets/img/home-background.jpg"
import TimeLine from "../Common/TimeLine";
import Team from "../Common/Team";


class About extends Component {
    render() {
        return (
            <div>
                <Header
                    title="About us"
                    subtitle="IT'S REALLY A GREAT STORY"
                    showButton={false}
                    image={image}
                />
                <TimeLine />
                <Team />
            </div>
        )
    }
}

export default About;