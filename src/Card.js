import React from "react";
import "./App.css";
export default function Card(props) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {props.Free}
          </h5>
          <h6 className="card-price text-center">
            {props.cost}
            <span className="period">{props.month}</span>
          </h6>
          <hr></hr>
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className={props.check}></i>
              </span>
              {props.user}
            </li>
            <li>
              <span className="fa-li">
                <i className={props.check}></i>
              </span>
              {props.storage}
            </li>
            <li>
              <span className="fa-li">
                <i className={props.check}></i>
              </span>
              Unlimited Public Projects
            </li>
            <li>
              <span className="fa-li">
                <i className={props.check}></i>
              </span>
              Community Access
            </li>
            <li className={props.muted1}>
              <span className="fa-li">
                <i className={props.times}></i>
              </span>
              Unlimited Private Projects
            </li>
            <li className={props.muted1}>
              <span className="fa-li">
                <i className={props.times}></i>
              </span>
              Dedicated Phone Support
            </li>
            <li className={props.muted1}>
              <span className="fa-li">
                <i className={props.times}></i>
              </span>
              Free Subdomain
            </li>
            <li className={props.muted2}>
              <span className="fa-li">
                <i className={props.times1}></i>
              </span>
              Monthly Status Reports
            </li>
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
