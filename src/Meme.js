import React, {useState, useEffect} from "react";



export default function Meme(){

    const[meme, setMeme] = useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMeme, setallMeme] = useState([])

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=> res.json())
        .then(data=>setallMeme(data.data.memes))
    })

    console.log(allMeme)

   function getMemeImage(){
       //console.log("Meme button was clicked 😎");
        const randomNum= Math.floor(Math.random()* allMeme.length)    
        const url= allMeme[randomNum].url
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage: url
           
        }))
    }
    
     

        function handleChange(event){
            const{value, name}= event.target

            setMeme(prevTexts=> ({
                ...prevTexts,
                    [name]: value
            }))
        }


return(

    <main>
    <div className="memecontrolarea">

        <div className="inputfields">

            <input 
            className="input1" 
            placeholder="Top text" 
            type="text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            />

            
            <input 
            className="input2" 
            placeholder="Bottom text" 
            type="text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            />

           
        </div>
        <div>
        <button 
           onClick={getMemeImage}
           className="button">
            <h3>
            Get a new Meme Image 
            </h3>
        </button>
        </div>
        <div className="meme">
            <img src={meme.randomImage} className="meme--image"></img>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
       
    </div>
    </main>
)
}