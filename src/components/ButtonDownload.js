import React, { Component } from 'react';
// j'importe une librairie de popin 
import Modal from 'react-awesome-modal';

class ButtonDownload extends Component {
    constructor(props) {
        super(props);
        // popin fermé de base
        this.state = {
            visible : false,
            img: null,
            imgUId: null
        }
    }

    // ouvre ma popin au click
    openModal() {
        const actualImage = document.getElementById("canvas").toDataURL("image/png");
        this.setState({
            visible : true,
            // je crée mon image
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

    // ferme ma popin au click
    closeModal() {
        this.setState({
            visible : false,
        });   
    }

    render() {
        return (
            <section className="section_button-download">
                {/* bouton qui permet d'ouvrir ma popin */}
                <div className="mood_button-download">
                    <button className="button_download" onClick={() => this.openModal()}>Download my avatar</button>
                </div>
                {/* caracteristique de ma popin (etat de base, taille, effet à l'ouverture, fermeture popin au click en dehors de la popin) */}
                <Modal 
                    visible={this.state.visible}
                    width="500"
                    height="200"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    {/* popin */}
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