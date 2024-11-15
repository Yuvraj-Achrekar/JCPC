import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import AccopsLayout from "./components/layouts/AccopsLayout";
import ProtectedRoute from "./components/layouts/ProtectedRoute";
import AccopsLogin from "./pages/Accops/AccopsLogin";

const Dashboard = lazy(() => import("./pages/Accops/Dashboard"));
const Home = lazy(() => import("./pages/Home"));
const Lockscreen = lazy(() => import("./pages/Lockscreen"));
const JioCloudPc = lazy(() => import("./pages/Accops/JioCloudPc"));
const Footer = lazy(() => import("./components/Footer"));
const Profile = lazy(() => import("./pages/Accops/Profile"));
const Activities = lazy(() => import("./pages/Accops/Activities"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const protectedRoutes = [
	// { path: "login", component: AccopsLogin },
	{ path: "dashboard", component: Dashboard },
	{ path: "jiocloudpc", component: JioCloudPc },
	{ path: "profile", component: Profile },
	{ path: "activities", component: Activities },
];

const App = () => {
	return (
		<Router>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path="/" element={<Lockscreen />} />
					<Route path="/home" element={<Home />} />
					<Route path="/accops/login" element={<AccopsLogin />} />
					// Routes of accops with protected route
					<Route path="/accops" element={<AccopsLayout />}>
						{protectedRoutes.map(({ path, component: Component }) => (
							<Route
								key={path}
								path={path}
								element={
									<ProtectedRoute>
										<Component />
									</ProtectedRoute>
								}
							/>
						))}
					</Route>
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Suspense>
			<Footer />
		</Router>
	);
};

export default App;
