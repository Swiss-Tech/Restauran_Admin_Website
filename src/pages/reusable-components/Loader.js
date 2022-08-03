import React from 'react'

export default function Loader() {
  return (
    <div>
        <div
          className="container-fluid vh-100"
      
        >
          <div className="row d-flex flex-column justify-content-center align-items-center h-100">
            <div className="spinner-border text-warning" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
  )
}
