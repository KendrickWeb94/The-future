import React from 'react'

const welcomeBar = () => {
  return (
      <div className="w-full py-1 px-4 bg-primary">
        <div className="flex items-center sm:flex-nowrap flex-wrap ds:justify-start sm:justify-center gap-3">
          <button className="ds:hidden bs:flex items-center justify-center bs:text-sm bg-gray-500/20 py-1 rounded-md px-3 text-white">
            New
          </button>
          <p className="bs:text-sm text-xs font-inter text-white">
            🌟️ Get unlimited access to updates from us weekly{" "}
          </p>
        
        </div>
      </div>
  )
}

export default welcomeBar