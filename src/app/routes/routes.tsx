import { HomePage } from "@pages";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
	{
		path: '/',
		children: [
			{
				index: true,
				Component: HomePage
			}
		]
	}
]);