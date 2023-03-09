import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes/Routes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      // dataAosDuration:"3000",
     });
  })
 
  return (
    <div className=" max-w-screen-xl mx-auto">
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
