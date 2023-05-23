import React from 'react';
import { ReactComponent as Book } from 'assets/icons/book.svg';
import { Link } from 'react-router-dom';

const TopNav = () => {
	return (
		<div className="flex items-center justify-between pt-[62px]">
			<Link to="/">
				<div className="flex items-center space-x-2">
					<div className="h-8 w-8 flex items-center justify-center rounded-full bg-black">
						<Book />
					</div>
					<span className="font-bold text-xl leading-[15.52px] text-black">
						OAU-IR
					</span>
				</div>
			</Link>
			<div className="flex items-center space-x-8">
				<span className="text-313131 font-medium text-[18px] leading-[13.97px]">
					Discover
				</span>
				<span className="text-313131 font-medium text-[18px] leading-[13.97px]">
					Categories
				</span>
				<span className="text-313131 font-medium text-[18px] leading-[13.97px]">
					Upload something
				</span>
			</div>
		</div>
	);
};

export default TopNav;
