const SetofWords= [ 
    "	The bikers rode down the long and narrow path to reach the city park. When they reached a good spot to rest, they began to look for signs of spring. The sun was bright, and a lot of bright red and blue blooms proved to all that warm spring days were the very best. Spring rides were planned. They had a burger at the lake and then rode farther up the mountain.",
    
    "   A paralegal is a person trained in legal matters who performs tasks requiring knowledge of the law and legal procedures. A paralegal is not a lawyer but can be employed by a law office or work freelance at a company or law office. ",
    
    "   Closed captions were created for deaf or hard of hearing individuals to assist in comprehension. They can also be used as a tool by those learning to read, learning to speak a non-native language, or in an environment where the audio is difficult to hear or is intentionally muted." ,
    
    "   Many touch typists also use keyboard shortcuts or hotkeys when typing on a computer. This allows them to edit their document without having to take their hands off the keyboard to use a mouse. An example of a keyboard shortcut is pressing the Ctrl key plus the S key to save a document as they type, or the Ctrl key plus the Z key to undo a mistake.",
    
    "   A virtual assistant (typically abbreviated to VA) is generally self-employed and provides professional administrative, technical, or creative assistance to clients remotely from a home office.",
    
    "   Because of the laboriousness of the translation process, since the 1940s efforts have been made, with varying degrees of success, to automate translation or to mechanically aid the human translator. More recently, the rise of the Internet has fostered a world-wide market for translation services and has facilitated 'language localization'.",
    
    "   Web designers are expected to have an awareness of usability and if their role involves creating mark up then they are also expected to be up to date with web accessibility guidelines. The different areas of web design include web graphic design; interface design; authoring, including standardised code and proprietary software",
    
    "   A late 20th century trend in typing, primarily used with devices with small keyboards (such as PDAs and Smartphones), is thumbing or thumb typing. This can be accomplished using one or both thumbs. Similar to desktop keyboards and input devices, if a user overuses keys which need hard presses and/or have small and unergonomic layouts, it could cause thumb tendonitis.",
    
    "   Medical transcription, also known as MT, is an allied health profession dealing with the process of transcribing voice-recorded medical reports that are dictated by physicians, nurses and other healthcare practitioners. Medical reports can be voice files, notes taken during a lecture, or other spoken material.",
    
    "   Being human makes us susceptible to the onset of feelings. The role of these emotions varies. Some of them are useful while others may be harmful. The use of social media for self-expression has reached a point that it makes us feel we can say anything. This begins when we see people expressing anything and everything that come to mind."
    ];



const message = document.getElementById("msg");
const text = document.getElementById("text");
const button = document.getElementById("start-btn");
const result = document.getElementById("result");
let startTime, endTime;
text.disabled = true;


const TypingStart = () => {
    let ranIndex = Math.floor(Math.random()*SetofWords.length);
    console.log(ranIndex);
    message.innerText = SetofWords[ranIndex];
    let date = new Date();
    startTime = date.getTime();
    button.innerText = "Done";
}



const endTyping = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/ 1000);
    console.log("Total time taken =", totalTime);
    let totalWord = message.innerText.split(" ").length;
    console.log("Total Words are =", totalWord);
    if(text.value.trim().length>0)
    {
        var wordCount = text.value.trim().split(" ").length;
        console.log("wordCount =", wordCount);
    }else{
        var wordCount = 0;
    }
    let speed = Math.round((60/totalTime)*wordCount);
    console.log("Speed is =",speed);
    let checkWords = accuracy(text.value, message.innerText);
    console.log(checkWords);
}

const accuracy = (str1, str2) => {
    let word1 = str1.trim().split(" ");
    let word2 = str2.trim().split(" ");
    let count = 0;
    word1.forEach((item, index) => {
        if(item === word2[index])
        {
            count++;
        }
    });
    return count;
}

button.addEventListener('click', function(){
   if(this.innerText == "Start")
   {
    text.disabled = false;
    TypingStart();
   }else if(this.innerText == "Done"){
    button.innerText = "Start";
    endTyping(); 
   }
});