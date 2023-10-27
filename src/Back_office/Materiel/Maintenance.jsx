import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { useState,useEffect } from "react";
const Maintenance = (props)=>{
    const [maintenance,setMaintenance] = useState([])
    const [idMaintenance,setIdMaintenance] = useState("")
    const [debutMaintenance,setDebutMaintenance] = useState("")
    const [finMaintenance,setFinMaintenance] = useState("")
    const [coutMaintenance,setCoutMaintenance] = useState("")
    const ChangeDebut=(event)=>{
        const InformationC = event.currentTarget.value;
        console.log(InformationC)
        setDebutMaintenance(InformationC)
       
      }
      const ChangeFin=(event)=>{
        const InformationC = event.currentTarget.value;
        console.log(InformationC)
        setFinMaintenance(InformationC)
       
      }
      const ChangeCout=(event)=>{
        const InformationC = event.currentTarget.value;
        console.log(InformationC)
        setCoutMaintenance(InformationC)
       
      }
      useEffect(()=>{
        axios.get("http://localhost:300/maintenance").then(res => {
        const element = res.data;
        setMaintenance(element );
        console.log(element)
      }).catch(error=>console.error(error))
       },[])
       const ajouter =(event)=>{
        event.preventDefault();
        const data = {
            debutMaintenance: debutMaintenance,
            finMaintenance :finMaintenance,
            coutMaintenance : coutMaintenance,
    

        }
        const dataF = [...Maintenance]
        dataF.push(data)
        setMaintenance(dataF)
        axios.post("http://localhost:300/maintenance",dataF).then(res=>
        {  
            
            console.log(res.data)
        })
        
      }
      const ajouter1 = (event)=>{
        const data = {
            idMaintenance:idMaintenance,
            debutMaintenance: debutMaintenance,
            finMaintenance :finMaintenance,
            coutMaintenance : coutMaintenance,
    

        }
        const dataF = [...maintenance]
        dataF.push(data)
        setMaintenance(dataF)
        axios.put("http://localhost:300/maintenance",dataF).then(res=>
        {  
            
            console.log(res.data)
        })
      }
      const Modif = (event,id,debut,fin,cout)=>{
        event.preventDefault();
        const data={
            idMaintenance:idMaintenance,
            debutMaintenance: debutMaintenance,
            finMaintenance :finMaintenance,
            coutMaintenance : coutMaintenance,
        }
        setIdMaintenance(id)
        setDebutMaintenance(debut)
        setFinMaintenance(fin)
        setCoutMaintenance(cout)
    
      }
      const sup=(id)=>{
          
        axios.delete(`http://localhost:300/maintenance/${id}`).then(res => {
            const element = res.data;
            console.log(id)
          }).catch(error=>console.error(error))
         console.log(`http://localhost:300/maintenance/${id}`);
     
      }

    return(<div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
    data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">

    <header className="topbar" data-navbarbg="skin6">
        <nav className="navbar top-navbar navbar-expand-md navbar-light">
            <div className="navbar-header" data-logobg="skin6">
     
                <a className="navbar-brand" href="index.html">
                
                <span className="logo-text">
                 
                 <img style={{width : "40px",height:"40px"}} src="../assets/images/ENI.jpg" alt="homepage" className="dark-logo" />
                
           
                 
             </span>
             <strong style={{width : "70px",height:"70px",fontSize:"30px",fontFamily:"etalic"}}>ENI</strong>
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
    <button class="rounded-pill btn btn-success" >voir +</button>
    </a>
    <ul className="dropdown-menu dropdown-menu-end user-dd animated" aria-labelledby="navbarDropdown">
        <Link className="dropdown-item" to="/Materiel"><i
        className="mdi mdi-account-network"></i>
            Materiel</Link>
        <Link className="dropdown-item" to="/Maintenance"><i class="m-r-10 mdi mdi-home"></i>
        Maintenance </Link>
        <Link className="dropdown-item" to="/Reparation"><i className="ti-email m-r-5 m-l-5"></i>
        Reparation</Link>
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
                            href="" aria-expanded="false"><i className="mdi mdi-view-dashboard"></i><span
                                className="hide-menu">Accueil</span></a></li>
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
   
    <div className="page-wrapper">

     
    <button class="rounded-pill btn btn-primary" data-bs-toggle="modal" data-bs-target="#largeModal">+ Ajouter une Maintenance</button>
    <div class="modal fade" id="largeModal" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel3">Ajouter Une maintenance</h5>
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
                                  <label for="nameLarge" class="form-label"  >Debut</label>
                                  <input type="date" class="form-control" id="emailSmall"   placeholder="date du debut" onChange={ChangeDebut} /> 
                                </div>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameLarge" class="form-label"  >fin</label>
                                  <input type="date" class="form-control" id="emailSmall"    placeholder="Type du Categorie" onChange={ChangeFin} />                            
                                </div>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameLarge" class="form-label"  >Cout</label>
                                  <input type="text" class="form-control" id="emailSmall"    placeholder="Cout du Maintenance" onChange={ChangeCout} />                            
                                </div>
                              </div>
                             
                            </div>
                            <div class="modal-footer">
                            
                              <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={ajouter} >Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="modal fade" id="largeModal10" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel3">Modifier Une maintenance</h5>
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
                                  <label for="nameLarge" class="form-label"  >Debut</label>
                                  <input type="text" class="form-control" id="emailSmall"   placeholder="identifiant du date" value={idMaintenance} /> 
                                </div>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameLarge" class="form-label"  >Debut</label>
                                  <input type="date" class="form-control" id="emailSmall"   placeholder="date du debut" value={debutMaintenance} onChange={ChangeDebut} /> 
                                </div>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameLarge" class="form-label"  >fin</label>
                                  <input type="date" class="form-control" id="emailSmall"    placeholder="Type du Categorie" value={finMaintenance} onChange={ChangeFin} />                            
                                </div>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameLarge" class="form-label"  >Cout</label>
                                  <input type="text" class="form-control" id="emailSmall"    placeholder="Cout du Maintenance" value={coutMaintenance} onChange={ChangeCout} />                            
                                </div>
                              </div>
                             
                            </div>
                            <div class="modal-footer">
                            
                              <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={ajouter1} >Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
        <div className="container-fluid">

            <div className="row">
                
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Listes des Maintenances</h4>
                            
                        </div>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Debut</th>
                                        <th scope="col">Fin</th>
                                        <th scope="col">Cout</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {maintenance.map(function(data){
                                          return(<tr>
                                            <td>{data.idMaintenance}</td>
                                            <td>{data.debutMaintenance}</td>
                                            <td>{data.finMaintenance}</td>
                                            <td>{data.coutMaintenance}</td>
                                          
                                              <td><button class="btn btn-danger"  onClick={()=>sup(data.idMaintenance)} ><i class="m-r-10 mdi mdi-delete"></i></button></td>
                                              <td><button  onClick={(e)=>Modif(e,data.idMaintenance,data.debutMaintenance,data.finMaintenance,data.coutMaintenance)}    type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#largeModal10" ><i class="m-r-10 mdi mdi-account-edit"></i></button></td>
                                            </tr>)
                                      })}
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

export default Maintenance;