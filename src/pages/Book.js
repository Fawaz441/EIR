import Wrapper from 'components/general/Wrapper';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'api';
import { toast } from 'react-hot-toast';
import parse from 'react-html-parser';
import Search from 'components/general/Search';
import MetaData from 'components/general/MetaData';

const Book = () => {
	const { id } = useParams();
	const [result, setResult] = useState();
	const [shouldShowResults, setShouldShowResults] = useState(true);
	const [metaVisible, setMetaVisible] = useState(false);

	const volumeId = id;

	useEffect(() => {
		const getResult = async () => {
			try {
				const { data } = await api.searchForABook(volumeId);
				setResult(data);
			} catch (e) {
				toast.error('There was an error');
			}
		};
		volumeId && getResult(volumeId);
	}, [volumeId]);

	const searchOption = [
		'Art',
		'Most popular',
		'Fiction & Literature',
		'Health and Fitness',
		'Religion',
		'Technology',
		'Politics and Law',
		'Lifestyle',
		'Environment',
		'Business & Career',
	];

	return (
		<Wrapper>
			{result && (
				<MetaData
					data={result}
					visible={metaVisible}
					setVisible={setMetaVisible}
				/>
			)}
			<section
				className="mt-[40px] h-[395px]"
				onClick={() => setShouldShowResults(false)}>
				<div className="flex">
					<div>
						<img
							className="w-[220px] h-[273px] rounded-lg"
							src={result?.volumeInfo?.imageLinks?.thumbnail}
							alt=""></img>
						<div
							className="cursor-pointer underline w-[171px] h-[50px] flex items-center text-[15px]"
							onClick={() => setMetaVisible(true)}>
							View metadata
						</div>
					</div>
					<div className="w-[592px] pl-[40px]">
						<h1 className="mt-4 leading-[30px] w-[444px] font-bold text-[24px]">
							{result?.volumeInfo?.title}
						</h1>
						<div className="text-[16px] font-bold">
							{result?.volumeInfo.authors}
						</div>
						<div className="mt-5 flex gap-[14px] text-[12px] text-D9DCE0">
							<span>{result?.volumeInfo.pageCount} pages</span>
							<span>{result?.volumeInfo.publishedDate}</span>
							<span>32.2 mb</span>
							<span>English</span>
						</div>
						<div className="mt-3 flex gap-6 text-[12px] text-D9DCE0">
							<li>Self improvement</li>
							<li>Most popular</li>
						</div>

						<div className="mt-[48px] text-[14px] leading-[26.26px] mr-[16px] pb-[100px] font-medium">
							{parse(result?.volumeInfo?.description)}
						</div>
					</div>
					<div className=" relative max-w-[357px] w-full h-[408px] border-l px-[14px]">
						<Search
							mini
							shouldShowResults={shouldShowResults}
							reset={() => setShouldShowResults(true)}
						/>
						<div className="flex gap-1 flex-wrap mt-6 text-[12px] font-normal">
							{searchOption.map((i, index) => (
								<button
									key={index}
									className="rounded-full px-[19px] py-[10px] border">
									{i}
								</button>
							))}
						</div>
					</div>
				</div>
			</section>
			<section></section>
		</Wrapper>
	);
};

export default Book;
