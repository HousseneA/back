import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { useState,useEffect } from "react";
const Reparation = (props)=>{
    const [reparation,setReparation] = useState([])
    const [idReparation,setIdReparation] = useState("")
    const [debutReparation,setDebutReparation] = useState("")
    const [finReparation,setFinReparation] = useState("")
    const [coutReparation,setCoutReparation] = useState("")
    const ChangeDebut=(event)=>{
        const InformationC = event.currentTarget.value;
        console.log(InformationC)
        setDebutReparation(InformationC)
       
      }
      const ChangeFin=(event)=>{
        const InformationC = event.currentTarget.value;
        console.log(InformationC)
        setFinReparation(InformationC)
       
      }
      const ChangeCout=(event)=>{
        const InformationC = event.currentTarget.value;
        console.log(InformationC)
        setFinReparation(InformationC)
       
      }
      useEffect(()=>{
        axios.get("https://localhost:7244/api/Produits").then(res => {
        const element = res.data;
        setReparation(element );
        console.log(element)
      }).catch(error=>console.error(error))
       },[])

       const ajouter =(event)=>{
        event.preventDefault();
        const data = {
            debutReparation: debutReparation,
            finReparation :finReparation,
            coutReparation : coutReparation,
    

        }
        const dataF = [...Reparation]
        dataF.push(data)
        setReparation(dataF)
        axios.post("https://localhost:7244/api/Entrers",dataF).then(res=>
        {  
            
            console.log(res.data)
        })
        
      }
      const ajouter1 = (event)=>{
        const data = {
            idReparation : idReparation,
            debutReparation: debutReparation,
            finReparation :finReparation,
            coutReparation : coutReparation,
    

        }
        const dataF = [...reparation]
        dataF.push(data)
        setReparation(dataF)
        axios.put("https://localhost:7244/api/Entrers",dataF).then(res=>
        {  
            
            console.log(res.data)
        })
      }
      const Modif = (event,id,debut,fin,cout)=>{
        event.preventDefault();
        const data={
            idReparation : idReparation,
            debutReparation: debutReparation,
            finReparation :finReparation,
            coutReparation : coutReparation,
        }
        setIdReparation(id)
        setDebutReparation(debut)
        setFinReparation(fin)
        setCoutReparation(cout)
    
      }
      const sup=(id)=>{
          
        axios.delete(`https://localhost:7244/api/Produits/${id}`).then(res => {
            const element = res.data;
            console.log(id)
          }).catch(error=>console.error(error))
         console.log(`https://localhost:7244/api/Produits/${id}`);
     
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

     
    <button class="rounded-pill btn btn-primary" data-bs-toggle="modal" data-bs-target="#largeModal">+ Ajout du reparation </button>
    <div class="modal fade" id="largeModal" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel3">Ajouter le reparation</h5>
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
                                  <input type="date" class="form-control" id="emailSmall"   placeholder="Debut du reparation" onChange={ChangeDebut} /> 
                                </div>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameLarge" class="form-label"  >Fin</label>
                                  <input type="date" class="form-control" id="emailSmall"    placeholder="Fin du repartion" onChange={ChangeFin} />                            
                                </div>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameLarge" class="form-label"  >Cout</label>
                                  <input type="text" class="form-control" id="emailSmall"    placeholder="cout du repartion" onChange={ChangeCout}/> 
                                </div>
                              </div>
                                    
                                 
                            </div>
                            <div class="modal-footer">
                            
                              <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={ajouter} >Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="modal fade" id="largeModal" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel3">Modifier le reparation</h5>
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
                                  <label for="nameLarge" class="form-label"  >Identifiant</label>
                                  <input type="date" class="form-control" id="emailSmall"   placeholder="identifiant du reparation" value={idReparation} /> 
                                </div>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameLarge" class="form-label"  >Debut</label>
                                  <input type="date" class="form-control" id="emailSmall"   placeholder="Debut du reparation" value={debutReparation} onChange={ChangeDebut} /> 
                                </div>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameLarge" class="form-label"  >Fin</label>
                                  <input type="date" class="form-control" id="emailSmall"    placeholder="Fin du repartion" value={finReparation} onChange={ChangeFin} />                            
                                </div>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameLarge" class="form-label"  >Cout</label>
                                  <input type="text" class="form-control" id="emailSmall"    placeholder="cout du repartion" value={finReparation} onChange={ChangeCout}/> 
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
                            <h4 className="card-title">Listes des repartions</h4>
                            
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
                                {reparation.map(function(data){
                                          return(<tr>
                                            <td>{data.idReparation}</td>
                                            <td>{data.debutReparation}</td>
                                            <td>{data.finReparation}</td>
                                            <td>{data.coutReparation}</td>
                                          
                                              <td><button class="btn btn-danger"  onClick={()=>sup(data.idReparation)} ><i class="m-r-10 mdi mdi-delete"></i></button></td>
                                              <td><button  onClick={(e)=>Modif(e,data.idReparation,data.debutReparation,data.finReparation,data.coutReparation)}    type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#largeModal10" ><i class="bi bi-pen"></i></button></td>
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

export default Reparation;