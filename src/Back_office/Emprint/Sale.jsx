import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { useState,useEffect } from "react";

const Sale=()=>{
const [sale,setSale] = useState([])
const [idSalle,setIdSale] = useState("")
const [libelleSalle,setLiberal] = useState("")
const ChangeLiberal=(event)=>{
    const InformationC = event.currentTarget.value;
    console.log(InformationC)
    setLiberal(InformationC)
   
  }
  const afficher = (async)=>{
    axios.get("http://localhost:300/salle").then(res => {
    const element = res.data;
    setSale(element );
    console.log(element)
  }).catch(error=>console.error(error))
  
  }
  useEffect(()=>{
    afficher()
   },[])
   const ajouter =(event)=>{
    event.preventDefault();
    const data = {
      libelleSalle:libelleSalle
    }
    console.log(data)
    
    axios.post("http://localhost:300/salle",data).then(res=>
    {  
      
        console.log(res.data)
        const dataF = [...sale]
    dataF.push(data)
    setIdSale(dataF)
    afficher()
    })
    
  }
  const ajouter1 = (event)=>{
    const data = {
      idSalle:idSalle,
      libelleSalle:libelleSalle


    }
    
    axios.put(`http://localhost:300/salle/${data.idSalle}`,data).then(res=>
    {  
        
        console.log(res.data)
        afficher()
    })
  }
  const Modif = (event,id,liberal)=>{
    event.preventDefault();
    const data={
      idSalle:idSalle,
      libelleSalle:libelleSalle
    }
    setIdSale(id)
    setLiberal(liberal)

  }
  const sup=(id)=>{
    if(id===undefined){
      const newlist = sale.filter(li=>li.idSalle !==id)
      setSale(newlist)
    }
    else{
      const newlist = sale.filter(li=>li.idSalle !==id)
      setSale(newlist)
      axios.delete(`http://localhost:300/salle/${id}`).then(res => {
        const element = res.data;
        console.log(id)
      }).catch(error=>console.error(error))
     console.log(`http://localhost:300/salle/${id}`);
    }
    
    
 
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
                            <Link className="dropdown-item" to="/Emprinteur"><i
                            className="mdi mdi-account-network"></i>
                                Emprinteur</Link>
                            <Link className="dropdown-item" to="/Sale"><i class="m-r-10 mdi mdi-home"></i>
                                Sale </Link>
                            <Link className="dropdown-item" to="/Emprint"><i className="ti-email m-r-5 m-l-5"></i>
                                Emprint</Link>
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

     
    <button class="rounded-pill btn btn-primary" data-bs-toggle="modal" data-bs-target="#largeModal">+ Ajouter une Sale</button>
    <div class="modal fade" id="largeModal" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel3">Ajout du sale</h5>
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
                                  <label for="nameLarge" class="form-label"  >libelle</label>
                                  <input type="text" class="form-control" id="emailSmall"   placeholder="Nom de l'libelle" onChange={ChangeLiberal} /> 
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
                              <h5 class="modal-title" id="exampleModalLabel3">Modifier la sale</h5>
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
                                  <label for="nameLarge" class="form-label"  >Identifient</label>
                                  <input type="text" class="form-control" id="emailSmall"   placeholder=" identidiant du sale" value={idSalle}  /> 
                                </div>
                              </div>

                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameLarge" class="form-label"  >liberal</label>
                                  <input type="text" class="form-control" id="emailSmall"   placeholder=" identidiant du sale" value={libelleSalle}  onChange={ChangeLiberal} /> 
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
                            <h4 className="card-title">Listes des Sale</h4>
                            
                        </div>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Liberal</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                {sale.map(function(data){
                                          return(<tr>
                                            <td>{data.idSalle}</td>
                                            <td>{data.libelleSalle}</td>
                                 
                                              <td><button class="btn btn-danger"  onClick={()=>sup(data.idSalle)} ><i class="m-r-10 mdi mdi-delete"></i></button></td>
                                              <td><button  onClick={(e)=>Modif(e,data.idSalle,data.libelleSalle)}    type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#largeModal10" ><i class="m-r-10 mdi mdi-account-edit"></i></button></td>
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
export default Sale;