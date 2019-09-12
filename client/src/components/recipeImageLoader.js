import React, { Component } from 'react';
import axios from 'axios';




class RecipeImageLoader extends Component {
    state = {
        selectedFile: null
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        });
    }

    fileUploadHandler = () => {
        const formData = FormData();
        formData.append('image', this.state.selectedFile, this.selectedFile.name);
        axios.post('http', formData)
            .then(res => {
                console.log(res);
            });
    }

    render() {
        return (
            <div className="imageLoader">
                <input
                    style={{ display: 'none' }}
                    type="file" onChange={this.fileSelectedHandler}
                    ref={fileInput => this.fileInput = fileInput} />
                <button onClick={() => this.fileInput.click(console.log('vald'))}>Välj en bild</button>
                <button onClick={this.fileUploadHandler}>Ladda Upp</button>
            </div>
        );
    }
}

export default RecipeImageLoader;
