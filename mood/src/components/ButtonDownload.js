import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class ButtonDownload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false,
        });
    }

    render() {
        return (
            <section>
                <div className="mood_button-download">
                    <button className="button_download" onClick={() => this.openModal()}>Download my avatar</button>
                </div>
                <Modal 
                    visible={this.state.visible}
                    width="500"
                    height="200"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div className="modal_content">
                        <span className="modal_close" onClick={() => this.closeModal()}>X</span>
                        <h1>Download my avatar</h1>
                        <div className="avatar_download">
                            <p>My URL avatar : <span className="url">www.myurlavatar.fr</span></p>
                            <p>Export my avatar <span className="svg">SVG</span> or <span className="png">PNG</span>.</p>
                        </div>
                    </div>
                </Modal>
            </section>
        );
    }
};