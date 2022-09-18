import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { Note } from "../components/Note";
import {AiFillInfoCircle} from "react-icons/ai";

export const Search = (props) => {
  const notesList = props.notesList;
  // console.log(notesList);
  const [showResult, setShowResult] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams("");
  const [result, setResult] = useState([
    {
      id: "",
      title: "",
      body: "",
    }
  ]);
  const keywordQuery = searchParams.get("keyword");
  // console.log(keywordQuery);

  const handleSearch = () => {
    // setSearchParams({keyword: keyword});
    const searchResult = notesList.filter((note) => note.title.includes(keywordQuery) || note.body.includes(keywordQuery));
    setResult(searchResult);
    setShowResult(true);
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-center pt-10">Search</h1>
      <form className="w-full flex flex-col justify-center items-center mt-5 max-w-80 px-[20%]">
        <input type="text" placeholder="Enter key word" className="w-full rounded px-[20%] text-center text-black"
        value={searchParams.get("keyword") == null ? "" : searchParams.get("keyword")} onChange={(e) => {setSearchParams({keyword: e.target.value})}} />
        <div className="bg-[#00B87C] hover:bg-[#1b7859] cursor-pointer text-white w-full rounded-md mt-5 flex items-center justify-center"
          onClick={() => {handleSearch()}}>Search</div>
          <p className="text-red-500">*case sensitive</p>
      </form>

      <div className="mt-20">
        {
          showResult
          ? 
          (
            <>
              <p className="text-center">{`Result for '${keywordQuery}'`}</p>
              
                {
                  result.length > 0 
                  ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-10 px-10">
                      {result.map((note) => {
                        return(
                          <Note key={note.id} 
                        title={note.title}
                        body={note.body}
                        id={note.id}
                        createdAt={note.createdAt}/>
                        )
                      })}
                    </div>
                  ) : (
                    <div className="outline rounded mx-10 py-5 mt-5 text-blue-primary flex flex-col items-center">
                      <AiFillInfoCircle className="text-5xl"/>
                      <p className="text-center w-full text-2xl">No result found</p>
                      <p className="text-center w-full text-lg">Check spelling, this search is case sensitive</p>
                    </div>
                  )
                }
            </>
          )
          : ""
        }
      </div>
    </div>
  );
}
