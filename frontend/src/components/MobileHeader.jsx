import React from 'react'
import mobLogo from '../assets/images/EzKash.png'

const MobileHeader = () => {
    return (
        <>
            <nav class="navbar fixed-top bg-body-tertiary border-bottom shadow-sm">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={mobLogo} alt="Logo" class="d-inline-block align-text-top" />
                    </a>
                    <button class="btn border-0 bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
                            <path d="M0 2H25.6668" stroke="#008CFF" stroke-width="2.5" />
                            <path d="M5 12L26 12" stroke="#008CFF" stroke-width="2.5" />
                            <path d="M0 22.5335H25.6668" stroke="#008CFF" stroke-width="2.5" />
                        </svg>
                    </button>
                </div>
            </nav>

            <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        I will not close if you click outside of me.
                    </div>
                </div>
            </div>

        </>
    )
}

export default MobileHeader