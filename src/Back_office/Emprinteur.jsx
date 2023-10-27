import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { useState,useEffect } from "react";
const Emprinteur=()=>{
    const [Emprinteur,setEmprinteur] = useState([]);
    const [idEmprinteur,setIdEmprinteur] = useState("");
    const [nomEmprinteur,setNomEmprinteur] = useState("");
    const [phoneEmprinteur,setPhoneEmprinteur] = useState("");
    const [emailEmprinteur,setEmailEmprinteur] = useState("");
    const [statusEmprinteur,setStatusEmprinteur] = useState("");
    
    const ChangeNom=(event)=>{
        const InformationC = event.currentTarget.value;
        console.log(InformationC)
        setNomEmprinteur(InformationC)
       
      }
      const ChangePhone=(event)=>{
        const InformationC = event.currentTarget.value;
        console.log(InformationC)
        setPhoneEmprinteur(InformationC)
       
      }

      const ChangeEmail=(event)=>{
        const InformationC = event.currentTarget.value;
        console.log(InformationC)
        setEmailEmprinteur(InformationC)
       
      }
      const ChangeStatus=(event)=>{
        const InformationC = event.currentTarget.value;
        console.log(InformationC)
        setStatusEmprinteur(InformationC)
       
      }
    return(<div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
    data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">

    <header className="topbar" data-navbarbg="skin6">
        <nav className="navbar top-navbar navbar-expand-md navbar-light">
            <div className="navbar-header" data-logobg="skin6">
     
                <a className="navbar-brand" href="index.html">
                
                    <b className="logo-icon">
                      
                        <img src="../assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
        
                        <img src="../assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                    </b>

                    <span className="logo-text">
                 
                        <img src="../assets/images/logo-text.png" alt="homepage" className="dark-logo" />
                  
                        <img src="../assets/images/logo-light-text.png" className="light-logo" alt="homepage" />
                    </span>
                </a>
          
                <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i
                        className="ti-menu ti-close"></i></a>
            </div>
       
            <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
           
                <ul className="navbar-nav float-start me-auto">
               
                    <li className="nav-item search-box"> <a className="nav-link waves-effect waves-dark"
                            href="javascript:void(0)"><i className="mdi mdi-magnify me-1"></i> <span className="font-16">Search</span></a>
                        <form className="app-search position-absolute">
                            <input type="text" className="form-control" placeholder="Search &amp; enter"/> <a
                                className="srh-btn"><i className="mdi mdi-window-close"></i></a>
                        </form>
                    </li>
                </ul>
  
                <ul className="navbar-nav float-end">

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="../assets/images/users/profile.png" alt="user" className="rounded-circle" width="31"/>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end user-dd animated" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="javascript:void(0)"><i className="ti-user m-r-5 m-l-5"></i>
                                My Profile</a>
                            <a className="dropdown-item" href="javascript:void(0)"><i className="ti-wallet m-r-5 m-l-5"></i>
                                My Balance</a>
                            <a className="dropdown-item" href="javascript:void(0)"><i className="ti-email m-r-5 m-l-5"></i>
                                Inbox</a>
                        </ul>
                    </li>
             
                </ul>
            </div>
        </nav>
    </header>

    <aside className="left-sidebar" data-sidebarbg="skin6">

        <div className="scroll-sidebar">
   
            <nav className="sidebar-nav">
            <ul id="sidebarnav">
                    <li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link"
                            href="index.html" aria-expanded="false"><i className="mdi mdi-view-dashboard"></i><span
                                className="hide-menu">Dashboard</span></a></li>
                    <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark sidebar-link"
                            to="/Utilisateur" aria-expanded="false"> <i className="mdi mdi-face"></i><span className="hide-menu">Utilisateur</span></Link></li>
                    <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark sidebar-link"
                            to="/Emprinteur" aria-expanded="false"> <i
                            className="mdi mdi-account-network"></i><span
                                className="hide-menu">Emprinteur</span></Link></li>

                    <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark sidebar-link"
                            to="/Materiel" aria-expanded="false"><i class="m-r-10 mdi mdi-hexagon-multiple"></i><span
                                className="hide-menu">Materiel pédagogique</span></Link></li>
                  
                  
                </ul>

            </nav>
  
        </div>

    </aside>

    <div class="row">
    <div class="d-md-flex">
                                    <div class="ms-auto">
                                        <div class="dl">
                                            <select class="form-select shadow-none">
                                                <option value="0" selected>Monthly</option>
                                                <option value="1"><Link className="sidebar-link waves-effect waves-dark sidebar-link"
                            to="/Sale" aria-expanded="false"> <i class="m-r-10 mdi mdi-home"></i><span
                                className="hide-menu">Salle</span></Link></option>
                                                <option value="2">Weekly</option>
                                                <option value="3">Yearly</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                </div>

    <div className="page-wrapper">

     
    <button class="rounded-pill btn btn-primary" data-bs-toggle="modal" data-bs-target="#largeModal">+ Ajouter del'emprinteur</button>
    <div class="modal fade" id="largeModal" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel3">Ajouter le Produit</h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                          

                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameLarge" class="form-label"  >Nom</label>
                                  <input type="text" class="form-control" id="emailSmall"   placeholder="Nom de l'emprinteur" /> 
                                </div>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameLarge" class="form-label"  >Phone</label>
                                  <input type="text" class="form-control" id="emailSmall"    placeholder="Phone de l'emprinteur" />                            
                                </div>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameLarge" class="form-label"  >Descrpition</label>
                                  <input type="text" class="form-control" id="emailSmall"    placeholder="Email de l'emprinteur" />                            
                                </div>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <label for="emailLarge" class="form-label">Status</label>
                                  <select  class="select2 form-select"   >
                                        <option>Option 1</option>
                                        
                                     </select>
                                </div>
                               
                              </div>
                            </div>
                            <div class="modal-footer">
                            
                              <button type="button" class="btn btn-primary" data-bs-dismiss="modal"  >Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
        <div className="container-fluid">

            <div className="row">
                
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Striped rows</h4>
                            
                        </div>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
            
            </div>
    
        </div>

     

    </div>

</div>)
}
export default Emprinteur;