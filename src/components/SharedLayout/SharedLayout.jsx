import { Loader } from 'components/Loader/Loader';
import { Outlet, NavLink  } from "react-router-dom";
import { Suspense } from "react";

export const SharedLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/movies">Movies</NavLink>
                </nav>
            </header>

            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </div>
    )
}