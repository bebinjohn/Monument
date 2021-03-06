import React ,{useEffect}from 'react'
import {useHistory} from 'react-router'
import './dashboard.css'
export default function Navbar() {

    const history=useHistory()
    
    useEffect(()=>{
		const showNavbar = (toggleId, navId, bodyId, headerId) => {
			const toggle = document.getElementById(toggleId),
				nav = document.getElementById(navId),
				bodypd = document.getElementById(bodyId),
				headerpd = document.getElementById(headerId);
	
			// Validate that all variables exist
			if (toggle && nav && bodypd && headerpd) {
				toggle.addEventListener("click", () => {
					// show navbar
					nav.classList.toggle("show");
					// change icon
					toggle.classList.toggle("bx-x");
					// add padding to body
					bodypd.classList.toggle("body-pd");
					// add padding to header
					headerpd.classList.toggle("body-pd");
				});
			}
		};
	
		showNavbar("header-toggle", "nav-bar", "body-pd", "header");
	
		/*===== LINK ACTIVE =====*/
		const linkColor = document.querySelectorAll(".nav_link");
	
		function colorLink() {
			if (linkColor) {
				linkColor.forEach((l) => l.classList.remove("active"));
				this.classList.add("active");
			}
		}
		linkColor.forEach((l) => l.addEventListener("click", colorLink));
	
	},[])

  return (
    <div>	
        <header className="header" id="header">
    <div className="header_toggle">
        {" "}
        <i className="bx bx-menu" id="header-toggle"></i>{" "}
    </div>
    <div className="header_img">
        <img src={"https://i.imgur.com/hczKIze.jpg"} />
    </div>
</header>
<div className="l-navbar" id="nav-bar">
    <nav className="nav">
        <div>
            {" "}
            <a href={"#"} className="nav_logo">
                {" "}
                <i className="bx bx-layer nav_logo-icon"></i>{" "}
                <span className="nav_logo-name">Admin Page</span>{" "}
            </a>
            <div className="nav_list">
                {" "}
                <a href={"#"} className="nav_link active">
                    {" "}
                    <i className="bx bx-grid-alt nav_icon"></i>{" "}
                    <span className="nav_name">Dashboard</span>{" "}
                </a>{" "}
                <div onClick={()=>history.push('/admin/Form')} className="nav_link">
                    {" "}
                    <i className="bx bx-user nav_icon"></i>{" "}
                    <span className="nav_name">Add Places</span>{" "}
                </div>{" "}
                <a href={"#"} className="nav_link">
                    {" "}
                    <i className="bx bx-message-square-detail nav_icon"></i>{" "}
                    <span className="nav_name">Manage Places</span>{" "}
                </a>{" "}
                <a href={"#"} className="nav_link">
                    {" "}
                    <i className="bx bx-bookmark nav_icon"></i>{" "}
                    <span className="nav_name">Prediction</span>{" "}
                </a>{" "}
                <a href={"#"} className="nav_link">
                    {" "}
                    <i className="bx bx-folder nav_icon"></i>{" "}
                    <span className="nav_name">Admin Details</span>{" "}
                </a>{" "}
                <a href={"#"} className="nav_link">
                    {" "}
                    <i className="bx bx-bar-chart-alt-2 nav_icon"></i>{" "}
                    <span className="nav_name">Stats</span>{" "}
                </a>{" "}
            </div>
        </div>{" "}
        <a href={"#"} className="nav_link">
            {" "}
            <i className="bx bx-log-out nav_icon"></i>{" "}
            <span className="nav_name">SignOut</span>{" "}
        </a>
    </nav>
</div></div>
  )
}
