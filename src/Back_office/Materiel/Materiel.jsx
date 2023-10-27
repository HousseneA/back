import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { useState,useEffect } from "react";
const Materiel = (props)=>{
    const [materiel,setMateriel] = useState([])
    const [idMateriel,setIdMateriel] = useState("")
    const [nomMateriel,setNomMateriel] = useState("")
    const [photoMateriel,setPhotoMateriel] = useState("")
    const [description,setDescriptionMateriel] = useState("")
    const [disponibilite,setDisponibiliteMateriel] = useState("")
    const [fileImage,setFileImage] = useState(null);
    const ChangeNom=(event)=>{
        const InformationC = event.currentTarget.value;
        console.log(InformationC)
        setNomMateriel(InformationC)
       
      }
      const ChangePhoto=(event)=>{
        const InformationC = event.currentTarget.value;
        console.log(InformationC)
        setPhotoMateriel(InformationC)
       
      }
      const ChangeDescription=(event)=>{
        const InformationC = event.currentTarget.value;
        console.log(InformationC)
        setDescriptionMateriel(InformationC)
       
      }
      const ChangeDisponibilite=(event)=>{
        const InformationC = event.currentTarget.value;
        console.log(InformationC)
        setDisponibiliteMateriel(InformationC)
       
      }
      const ChangeFile=(event)=>{
        const fileC = event.target.files[0];
        console.log(fileC.name)
        setFileImage(fileC)
      }
      useEffect(()=>{
        axios.get("http://localhost:300/materiel").then(res => {
        const element = res.data;
        setMateriel(element );
        console.log(element)
      }).catch(error=>console.error(error))
       },[])
       const ajouter =(event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("nomMateriel",nomMateriel);
        formData.append("photoMateriel",fileImage.name);
        formData.append("file",fileImage);
       formData.append("description",description);
        formData.append("disponibilite",disponibilite);
        const dataF = [...materiel]
        dataF.push(formData)
        setMateriel(dataF)
        axios.post("http://localhost:300/materiel",dataF).then(res=>
        {  
            
            console.log(res.data)
        })
        
      }
      const ajouter1 = (event)=>{
        const dataMateriel={
          idMateriel :idMateriel,
          
        }
        const formData = new FormData();
        formData.append("idMateriel",idMateriel);
        formData.append("nomMateriel",nomMateriel);
        formData.append("photoMateriel",fileImage.name);
        formData.append("file",fileImage);
       formData.append("description",description);
        formData.append("disponibilite",disponibilite);
        const dataF = [...materiel]
        dataF.push(formData)
        setMateriel(dataF)
        axios.put(`http://localhost:300/materiel/${dataMateriel.idMateriel}`,dataF).then(res=>
        {  
            
            console.log(res.data)
        })
      }
      const Modif = (event,id,nom,photo,description,disponible)=>{
        event.preventDefault();
        const data={
          idMateriel :idMateriel,
          nomMateriel: nomMateriel,
          photoMateriel :photoMateriel,
          description : description,
          disponibilite :disponibilite
        }
        setIdMateriel(id)
        setNomMateriel(nom)
        setPhotoMateriel(photo)
        setDescriptionMateriel(description)
        setDisponibiliteMateriel(disponible)
      }
      const sup=(id)=>{
          
        axios.delete(`http://localhost:300/materiel/${id}`).then(res => {
            const element = res.data;
            console.log(id)
          }).catch(error=>console.error(error))
         console.log(`http://localhost:300/materiel/${id}`);
     
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

     
    <button class="rounded-pill btn btn-primary" data-bs-toggle="modal" data-bs-target="#largeModal">+ Ajouter une Materiel</button>
    <div class="modal fade" id="largeModal" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel3">Ajouter le Materiel</h5>
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
                                  <input type="text" class="form-control" id="emailSmall"   placeholder="Nom du Materiel" onChange={ChangeNom} /> 
                                </div>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameLarge" class="form-label"  >image</label>
                                  <input type="file" class="form-control" id="emailSmall"    placeholder="Photo du materiel" onChange={ChangePhoto}/>                            
                                </div>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameLarge" class="form-label"  >Descrpition</label>
                                  <textarea class="form-control" id="exampleFormControlTextarea1" onChange={ChangeDescription}  rows="3"></textarea>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <label for="emailLarge" class="form-label">Disponibilité</label>
                                  <select  class="select2 form-select"  onChange={ChangeDisponibilite} >
                                        <option>Disponible</option>
                                        <option>Pas Disponible </option>
                                        
                                     </select>
                                </div>
                               
                              </div>
                            </div>
                            <div class="modal-footer">
                            
                              <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={ajouter}  >Save changes</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="modal fade" id="largeModal10" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel3">Modifier le Materiel</h5>
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
                                  <input type="text" class="form-control" id="emailSmall"   placeholder="Identifiant du Materiel" value={idMateriel} /> 
                                </div>
                              </div>

                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameLarge" class="form-label"  >Nom</label>
                                  <input type="text" class="form-control" id="emailSmall"   placeholder="Nom du Materiel" value={nomMateriel} onChange={ChangeNom} /> 
                                </div>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameLarge" class="form-label"  >image</label>
                                  <input type="file" class="form-control" id="emailSmall"    placeholder="Photo du materiel" value={photoMateriel} onChange={ChangePhoto}/>                            
                                </div>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameLarge" class="form-label"  >Descrpition</label>
                                  <textarea class="form-control" id="exampleFormControlTextarea1" value={description} onChange={ChangeDescription}  rows="3"></textarea>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col mb-3">
                                  <label for="emailLarge" class="form-label">Disponibilité</label>
                                  <select  class="select2 form-select" value={disponibilite} onChange={ChangeDisponibilite} >
                                        <option>Disponible</option>
                                        <option>Pas Disponible </option>
                                        
                                     </select>
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
                            <h4 className="card-title">Listes des Materiels</h4>
                            
                        </div>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nom</th>
                                        <th scope="col">Photo</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Disponibilité</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {materiel.map(function(data){
                                          return(<tr>
                                            <td>{data.idMateriel}</td>
                                            <td>{data.nomMateriel}</td>
                                            
                                            <td>{data.description}</td>
                                              <td>{data.disponibilite}</td>
                                              <td><button class="btn btn-danger"  onClick={()=>sup(data.idMateriel)} ><i class="m-r-10 mdi mdi-delete"></i></button></td>
                                              <td><button  onClick={(e)=>Modif(e,data.idMateriel,data.nomMateriel,data.photoMateriel,data.description,data.disponibilite)}    type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#largeModal10" ><i class="m-r-10 mdi mdi-account-edit"></i></button></td>
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

export default Materiel;