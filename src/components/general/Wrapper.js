import TopNav from 'components/navigation/TopNav';
import React from 'react';

const Wrapper = ({ children }) => {
	return (
		<div className="max-w-[1181px] mx-auto">
			<TopNav />
			<div className="pb-[56px]">{children}</div>
			<div className="fixed bottom-0 left-0 w-full bg-F8F9FA h-[56px]">
				<div className="max-w-[1181px] mx-auto mb-auto flex items-center justify-between">
					<span className="font-medium text-828282 text-xl leading-[15.52px]">
						(c) Group1, CSE 522
					</span>
					<span className="font-medium text-828282 text-xl leading-[15.52px]">
						Made with ❤️ and ☕
					</span>
				</div>
			</div>
		</div>
	);
};

export default Wrapper;
