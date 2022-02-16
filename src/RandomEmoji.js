import react from "react";

var emojis =['🧨','✨', '🚀','😁', '😆', '❤', '😸', '🙋‍♂️', '👩‍💻', '🤟', '👍', '🧙‍♂️', '🤞', '💋','😜', '👏', '🎉', '😎', '😍', '😛', '😜', '🤑', '🤤', '🤠', '🤡', '😻']

export default function RandomEmoji(){
        return emojis[Math.floor(Math.random*emojis.length)]
}