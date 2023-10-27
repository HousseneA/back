import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { useState,useEffect } from "react";
const Emprint=()=>{
    const [Emprunt,setEmprint] = useState([]);
    const [Emprinteur,setEmprinteur] = useState([]);
    const [materiel,setMateriel] = useState([])
    const [sale,setSale] = useState([])
    const [idSalle,setIdSale] = useState("")
    const [idMateriel,setIdMateriel] = useState("")
    const [idEmprunteur,setIdEmprinteur] = useState("");
    const [debutEmprunt,setDebutEmprint] = useState("");
    const [finEmprunt,setFinEmprint] = useState("");
    const [retourReelEmprunt,setRetourEmprint] = useState("");

    const ChangeSale=(event)=>{
      const InformationC = event.currentTarget.value;
      console.log(InformationC)
      setIdSale(InformationC)
     
    }
    const ChangeEmprinteur=(event)=>{
      const InformationC = event.currentTarget.value;
      console.log(InformationC)
      setIdEmprinteur(InformationC)
     
    }
    const ChangeMateriel=(event)=>{
      const InformationC = event.currentTarget.value;
      console.log(InformationC)
      setIdMateriel(InformationC)
     
    }

    const ChangeDebut=(event)=>{
        const InformationC = event.currentTarget.value;
        console.log(InformationC)
        setDebutEmprint(InformationC)
       
      }
      const ChangeFin=(event)=>{
        const InformationC = event.currentTarget.value;
        console.log(InformationC)
        setFinEmprint(InformationC)
       
      }
      const ChangeRetour=(event)=>{
        const InformationC = event.currentTarget.value;
        console.log(InformationC)
        setRetourEmprint(InformationC)
       
      }
      const affiche = async =>{
        axios.get("http://localhost:300/emprunt").then(res => {
        const element = res.data;
        setEmprint(element );
        console.log(element)
      }).catch(error=>console.error(error))
      axios.get("http://localhost:300/emprunteur").then(res => {
        const element = res.data;
        setEmprinteur(element );
        console.log(element)
      }).catch(error=>console.error(error))
      axios.get("http://localhost:300/salle").then(res => {
    const element = res.data;
    setSale(element );
    console.log(element)
  }).catch(error=>console.error(error))
  axios.get("http://localhost:300/materiel").then(res => {
        const element = res.data;
        setMateriel(element );
        console.log(element)
      }).catch(error=>console.error(error))
      }
      useEffect(()=>{
       affiche()
       },[])
       const ajouter =(event)=>{
        event.preventDefault();
        const data = {
          idSalle:idSalle,
          idMateriel:idMateriel,
          idEmprunteur:idEmprunteur,
          debutEmprunt: debutEmprunt,
          finEmprunt :finEmprunt,
          retourReelEmprunt : retourReelEmprunt,
    

        }
        console.log(data)
        axios.post("http://localhost:300/emprunt",data).then(res=>
        {  
          const dataF = [...Emprunt]
          dataF.push(data)
          setEmprint(dataF)
            console.log(res.data)
            affiche()
        })
        
      }
      const ajouter1 = (event)=>{
        const data = {
      
          idSalle:idSalle,
          idMateriel:idMateriel,
          idEmprunteur:idEmprunteur,
          debutEmprunt: debutEmprunt,
          finEmprunt :finEmprunt,
          retourReelEmprunt : retourReelEmprunt,
    

        }
       
        axios.put(`http://localhost:300/emprunt/${idSalle}`,data).then(res=>
        {  
            
            console.log(res.data)
            affiche()
        })
      }
      const Modif = (event,idSalle,idMateriel,idEmprinteur,debut,fin,retour)=>{
        event.preventDefault();
        const data={
      
          idSalle:idSalle,
          idMateriel:idMateriel,
          idEmprunteur:idEmprunteur,
          debutEmprunt: debutEmprunt,
          finEmprunt :finEmprunt,
          retourReelEmprunt : retourReelEmprunt,
        }
        setIdEmprinteur(idEmprinteur)
        setIdSale(idSalle)
        setIdMateriel(idMateriel)
        setDebutEmprint(debut)
        setFinEmprint(fin)
        setRetourEmprint(retour)
    
      }
      const sup=(id)=>{
          
        axios.delete(`http://localhost:300/emprunts/${id}`).then(res => {
            const element = res.data;
            console.log(id)
          }).catch(error=>console.error(error))
         console.log(`http://localhost:300/emprunt/${id}`);
     
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
                                className="hide-menu">Accueil</span></a></li><li className="sidebar-item"> <a className="sidebar-link waves-effect waves-dark sidebar-link"
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


    <div className="page-wrapper">

     
    <button class="rounded-pill btn btn-primary" data-bs-toggle="modal" data-bs-target="#largeModal">+ Ajouter le enprint</button>
    <div class="modal fade" id="largeModal" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel3">Ajouter le enprint</h5>
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
                                  <label for="emailLarge" class="form-label">Identifiant Salle</label>
                                  <select  class="select2 form-select" onChange={ChangeSale}  >
                                        <option>Option 1</option>
                                        {sale.map(function(data){
                                          return(
                                         <option >{data.idSalle}</option>
                                                               )})}
                                     </select>
                                </div>
                               
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <label for="emailLarge" class="form-label">Identifiant Materiel</label>
                                  <select  class="select2 form-select" onChange={ChangeMateriel}  >
                                        <option>Option 1</option>
                                        {materiel.map(function(data){
                                          return(
                                         <option >{data.idMateriel}</option>
                                                               )})}
                                     </select>
                                </div>
                               
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <label for="emailLarge" class="form-label">Identifiant Emprinteur</label>
                                  <select  class="select2 form-select" onChange={ChangeEmprinteur}  >
                                        <option>Option 1</option>
                                        {Emprinteur.map(function(data){
                                          return(
                                         <option >{data.idEmprunteur}</option>
                                                               )})}
                                     </select>
                                </div>
                               
                              </div>

                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameLarge" class="form-label"  >Debut</label>
                                  <input type="date" class="form-control" id="emailSmall"   placeholder="date du debut" onChange={ChangeDebut} /> 
                                </div>
                              </div>
                            
                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameLarge" class="form-label"  >Fin</label>
                                  <input type="date" class="form-control" id="emailSmall"   placeholder="date du fin" onChange={ChangeFin} /> 
                                </div>
                              </div>

                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameLarge" class="form-label"  >Retour</label>
                                  <input type="date" class="form-control" id="emailSmall"   placeholder="date du fin" onChange={ChangeRetour} /> 
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
                              <h5 class="modal-title" id="exampleModalLabel3">Modifier le enprint</h5>
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
                                  <input type="date" class="form-control" id="emailSmall"   placeholder="date du debut" value={debutEmprunt} onChange={ChangeDebut} /> 
                                </div>
                              </div>
                            
                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameLarge" class="form-label"  >Fin</label>
                                  <input type="date" class="form-control" id="emailSmall"   placeholder="date du fin" value={finEmprunt} onChange={ChangeFin} /> 
                                </div>
                              </div>

                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameLarge" class="form-label"  >Retour</label>
                                  <input type="date" class="form-control" id="emailSmall"   placeholder="date du fin" value={retourReelEmprunt} onChange={ChangeRetour} /> 
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
                            <h4 className="card-title">Listes des emprints</h4>
                            
                        </div>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">debut</th>
                                        <th scope="col">fin</th>
                                        <th scope="col">retour</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {Emprunt.map(function(data){
                                          return(<tr>
                                           
                                            <td>{data.debutEmprunt}</td>
                                            <td>{data.finEmprunt}</td>
                                            <td>{data.retourReelEmprunt}</td>
                                            
                                              <td><button class="btn btn-danger"  onClick={()=>sup(data.idEmprunt)} ><i class="m-r-10 mdi mdi-delete"></i></button></td>
                                              <td><button  onClick={(e)=>Modif(e,idSalle,idMateriel,data.idEmprunteur,data.debutEmprunt,data.finEmprunt,data.retourReelEmprunt)}    type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#largeModal10" ><i class="m-r-10 mdi mdi-account-edit"></i></button></td>
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
export default Emprint;