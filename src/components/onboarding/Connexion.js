import React, { Component } from 'react';
import './Connexion.css';
import './../../images/monogrammeTH.svg';

class Connexion extends Component {
    render() {
      return(
      <div className="connexion-backgroud">
        <div className="connexion-container">
            <div className="logo-top">logo</div>
                <form className="connexion-form">
                    <label className="connexion-label">email</label>
                    <input className="connexion-input" placeholder="mon@email.com" />
                    <label className="connexion-label">mot de passe</label>
                    <input className="connexion-input mdp" placeholder="**********" />
                    <p className="connexion-lien"><a href="#">Mot de passe perdu ?</a></p>
                    <button className="btn-connexion">se connecter</button>
                </form>
            </div>
      </div>
      )
    }
  }

export default Connexion;
