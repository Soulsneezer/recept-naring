import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import FoodCardContainer from "./foodCardContainer";
import HomePageRecipeHeadline from "./homePageRecipeHeadline";
import RecipeImageLoader from "./recipeImageLoader";

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [
        "url('/images/backgroundImages/background-img1.jpg')",

        "url('/images/backgroundImages/chickenTaco.jpg')"
        /*  "url('https://picsum.photos/200/300/?image=523')",
         "url('https://picsum.photos/200/300/?image=524')" */
      ],
      // selectedImage: "url('https://picsum.photos/200/300/?image=523')"
      selectedImage: "url('/images/backgroundImages/background-img1.jpg')"

    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => {
        return { selectedImage: prevState.selectedImage === this.state.images[0] ? this.state.images[1] : this.state.images[0] };

      });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <React.Fragment>
        <div className="search-bar" style={{ backgroundImage: this.state.selectedImage }}>
          <input className="form-control search-input" type="text" placeholder="Sök efter recept här..." aria-label="Sök efter recept här..." />
        </div>
        <div>
          <HomePageRecipeHeadline />
        </div>
        <FoodCardContainer />
        <div>
          <RecipeImageLoader />
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;