
function Background() {
  return (
<div className="h-screen relative bg-gradient-to-b from-green-500 to-yellow-500 overflow-hidden">
  <div className="absolute h-full w-px bg-green-500 transform -rotate-6"></div>
  <div className="absolute h-full w-px bg-green-500 transform -rotate-6" style={{ left: '25%' }}></div>
  <div className="absolute h-full w-px bg-yellow-500 transform -rotate-6" style={{ left: '50%' }}></div>
  <div className="absolute h-full w-px bg-yellow-500 transform -rotate-6" style={{ left: '75%' }}></div>
</div>


  )
}

export default Background