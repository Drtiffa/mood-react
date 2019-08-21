import React, { Component } from 'react';
// import a library popup
import Modal from 'react-awesome-modal';

class ButtonDownload extends Component {
    constructor(props) {
        super(props);
        // popin initially closed
        this.state = {
            visible : false,
            img: null,
            imgUId: null
        }
    }

    // open popup on click
    openModal() {
        const actualImage = document.getElementById("canvas").toDataURL("image/png");
        this.setState({
            visible : true,
            // create image
            img : actualImage
        });
        var body = JSON.stringify({ actualImage })
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        fetch('https://mood-avatar.herokuapp.com/avatar', {
            method: 'POST',
            headers,
            body
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                imgUId : data.imgUId
            });
        })
        .catch(err => console.warn(err))
    }

    // close popup on click
    closeModal() {
        this.setState({
            visible : false,
        });   
    }

    render() {
        return (
            <section className="section_button-download">
                {/* button for open popup */}
                <div className="mood_button-download">
                    <button className="button_download" onClick={() => this.openModal()}>Download my avatar</button>
                </div>
                {/* characteristic of my popup (basic state, size, opening effect, popup closing at click outside the popup) */}
                <Modal 
                    visible={this.state.visible}
                    width="500"
                    height="200"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    {/* popup */}
                    <div className="modal_content">
                        <span className="modal_close" onClick={() => this.closeModal()}>X</span>
                        <h1>Download my avatar</h1>
                        <div className="avatar_download">
                            <p>My URL avatar : <a className="url" href={`https://mood-avatar.herokuapp.com/avatar/${this.state.imgUId}/image`} target="_blank" rel="noopener noreferrer">https://mood-avatar.herokuapp.com/avatar/{this.state.imgUId}/image</a></p>
                            <p>Export my avatar <a href={this.state.img} download="my_avatar.png"><span className="png">PNG</span></a>.</p>
                        </div>
                    </div>
                </Modal>
            </section>
        );
    }
};

export default ButtonDownload