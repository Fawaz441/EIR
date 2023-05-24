import clsx from 'classnames';
import React from 'react';
import { ReactComponent as Exit } from 'assets/icons/exit.svg';

const MetaData = ({ data, visible, setVisible }) => {
	const result = data;
	const itemHeight = window.innerHeight - 60 >= 630 ? `630px` : '90%';
	const itemWidth = window.innerWidth - 60 >= 914 ? '914px' : '80%';
	const getAuthors = () => {
		return result?.volumeInfo?.authors?.join(',');
	};
	const getISBN = () => {
		const values =
			result?.volumeInfo?.industryIdentifiers?.map((x) => x?.identifier) || [];
		return values?.join(',');
	};

	const getCategories = () => {
		return result?.volumeInfo?.categories?.join(',');
	};
	return (
		<div
			className={clsx(
				'transition-all opacity-0 pointer-events-none duration-300 fixed top-0 left-0 z-[1000] h-screen w-full bg-black/[.4] flex items-center justify-center',
				{
					'!opacity-100 !pointer-events-auto': visible,
				}
			)}
			onClick={() => setVisible(false)}>
			<div
				style={{ maxHeight: itemHeight, width: itemWidth }}
				onClick={(e) => e.stopPropagation()}
				className="bg-white relative rounded-[32px] flex flex-col space-y-[37px] border p-[55px] border-D9DCE0">
				<button
					onClick={() => setVisible(false)}
					type="button"
					className="absolute right-[34px] top-[38px] h-6 w-6 flex items-center justify-center bg-[#E4443A]/[.1]">
					<Exit />
				</button>
				<h3 className="text-[24px] font-bold text-black leading-9 flex-shrink-0">
					{data.volumeInfo?.title}
				</h3>

				<ul className="flex-1 flex flex-col space-y-4 overflow-auto">
					<li className="font-medium text-sm">Author(s): {getAuthors()}</li>
					<li className="font-medium text-sm">Categories: {getCategories()}</li>
					<li className="font-medium text-sm">ISBN: {getISBN()}</li>
					<li className="font-medium text-sm">
						Pages: {result?.volumeInfo?.printedPageCount}
					</li>
					<li className="font-medium text-sm">
						Volume: {data.volumeInfo?.title}
					</li>
					<li className="font-medium text-sm">
						Publisher: {data.volumeInfo?.publisher}
					</li>
					<li className="font-medium text-sm">
						Publication Date: {data.volumeInfo?.publishedDate}
					</li>
					<li className="font-medium text-sm">
						Language: {data.volumeInfo?.language}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MetaData;
