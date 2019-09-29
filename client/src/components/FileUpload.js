import React, { Component, Fragment } from 'react'
import REST from '../REST';
import { Container, Row } from 'react-bootstrap';
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
						<Row className="uploadCameraIcon">
							<img className="cameraIcon" src={Camera} height="100" width="100" alt="Camera Logo" />
						</Row>
						<form>
							<Row>
								<div className="custom-file mb-4">
									<input type="file" className="custom-file-input" aria-label="ladda upp en bild här" id="customFile" onChange=
										{this.onChangeHandler} />
									<label className="custom-file-label" htmlFor="customFile"></label>
								</div>
							</Row>
							<Row>
								<button type="button" className="btn btn-success btn-block" aria-label="knappen för att ladda upp din bild" onClick={this.onClickHandler}>ladda upp</button>
							</Row>
						</form>
					</Container>
				</div>
			</Fragment>
		)
	}
}

export default FileUpload;
