import Wrapper from 'components/general/Wrapper';
import React, { useState } from 'react';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';
import Search from 'components/general/Search';

const Home = () => {
	const [shouldShowResults, setShouldShowResults] = useState(true);
	return (
		<Wrapper>
			<div
				className="mt-[12.5vh] flex items-center justify-center flex-col space-y-10"
				onClick={() => setShouldShowResults(false)}>
				<div className="border border-[#637AA6]/[.1] rounded-[30px] py-[10px] px-[19px] flex items-center space-x-[10px]">
					<span className="select-none text-313131 font-medium text-[18px]">
						👑 Join 3000+ students to search the largest books database in
						Africa
					</span>
					<button className="flex items-center text-FFB905">
						<span className="select-none font-medium text-[18px] leading-[13.97px] underline">
							Learn about us
						</span>
						<ArrowRight className="stroke-FFB905" />
					</button>
				</div>
				<h1 className="select-none text-[48px] font-bold text-black leading-[37.25px] text-center">
					A large database for Educational IR
				</h1>
				<Search
					shouldShowResults={shouldShowResults}
					reset={() => setShouldShowResults(true)}
				/>
			</div>
		</Wrapper>
	);
};

export default Home;
