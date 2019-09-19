import React, { Component, Fragment } from 'react'
import REST from '../REST';
import { Container } from 'react-bootstrap';
import Camera from '../images/camera.png';



class Upload extends REST { }

class FileUpload extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }
    }

    onChangeHandler = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        });
    }

    onClickHandler = async () => {
        const data = new FormData();
        data.append('file', this.state.selectedFile);

        let addUploads = new Upload({
            url: this.state.selectedFile.name
        });

        let uploads = await addUploads.save();
        console.log(uploads)
    };
    render() {
        return (
            <Fragment>
                <div className="innerContainerUploadPhoto" sm={8} md={8} lg={8}>
                    <Container style={{ width: 'auto' }}>
                        <img className="cameraIcon" src={Camera} height="100" width="100" alt="Camera Logo" />
                        <form>
                            <div className="custom-file mb-4">
                                <input type="file" className="custom-file-input" id="customFile" onChange=
                                    {this.onChangeHandler} />
                                <label className="custom-file-label" htmlFor="customFile"></label>
                            </div>
                            <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>ladda upp</button>
                        </form>
                    </Container>
                </div>
            </Fragment>
        )
    }
}

export default FileUpload;
