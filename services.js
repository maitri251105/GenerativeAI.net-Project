// Header
const header_content = `
    <div class="logo">
            <img src="images/logo_genai_color_transparentbg.png" alt="logo">
    </div>
    <ul>
        <li class="underline"><a href="home.html">Home</a></li>
        <li class="cur-page"><a href="services.html">Services</a></li>
        <li class="underline"><a href="code.html">Everyone can code! ✨</a></li> 
        <li class="underline"><a href="#">Courses</a></li>
        <li class="underline"><a href="#">The AGI Book 📗</a></li>
        <li class="underline"><a href="#">Newsletter</a></li>
        <li class="underline"><a href="about.html">About</a></li>
    </ul>
    <div class="login underline"><a href="#">Login</a></div>
`;
document.getElementById("header").innerHTML = header_content;


// IT solutions 
const solution=`
    <div class="heading">Implementing IT solutions. With speed and quality.</div>
    <button>ANALYZE MY USE CASE</button>
`;
document.getElementById("solutions").innerHTML=solution;


// AI agents
const agents=`
    <div class="heading1">OUR SQUAD COMES WITH A 100% DELIVERY FOCUS.</div>
    <div class="heading2">Full implementation with AI agents, go-to-market strategy, and commercial execution.</div>
    <div class="images">
        <img src="images/Screenshot+2025-05-28+at+10.47.20.png" alt="image">
        <img src="images/Screenshot+2025-05-28+at+10.47.40.png" alt="image">
    </div>
`;
document.getElementById("agents").innerHTML=agents;


// selected projects
const projects=`
    <div class="heading">Our Selected Projects Include</div>
    <div class="boxes">
        <div class="box">
            <div class="head">AI Knowledge System | Shipping Industry </div>
            <div class="text">Developed a RAG system for the shipping industry that answers client queries on
                regulations and account data, featuring real-time email translation.</div>
        </div>
        <div class="box">
            <div class="head">Scaled marketplaces </div>
            <div class="text">Designed global strategy for various marketplaces and fully digital businesses.
                Launched and scaled those, from 1M to 10+M ARR. Built entire sales, ops and marketing teams.</div>
        </div>
        <div class="box">
            <div class="head">AI Sales Coaching Platform | B2B Travel</div>
            <div class="text">Created an AI sales platform that personalizes training by curating relevant content,
                directly linking learning to sales data to enhance performance.</div>
        </div>
        <div class="box">
            <div class="head">Empathetic Storytelling Chatbot (Bank of Stories)</div>
            <div class="text">Designed an empathetic voice chatbot that builds user connection by weaving their
                personal stories into the conversation.</div>
        </div>
    </div>
    <button>GET IN TOUCH</button>
`;
document.getElementById("projects").innerHTML=projects;


// partners
const partners=`
    <div class="heading1">And we have much more Clients and Partners</div>
    <div class="heading2">Let’s discuss how your organization can leverage AI.</div>
    <div class="images">
        <div class="image1">
            <img src="images/Screenshot+2025-05-28+at+10.59.06.png" alt="image">
        </div>
        <div class="image2">
            <div class="text1">Get Your <br> FREE USE CASE <br> ANALYSIS</div>
            <img src="images/QE.png" alt="image">
            <div class="text2">NAME YOUR USE CASE. WE’LL SEND A 60-SEC VIDEO OF OUR APPROACH!</div>
            <button>GET IN TOUCH</button>
        </div>
    </div>
`;
document.getElementById("partners").innerHTML=partners;


// Benefits
const benefits=`
    <div class="heading">Break the 1 % barrier—activate AI in your business</div>
    <img src="images/Screenshot+2025-05-28+at+11.28.27.png" alt="image">
    <button>GET IN TOUCH</button>
`;
document.getElementById("benefits").innerHTML=benefits;


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