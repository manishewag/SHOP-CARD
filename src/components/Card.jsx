/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React,{useState} from 'react'

function Card({setCart}) {

    let [toggle,setToogle] = useState(true)

  return <>

      {/* <!-- Section--> */}

                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="src/img/images.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">Realme 6</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    {/* <!-- Product price--> */}
                                    <span className="text-muted text-decoration-line-through">$15000.00</span>
                                    $13000.00
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                {
                                 toggle?<button className="btn btn-outline-dark mt-auto" 
                                 onClick={()=>{
                                      setToogle(value=>!value)
                                      setCart(value=>value+1)
                                 }}>Add to cart</button>:

                                 <button className="btn btn-outline-dark mt-auto" 
                                 onClick={()=>{
                                      setToogle(value=>!value)
                                      setCart(value=>value-1)
                                 }}>Remove</button>
                                }



                                </div>
                            </div>
                        </div>
                    </div>
  
  </>

}

export default Card