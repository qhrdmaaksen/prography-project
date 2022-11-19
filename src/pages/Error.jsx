import {useRouteError} from "react-router-dom";
import MainNavigation from "../components/UI/MainNavigation";

const Error = () => {
	const error = useRouteError()
	return (
			<>
				<MainNavigation />
				<main>
					<h1>에러가 발생하였습니다.</h1>
					<p>{error.message}</p>
				</main>
			</>
	)
}
export default Error;