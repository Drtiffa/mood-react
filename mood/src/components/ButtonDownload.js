import React, { Component } from 'react';
// j'importe une librairie de popin 
import Modal from 'react-awesome-modal';

export default class ButtonDownload extends Component {
    constructor(props) {
        super(props);
        // popin fermé de base
        this.state = {
            visible : false
        }
    }

    // ouvre ma popin au click
    openModal() {
        this.setState({
            visible : true
        });

        // je crée mon image
        var img = document.getElementById("canvas").toDataURL("image/png");
        // j'ajoute mon image a mon href
        var download_myAvatar = document.getElementById("download_myAvatar");
        download_myAvatar.href=img;

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
                            <p>My URL avatar : <span className="url">www.myurlavatar.fr</span></p>
                            <p>Export my avatar <a href="" download="my_avatar.png" id="download_myAvatar"><span className="png">PNG</span></a>.</p>
                        </div>
                    </div>
                </Modal>
            </section>
        );
    }
};