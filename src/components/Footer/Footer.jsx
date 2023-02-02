import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer class="text-center text-lg-start" style={{backgroundColor: "#5e10b1"}}>
    <div class="container d-flex justify-content-center py-5">
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#000000"}}>
        <i class="fab fa-facebook-f"></i>
      </button>
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#000000"}}>
        <i class="fab fa-youtube"></i>
      </button>
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#000000"}}>
        <i class="fab fa-instagram"></i>
      </button>
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: "#000000"}}>
        <i class="fab fa-twitter"></i>
      </button>
    </div>
    {/* <!-- Copyright --> */}
    <div class="text-center text-white p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
      © 2023 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/">NatWest.com</a>
    </div>
    {/* <!-- Copyright --> */}
  </footer>
{/* </div> */}
{/* <!-- End of .container --> */}

</div>
  )
}