import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { GrNext, GrPrevious } from "react-icons/gr";
import Cover from "../Shared/Cover";
import apartCover from "../../assets/assets/others/5.webp";
import Card from "../../Comnonent/Card/Card";
import SectionTitle from "../../Comnonent/SectionTitle/SectionTitle";
import { useState } from "react";
import { useEffect } from "react";
import './pagination.css'
import useAuth from "../../Hooks/useAuth";

const Apartment = () => {
  const axiosPublic = useAxiosPublic();
  const [apartments, setApartments] = useState([])
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemPerPage] = useState(6);
  const numberOfPages = Math.ceil(count/itemsPerPage)
  const pages = [...Array(numberOfPages).keys()]
  const {loading} = useAuth()

  const url = `/apartment?page=${currentPage}&size=${itemsPerPage}`
  useEffect(()=>{
    fetch('http://localhost:5000/apartmentsCount')
    .then(res => res.json())
    .then(data=> setCount(data.count))
},[])


useEffect(()=>{
  axiosPublic.get(url)
  .then(res =>{
    setApartments(res.data)
  })
},[axiosPublic, currentPage, itemsPerPage, url])

  const handleItemPerPage = e =>{
    const value = parseInt(e.target.value)
    console.log(value)
    setItemPerPage(value)
    setCurrentPage(0)
}

const handlePrev =()=>{
    if (currentPage>0){
        setCurrentPage(currentPage -1)
    }
}

const handleNext =()=>{
    if (currentPage < pages.length-1){
        setCurrentPage(currentPage+1)
    }
}
if(loading){
  return <div className="text-5xl w-full text-center">
    <span className="loading my-[20%] loading-dots loading-lg"></span>
   
    </div>
}

  return (
    <div className="">
      <Helmet>
        <title>My Building | Apartments</title>
      </Helmet>
      <Cover
        img={apartCover}
        description="Would you like to take One?"
        title="OUR Apartments"
      ></Cover>
      <div className="my-12">
        <SectionTitle heading="All Apartments"></SectionTitle>
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            apartments?.map(apartment => <Card 
                item={apartment}
                key={apartment._id}></Card>)
        }
        </div>
        <div className='pagination'>
                <p>CurrentPage: {currentPage+1}</p>
                <button className="bg-black text-white font-bold rounded-full" onClick={handlePrev}><GrPrevious /></button>
                {
                    pages.map(page =><button 
                        className={currentPage === page ? 'selected': undefined}
                        onClick={()=>setCurrentPage(page)}
                        key={page}
                        >{page + 1}</button>)
                }
                <button className="bg-black text-white font-bold rounded-full" onClick={handleNext}><GrNext></GrNext></button>
                <select className="bg-slate-300 p-2 rounded-lg" value={itemsPerPage} onChange={handleItemPerPage} name="" id="">
                    <option value="6">6</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>
      </div>
    </div>
  );
};

export default Apartment;
