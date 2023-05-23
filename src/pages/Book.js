import Wrapper from 'components/general/Wrapper';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'api';
import { toast } from 'react-hot-toast';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';



const Book = () => {
    const { id } = useParams();
    const [result, setResult] = useState()

    const volumeId = id

    const getResult = async () => {
		try {
			const { data } = await api.searchForBook(volumeId);
			setResult(data.items[0]);
            console.log(data.items[0])
         
		} catch (e) {
			toast.error('There was an error');
		}
	};
    
    useEffect(()=>{
        volumeId && getResult(volumeId)
    },[volumeId])

    const searchOption = ['Art', 'Most popular', 'Fiction & Literature', 'Health and Fitness', 'Religion', 'Technology', 'Politics and Law', 'Lifestyle', 'Environment', 'Business & Career']

  return (
    <Wrapper>
      <section className='mt-[40px] h-[395px]'>
        <div className='flex'>
            <div>
                <img className='w-[220px] h-[273px] rounded-lg' src={result?.volumeInfo?.imageLinks?.smallThumbnail} alt=''></img>
                <div className='underline w-[171px] h-[50px] flex items-center text-[15px]'>View metadata</div>
            </div>
            <div className='w-[592px] pl-[40px]'>
                <h1 className='mt-4 leading-[30px] w-[444px] font-bold text-[24px]'>{result?.volumeInfo?.title}</h1>
                <div className='text-[16px] font-bold'>{result?.volumeInfo.authors}</div>
                <div className='mt-5 flex gap-[14px] text-[12px] text-D9DCE0'>
                    <span>{result?.volumeInfo.pageCount} pages</span>
                    <span>{result?.volumeInfo.publishedDate}</span>
                    <span>32.2 mb</span>
                    <span>English</span>
                </div>
                <div className='mt-3 flex gap-6 text-[12px] text-D9DCE0'>
                    <li>Self improvement</li>
                    <li>Most popular</li>
                </div>

                <div className='mt-[48px] text-[14px] mr-[16px]'>The Notebooks of Leonardo Davinci. 
                    Widely considered to be one of the greatest painters of all time and perhaps the most diversely talented person ever to have lived. Leonardo Davinci was an Italian polymath whose areas of interest included invention, painting, sculpting, architecture, science, music, mathematics, engineering, literature, anatomy, geology, astronomy, botany, 
                    writing, history, poetry, and cartography. </div>
                </div>
            <div className=' relative w-[370px] h-[408px] border-l px-[14px]'>
                <input className='rounded-full h-[44px] w-[357px] bg-white border border-D9DCE0 outline-none placeholder:text-A3ABB6 px-[33px] text-base' type="text" placeholder='Search...' />
                <div className=' absolute right-2 top-[10px] scale-[0.5] mr-2 '>
                <SearchIcon/>
                </div>
                <div className='flex gap-2 flex-wrap mt-6 text-[14px] font-normal'>
                    {searchOption.map((i, index)=> 
                    <button key={index} className='rounded-full px-[19px] py-[10px] border'>{i}</button>
                    )}
                </div>
            </div>
        </div>
      </section>
      <section>

      </section>
    </Wrapper>
  )
}

export default Book
