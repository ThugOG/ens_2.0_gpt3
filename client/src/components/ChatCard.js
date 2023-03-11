import {useState, useEffect} from 'react'
const ChatCard = () => {
    const [searchText, setSearchText] = useState("")
    const [data, setData] = useState("")
    const handleInput = (e) => {
        setSearchText(e.target.value)
    }
    const handleClick = async() => {
        console.log("Here")
        try{
            const data = await fetch("https://ens2-0-gpt3.onrender.com/",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    prompt: {
                        content: searchText
                    },
                }),
            })
            console.log(data)
        }
        catch(e){
            console.log(e)
        }
    }
    return(
        <div className="cartCard">
            <div><input onChange={handleInput} value={searchText} type="text" placeholder="Should i suggest something"></input><button onClick={handleClick}
            >GET</button></div>
            <div className="cartCard_answer">{data}</div>
        </div>
    )
}
export default ChatCard