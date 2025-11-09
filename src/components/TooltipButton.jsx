import React from 'react'

const TooltipButton = ({position='bottom', colors=['bg-red-700', 'bg-green-700', 'bg-blue-700']}) => {
    const positionClasses = {
    bottom: {
      tooltip: 'bottom-full left-1/2 transform -translate-x-1/2 mb-3',
      arrow: 'left-1/2 transform -translate-x-1/2 -bottom-2 border-t',
    },
    top: {
      tooltip: 'top-full left-1/2 transform -translate-x-1/2 mt-3',
      arrow: 'left-1/2 transform -translate-x-1/2 -top-2 border-b',
    },
    left: {
      tooltip: 'left-full top-1/2 transform -translate-y-1/2 ml-3',
      arrow: 'top-1/2 transform -translate-y-1/2 -left-2 border-r',
    },
    right: {
      tooltip: 'right-full top-1/2 transform -translate-y-1/2 mr-3',
      arrow: 'top-1/2 transform -translate-y-1/2 -right-2 border-l',
    },
  };
  return (
    // hover button for displaying tooltip box
    <div className="relative group">
        <button className="relative p-3 bg-white/25 rounded-full border border-1 bg-white text-xl">
        {/* Tooltip */}
          <div className={`hidden absolute space-x-1 p-2 bg-white/25 rounded-lg shadow-md
             group-hover:flex ${positionClasses[position].tooltip}`}>
              {/* Colored dots */}
                {
                    colors.map((color, index) => (
                        <div key={index} className={`size-4 ${color} border border-white rounded-full`}/>
                    ))
                }
                
            {/* Tooltip arrow */}
            <div className={`absolute ${positionClasses[position].arrow} w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent
             border-t-8 border-t-white/35`}></div>
          </div>
          
        </button>
        
    </div>
     
  )
}

export default TooltipButton
