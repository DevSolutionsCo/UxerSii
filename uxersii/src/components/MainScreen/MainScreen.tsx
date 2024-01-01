import Background from "./Background"
function MainScreen() {
    // * ! sm es para la version Desktop
  return ( <>
    <h1 className="px-4 sm:px-10 h-screen w-screen dark:bg-zinc-900 dark:text-white">Hola MainScreen</h1> 
    <Background/>
    </>
  
  )
}

export default MainScreen