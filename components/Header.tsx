const Header = () =>{
    return (
        <div className="bg-white flex p-4 gap-4 items-center shadow sticky top-0 text-xl fill-purple-500 stroke-purple-500 text-purple-800">
            <div className="p-1 rounded shadow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bot-icon lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
            </div>
            AI Avatar Dashboard
        </div>
    )
}

export default Header;