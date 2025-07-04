import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { Home, Auth, Orders, Tables, Menu, Dashboard } from "./pages";
import Header from "./components/shared/Header"; 
import BottomNav from "./components/shared/BottomNav";
import { useSelector } from "react-redux";
import useLoadData from "./hooks/useLoadData";
import FullScreenLoader from "./components/shared/FullScreenLoader"
import { ThemeProvider } from "./context/ThemeContext";

function Layout() {
  const isLoading = useLoadData();
  const location = useLocation();
  const hideHeaderRoutes = ["/auth"];
  const hideBottomNavRoutes = ["/auth", "/dashboard"];
  const { isAuth } = useSelector(state => state.user);

  if(isLoading) return <FullScreenLoader />

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route path="/auth" element={isAuth ? <Navigate to="/" /> : <Auth />} />
        <Route
          path="/orders"
          element={
            <ProtectedRoutes>
              <Orders />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/tables"
          element={
            <ProtectedRoutes>
              <Tables />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/menu"
          element={
            <ProtectedRoutes>
              <Menu />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes> 
      {!hideBottomNavRoutes.includes(location.pathname) && <BottomNav />}
    </>
  );
}

function ProtectedRoutes({ children }) {
  const { isAuth } = useSelector((state) => state.user);
  if (!isAuth) {
    return <Navigate to="/auth" />;
  }

  return children;
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  );
}

export default App;


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
//   Navigate,
// } from "react-router-dom";
// import { Home, Auth, Orders, Tables, Menu, Dashboard } from "./pages";
// import Header from "./components/shared/Header"; 
// import { useSelector } from "react-redux";
// import FullScreenLoader from "./components/shared/FullScreenLoader";

// function Layout() {
//   const location = useLocation();
//   const hideHeaderRoutes = ["/auth"];
//   const { isAuth } = useSelector(state => state.user);

//   return (
//     <>
//       {!hideHeaderRoutes.includes(location.pathname) && <Header />}
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <ProtectedRoutes>
//               <Home />
//             </ProtectedRoutes>
//           }
//         />
//         <Route path="/auth" element={isAuth ? <Navigate to="/" /> : <Auth />} />
//         <Route
//           path="/orders"
//           element={
//             <ProtectedRoutes>
//               <Orders />
//             </ProtectedRoutes>
//           }
//         />
//         <Route
//           path="/tables"
//           element={
//             <ProtectedRoutes>
//               <Tables />
//             </ProtectedRoutes>
//           }
//         />
//         <Route
//           path="/menu"
//           element={
//             <ProtectedRoutes>
//               <Menu />
//             </ProtectedRoutes>
//           }
//         />
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoutes>
//               <Dashboard />
//             </ProtectedRoutes>
//           }
//         />
//         <Route path="*" element={<div>Not Found</div>} />
//       </Routes> 
//     </>
//   );
// }

// function ProtectedRoutes({ children }) {
//   const { isAuth } = useSelector((state) => state.user);
//   if (!isAuth) {
//     return <Navigate to="/auth" />;
//   }

//   return children;
// }

// function App() {
//   return (
//     <Router>
//       <Layout />
//     </Router>
//   );
// }

// export default App;
