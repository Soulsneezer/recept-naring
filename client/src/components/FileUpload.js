import React, { Component, Fragment, useState } from 'react'
import REST from '../REST';


class Upload extends REST {

    constructor(props) {
        super(props);
    }
}

const FileUpload = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Välj en bild');
    const [uploadedFile, setUploadedFile] = useState({});

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);



        // try {
        //     const res = await axios.post('/upload', formData, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data'
        //         }
        //     });

        // const { fileName, filePath } = res.data;
        // setUploadedFile({ fileName, filePath });


        // } catch (err) {
        //     if (err.response.status === 500) {
        //         console.log('Nope! Comp says Nooo');
        //     } else {
        //         console.log(err.response.data.msg);
        //         console.log('bild som skulle laddas upp');
        //     }
        // }

        let addUploads = new Upload({
            url: "hellothere"
        });

        let uploads = await addUploads.save();

        console.log(uploads)
    };
    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <div className="custom-file mb-4">
                    <input type="file" className="custom-file-input" id="customFile" onChange=
                        {onChange} />
                    <label className="custom-file-label" htmlFor="customFile">
                        {filename}
                    </label>
                </div>
                <input type="submit" value="Ladda upp" className="btn btn-primary btn-block mt-4" />
            </form>
        </Fragment>
    )
}

export default FileUpload