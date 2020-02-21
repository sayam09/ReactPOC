import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProjectDetails = props => {
  const id = props.match.params.id;
  console.log(props);
  return (
    <div className="container section project-details">
      <div className="card z-depth=0">
        <div className="card-content">
          <span className="card-title">Membersuite - {id}</span>
          <p>
            Membersuite provides association management software (AMS) and
            business solutions for association and non-profit organisations.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted By Sayam</div>
          <div>2nd September, 2 a.m.</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  // const id = ownProps.match.params.id;
  // const projects = state.firestore.data.projects;
  // const project = projects ? projects[id] : null;
  // return {
  //   project: project
  // };
};

export default /*compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])*/ ProjectDetails;
