import { RouterProvider } from "react-router"
import { appRouter } from "./app.router"

export const TrendroraApp = () => {
    return (
        <RouterProvider router={appRouter} />
    )
}
