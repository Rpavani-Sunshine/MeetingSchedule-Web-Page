import React from 'react'
import Fibery_Logo from '../Assets/Fibery-Ai-Aiutor-720x640.jpg'
import { InlineWidget } from "react-calendly";

function DemoComponent() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={Fibery_Logo} height={30} width={150} />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Solutions
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Product
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Resources
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">...</a>
                            </li>
                        </ul>
                    </div>
                    <div class="d-flex">
                        <button class=" m-2 p-2" type="submit">Log in</button>
                        <button class="btn border border-dark border-3 text-dark m-2 p-2"
                        data-bs-target="#exampleModalToggle" data-bs-toggle="modal" type="submit">Get a Demo</button>
                        <button class="btn bg-dark text-white m-2 p-2" type="submit">Sign up</button>
                    </div>
                </div>
            </nav>
                
            {/* calender Modal */}

             {/* calender Modal */}
             <div class="modal modal-xl fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <InlineWidget url="https://calendly.com/rpavani-official95/30min?preview_source=et_card&month=2024-04" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DemoComponent