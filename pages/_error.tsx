import { NextPageContext } from "next";
import { NextSeo } from "next-seo";

interface ErrorComponentProps {
	statusCode?: number;
}

const ErrorComponent = ({ statusCode }: ErrorComponentProps): JSX.Element => {
	return (
		<div className="container mx-auto relative h-96">
			<NextSeo
				title={`Error ${statusCode}`}
				noindex={true}
				nofollow={true}
				description={`Error ${statusCode}`}
			/>

			<div className="px-2 pt-5 text-center absolute inset-0 flex items-center justify-center py-4">
				<h3 className="text-2xl block">
					Error {statusCode}
				</h3>
			</div>
		</div>
	);
}

ErrorComponent.getInitialProps = ({ res, err }: NextPageContext) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default ErrorComponent;