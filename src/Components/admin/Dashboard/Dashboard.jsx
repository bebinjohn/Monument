import React ,{useEffect}from "react";
import Navbar from './Navbar'
import "./dashboard.css";

function Dashboard() {


	
    // if(!Selector.AdminAuth)history.push('/admin/Login');

	return (
		<div id="body-pd">
			<Navbar/>
			<div className="height-100 bg-light">
				<h4>DashBoard</h4>
			</div>
			<div className="row">
				<div className="col-sm-6">
					<div className="card text-center">
						<div className="card-body">
							<h1 className="card-title">36</h1>
							<p className="card-text">Newly added places</p>
						</div>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="card text-center">
						<div className="card-body">
							<h1 className="card-title">23</h1>
							<p className="card-text">Currently Edited Places</p>
						</div>
					</div>
				</div>
			</div>
				<div className="row">
					<div className="col-sm-6">
						<div className="card text-center">
							<div className="card-body">
								<h1 className="card-title">96</h1>
								<p className="card-text">users visited website</p>
							</div>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="card text-center">
							<div className="card-body">
								<h1 className="card-title">12</h1>
								<p className="card-text">Deleted Places</p>
							</div>
						</div>
					</div>
				</div>
			</div>
	);
}

export default Dashboard;
