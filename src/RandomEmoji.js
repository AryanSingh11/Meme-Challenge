import react from "react";

var emojis =['๐งจ','โจ', '๐','๐', '๐', 'โค', '๐ธ', '๐โโ๏ธ', '๐ฉโ๐ป', '๐ค', '๐', '๐งโโ๏ธ', '๐ค', '๐','๐', '๐', '๐', '๐', '๐', '๐', '๐', '๐ค', '๐คค', '๐ค ', '๐คก', '๐ป']

export default function RandomEmoji(){
        return emojis[Math.floor(Math.random*emojis.length)]
}