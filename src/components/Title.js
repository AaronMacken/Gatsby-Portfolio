import React from "react"

const Title = ({ title }) => {
  return (
    <div className="section-title">
      {/* the || allows for a default value */}
      <h2>{title || "Default Title"}</h2>
      <div className="underline"></div>
    </div>
  )
}

export default Title
