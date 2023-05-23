import React, { useState } from 'react';
import clsx from 'classnames';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';
import { ReactComponent as BookImage } from 'assets/images/book-image.svg';

const TABS = ['Journals', 'Books', 'Articles'];

const fakeResults = [
	{
		name: 'Notebooks of Leonardo Davinci',
		author: 'Davinci Leonardo',
		type: 'Book',
		year: '1990',
		extra: 'Santi',
	},
	{
		name: 'Notebooks of Leonardo Davinci',
		author: 'Davinci Leonardo',
		type: 'Book',
		year: '1990',
		extra: 'Santi',
	},
	{
		name: 'Notebooks of Leonardo Davinci',
		author: 'Davinci Leonardo',
		type: 'Book',
		year: '1990',
		extra: 'Santi',
	},
	{
		name: 'Notebooks of Leonardo Davinci',
		author: 'Davinci Leonardo',
		type: 'Book',
		year: '1990',
		extra: 'Santi',
	},
];

const SearchSingleResult = ({ result, lastResultIndex, index }) => {
	return (
		<div
			className={clsx(
				'pt-[10px] pb-[7px] pl-5 pr-[27px] flex items-center space-x-6',
				{
					'border-b border-b-D9DCE0': index !== lastResultIndex,
				}
			)}>
			<BookImage className="flex-shrink-0" />
			<div className="flex-1 flex flex-col space-y-4">
				<div className="flex flex-col space-y-2">
					<h3 className="font-bold text-base leading-[12.42px] text-101E30">
						{result.name}
					</h3>
					<span className="font-medium text-[12px] leading-[9.31px] text-828282">
						{result.author}
					</span>
				</div>
				<div className="w-full flex items-center justify-between">
					<div className="flex items-center space-x-[34px]">
						<span className="text-[12px] leading-[9.31px] font-medium text-828282">
							{result.type}
						</span>
						<span className="text-[12px] leading-[9.31px] font-medium text-828282">
							{result.year}
						</span>
						<span className="text-[12px] leading-[9.31px] font-medium text-828282">
							{result.extra}
						</span>
					</div>
					<a
						href="https://www.google.com"
						rel="noreferrer"
						target="_blank"
						className="text-[12px] leading-[9.31px] font-medium text-828282 underline">
						View on Google Books
					</a>
				</div>
			</div>
		</div>
	);
};

// 11px
const SearchResults = ({ results }) => {
	const [activeTab, setActiveTab] = useState(TABS[0]);
	const remainingHeight =
		window.innerHeight - 363.25 - (12.5 * window.innerHeight) / 100;
	const containerHeight = remainingHeight > 430 ? 430 : remainingHeight;
	return (
		<div
			style={{
				maxHeight: `${containerHeight}px`,
			}}
			className={clsx(
				'transition-all duration-500 top-[calc(363.25px_+_12.5vh)] z-[2] py-[13px] w-[741px] left-[50%] -translate-x-[50%] rounded-[32px] bg-white fixed border border-D9DCE0',
				{ 'opacity-0 pointer-events-none': results.length === 0 }
			)}>
			<div className="flex items-center h-[64px] justify-between px-[37px] border-b border-b-[#EFEFEF]/[.6]">
				<div className="flex items-center space-x-[30px]">
					{TABS.map((tab, index) => (
						<button
							type="button"
							key={index}
							onClick={() => setActiveTab(tab)}
							className={clsx(
								'font-medium p-[10px] text-base leading-[12.42px] text-A3ABB6 text-center',
								{
									'bg-[#637AA6]/[.1] flex items-center justify-center !font-bold':
										tab === activeTab,
								}
							)}>
							{tab}
						</button>
					))}
				</div>
				<div className="flex items-center">
					<span className="text-101E30 font-medium text-base leading-[12.42px]">
						See all
					</span>
					<ArrowRight className="stroke-101E30" />
				</div>
			</div>
			<div
				className="overflow-auto scrollbar-hide"
				style={{ height: containerHeight - 80 }}>
				{results.map((result, index) => (
					<SearchSingleResult
						key={index}
						index={index}
						result={result}
						lastResultIndex={results.length - 1}
					/>
				))}
			</div>
		</div>
	);
};

const Search = () => {
	const [searchQuery, setSearchQuery] = useState('');
	return (
		<div className="flex relative px-[33px] items-center space-x-1 bg-white h-[76px] w-[741px] shadow-[0_7px_47px_0px_rgba(0,0,0,0.02)] rounded-[95px] justify-between border border-D9DCE0">
			<input
				type="text"
				className="placeholder:text-A3ABB6 text-xl leading-[15.52px] font-medium text-black flex-1 border-none outline-none"
				placeholder="Search for books, articles and files from our large repo"
				onChange={({ target: { value } }) => setSearchQuery(value)}
			/>
			<div className="ml-1 flex-shrink-0">
				<SearchIcon />
			</div>
			<SearchResults
				results={searchQuery?.trim()?.length > 0 ? fakeResults : []}
			/>
		</div>
	);
};

export default Search;
