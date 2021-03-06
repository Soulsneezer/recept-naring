import React, { Component } from "react";



class HomePageBackground extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countImg: 0,
            images: [

                "url('/images/backgroundImages/background1.jpg')",
                "url('/images/backgroundImages/background2.jpg')",
                "url('/images/backgroundImages/background3.jpg')",
                "url('/images/backgroundImages/background4.jpg')",
                "url('/images/backgroundImages/background5.jpg')"
            ],


        };
    }

    componentDidMount() {
        setInterval(() => {

            this.setState({
                selectedImage: this.state.images[this.state.countImg]
            })

            this.setState(prev => {
                return {
                    count: prev.countImg++,
                };
            });

            if (this.state.countImg === 5) {
                this.setState({
                    countImg: 0
                });
            }

        }, 5000);
    };


    render() {

        return (
            <div className="homePageBackgroundShow" style={{ backgroundImage: this.state.selectedImage }} alt="Bakgrundsbilder på mat som skiftar var femte sekund">

            </div>
        );
    }
}

export default HomePageBackground;