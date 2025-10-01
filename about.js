// Header
const header_content = `
    <div class="logo">
            <img src="images/logo_genai_color_transparentbg.png" alt="logo">
    </div>
    <ul>
        <li class="underline"><a href="index.html">Home</a></li>
        <li class="underline"><a href="services.html">Services</a></li>
        <li class="underline"><a href="code.html">Everyone can code! ✨</a></li> 
        <li class="underline"><a href="#">Courses</a></li>
        <li class="underline"><a href="#">The AGI Book 📗</a></li>
        <li class="underline"><a href="#">Newsletter</a></li>
        <li class="cur-page"><a href="about.html">About</a></li>
    </ul>
    <div class="login underline"><a href="#">Login</a></div>
`;
document.getElementById("header").innerHTML = header_content;


// meet
const meet=`
    <div class="heading">Meet Martin Musiol</div>
    <div class="content">
        <div class="image">
            <img src="images/martin.jpg" alt="martin">
        </div>
        <div class="text">
            <p>Hello there!</p>
            <p>I'm Martin, a German with Polish roots, hailing from the picturesque city of Lüneburg, near Hamburg. I now reside in the bustling metropolis of Munich, where I've made it my mission to guide companies through the fascinating world of generative AI.</p>
            <p>My passion for generative AI first ignited in 2016 when I spoke about it at a conference, and since then, I can’t stop! I've created an online course and a newsletter to spread knowledge on this groundbreaking technology, and I'm currently penning a book in collaboration with Wiley.</p>
            <p>As an instructor at GenerativeAI.net, I empower others to explore the boundless potential of generative AI applications. Day in day out, I assist clients in crafting their own generative AI solutions, tailoring them to their unique needs.</p>
            <p>So, if you're as captivated by generative AI as I am, feel free to connect with me. I'm always eager to exchange ideas and insights with fellow enthusiasts. Let's embark on this extraordinary journey together!</p>
            <p>Check out my <a href="services.html">services</a> page for more.</p>
        </div>
    </div>
`;
document.getElementById("meet").innerHTML=meet;


// info
const info=`
    <div class="key-data">
        <div class="heading">Key Data on Martin:</div>
        <p>Professional (chronological)</p>
        <ul>
            <li>Instructor at <b>GenerativeAI.net</b></li>
            <li>Principle Data Science Manager at Infosys Consulting</li>
            <li>Data Science Manager at IBM</li>
            <li>Data Scientist at Frog Design for EMEA</li>
            <li>CTO of Storybeep; Natural Language Processing (NLP)</li>
            <li>Prediction Research at Airbus Group</li>
            <li>M.Sc. in CSE (focus on AI) at TU Munich</li>
            <li>B.Eng. in Engineering at Leuphana University Lüneburg</li>
        </ul>
        <p>Interests</p>
        <ul>
            <li>GenAI, AGI, soccer, reading, dancing, animal welfare</li>
        </ul>
    </div>
    <div class="say-hi">
        <div class="heading">Say Hi</div>
        <div class="text">I am happy to connect with you.</div>
    </div>
    <div class="logo">
        <div class="linkedIn box"><a href="https://www.linkedin.com/in/martinmusiol1/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a></div>
        <div class="email box"><a href=""><i class="fa-solid fa-envelope"></i></a></div>
        <div class="instagram box"><a href="https://www.instagram.com/squarespace/" target="_blank"><i class="fa-brands fa-instagram"></i></a></div>
        <div class="twitter box"><a href="https://x.com/musiol_martin" target="_blank"><i class="fa-brands fa-twitter"></i></a></div>
    </div>
`;
document.getElementById("info").innerHTML=info;


// Coaching
const coaching=`
    <div class="heading">Seek Coaching?</div>
    <div class="text">Then go ahead and schedule a 1-1 session with Martin via the following button.</div>
    <button>SCHEDULE SESSION</button>
`;
document.getElementById("coaching").innerHTML=coaching;


// feedback
const feedback=`
    <div class="heading">What they say about me</div>
    <div class="images">
        <img src="images/Screenshot+2022-07-26+at+16.54.03.png" alt="image">
        <img src="images/Screenshot+2022-07-26+at+16.54.35.png" alt="image">
        <img src="images/Screenshot+2022-07-26+at+16.56.43.png" alt="image">
    </div>
`;
document.getElementById("feedback").innerHTML=feedback;


// footer
const footer = `
    <div class="list1">
        <ul>
            <li>GenerativeAI.net</li>
            <li>Nymphenburger Strasse</li>
            <li>München, BY,</li>
            <li>Germany</li>
            <li>generativeai.net@gmail.com</li>
        </ul>
    </div>
    <div class="list2">
        <ul>
            <li><a href="https://www.linkedin.com/company/generative-ai/" target="_blank">LinkedIn</a></li>
            <li><a href="http://instagram.com/squarespace/" target="_blank">Instagram</a></li>
            <li><a href="https://www.facebook.com/squarespace" target="_blank">Facebook</a></li>
            <li><a href="https://x.com/squarespace" target="_blank">Twitter</a></li>
        </ul>
    </div>
    <div class="terms"><a href="https://generativeai.net/terms-conditions">Terms and conditions</a></div>
`;
document.getElementById("footer").innerHTML = footer;