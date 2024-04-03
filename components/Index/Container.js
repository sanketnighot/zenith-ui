import React from "react"

function Container({ children }) {
  return (
    <div className="max-xl:w-full max-xl:px-5 xl:w-[1180px] xl:mx-auto">
      {children}
    </div>
  )
}

export default Container
