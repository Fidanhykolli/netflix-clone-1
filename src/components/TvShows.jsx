import React from "react"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap-icons/font/bootstrap-icons.min.css";

function TvShows () {
    return(
        <div>
            <div class="d-flex">
            <h2 class="mb-4 text-white ms-4 ">TV Shows</h2>
            <div class="btn-group" role="group">
              <div class="dropdown ms-4 mt-1">
                <button
                  type="button"
                  class="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                
                >
                  Genres
                </button>
                <ul class="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Comedy</a></li>
                  <li><a className="dropdown-item" href="#">Drama</a></li>
                  <li><a className="dropdown-item" href="#">Thriller</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    )
}
export default TvShows