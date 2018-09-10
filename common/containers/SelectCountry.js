import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as NewsActions from '../actions'

const SelectCountry = ({ fetchNews_US, fetchNews_UK, fetchNews_AU, fetchNews_FR, fetchNews_JP, fetchNews_CN }) => (
    <div>
         <div className="row">
           <div className="col bg-purple text-white"> 
               <ul className="nav nav-tabs justify-content-center">
                 <li className="nav-item" id="us">
                   <div className="nav-link ${activateUS}" onClick={fetchNews_US}>US</div> 
                 </li>
                 <li className="nav-item" id="uk">
                   <div className="nav-link  ${activateUK}" onClick={fetchNews_UK}>UK</div>
                 </li>
                 <li className="nav-item" id="au">
                   <div className="nav-link ${activateAU}" onClick={fetchNews_AU}>Australia</div>
                 </li>
                 <li className="nav-item" id="fr">
                   <div className="nav-link ${activateFR}" onClick={fetchNews_FR}>France</div>
                 </li>
                 <li className="nav-item" id="jp">
                   <div className="nav-link ${activateJP}" onClick={fetchNews_JP}>Japan</div>
                 </li>
                 <li className="nav-item" id="cn">
                   <div className="nav-link  ${activateCN}" onClick={fetchNews_CN}>China</div>
                 </li>
               </ul>         
           </div>
       </div>
    </div>
);

SelectCountry.propTypes = {
  fetchNews_US: PropTypes.func.isRequired,
  fetchNews_UK: PropTypes.func.isRequired,
  fetchNews_AU: PropTypes.func.isRequired,
  fetchNews_FR: PropTypes.func.isRequired,
  fetchNews_JP: PropTypes.func.isRequired,
  fetchNews_CN: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  news: state.news
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(NewsActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectCountry)