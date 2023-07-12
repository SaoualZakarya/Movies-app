

const NavBar = ({search}) => {
    const onSearch = (word) =>{
        search(word)
    }
    return ( 
        <>
            <div className="flex justify-around  h-20  items-center bg-slate-400">
                <div className="md:text-5xl text-3xl text-white "  > Movies </div>
                <input 
                type="text" 
                className="md:w-[300px]  w-[220px] rounded-md h-10 outline-none border-solid border-2 border-gray-500 px-4 " 
                placeholder="search"
                onChange={(e)=>{onSearch(e.target.value)}}
                ></input>
            </div>
        </>
     );
}
 
export default NavBar;