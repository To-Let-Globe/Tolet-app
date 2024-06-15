import { BiRightArrow } from "react-icons/bi"
import {BlogPage} from "../../SampleData"

export const BlogMain = () => {
  return (
    
    <div className="bg-black">
         <h1 className="text-4xl text-center font-semibold mt-4">To-Let Tales</h1>
         <h1 className="text-center mt-2 text-[#6CC1B6]">Dive into a Sea of Endless Stories and Insights</h1>
         <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-around gap-5 px-8 mb-8 mt-10 overflow-x-auto w-full">
          {
            BlogPage.map((data,index)=>(
                <div key={index} className=" text-white rounded-xl m-5 flex flex-col justify-center">
                    <img src={data?.image1} alt="" className="rounded-xl" />
                    <p className="text-gray-400">{data?.date}</p>
                    <h1 className="text-[#6CC1B6] font-semibold text-xl">{data?.title.split(" ").slice(0,10).join(" ")}{data?.title.split(" ").length>10 && "..."}</h1>
                    <h1 className="text-[#6CC1B6] font-semibold text-xl"></h1>
                    <h1 className="text-white">{data?.des1.split(" ").slice(0, 30).join(" ")}{data?.des1.split(" ").length > 30 && "..."}</h1>
                    <h1 className="flex items-center gap-2 text-[#6CC1B6]">Read More <BiRightArrow /></h1>
                    <h1 className="text-white">{data?.author}</h1>
                    <h1 className="text-white">{data?.designation}</h1>
                </div>
            ))
          }
        </div>
    </div>
       
  )
}
