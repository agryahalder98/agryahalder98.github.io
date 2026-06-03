---
permalink: /
#title: "Academic Pages is a ready-to-fork GitHub Pages template for academic personal websites"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div hidden="hidden">
<script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=P0DmcjPhTVQDSVsO6eLpfLlblpD7aYEdFi8dEehI1TI&cl=ffffff&w=a"></script>
</div>

<div style="
    margin: 30px auto;
    max-width: 800px;
    text-align: center;
">

  <blockquote style="
      border-left: 4px solid #8B0000;
      padding-left: 20px;
      margin: 0;
      font-style: italic;
      font-size: 1.1em;
      line-height: 1.2;
      color: #8B0000;
      font-family: 'Cormorant Garamond', serif;
      text-align: justify;
  ">
    Every honest researcher I know admits he's just a professional amateur.
    He's doing whatever he's doing for the first time. That makes him an amateur.
    He has sense enough to know that he's going to have a lot of trouble,
    so that makes him a professional.
  </blockquote>

  <div style="
      margin-top: 10px;
      text-align: right;
      color: #555555;
      font-size: 0.95em;
      font-family: Georgia, serif;
  ">
      — Charles Franklin Kettering
  </div>

</div>

<div style="width:850px; max-width:100%; margin:25px auto; border:1px solid #ddd; border-radius:8px; overflow:hidden; background:white;">
<div style="aspect-ratio:3/2 overflow:hidden;">
  <img id="photo-window"
      src="/images/photoes/photo1.png"
      alt="Photo gallery"
      style="width:100%; height:auto; display:block; opacity:1; object-fit:contain; background:white; transition:opacity 0.8s ease-in-out;">
  </div>
  <div id="photo-caption"
        style="padding:7px; text-align:center; font-size:0.9em; color:#666;">
      A lazy afternoon at IITM.
  </div>
</div>

<script>
const gallery = [
  {
    src: "/images/photoes/photo1.png",
    caption: "A lazy summar afternoon at IIT Madras."
  },
  {
    src: "/images/photoes/photo2.png",
    caption: "IITM-Deakin Student Symposium 2026."
  },
  {
    src: "/images/photoes/photo3.png",
    caption: "Black Buck of IITM Campus."
  },
  {
    src: "/images/photoes/photo4.png",
    caption: "Spotted Deer."
  },
  {
    src: "/images/photoes/photo5.png",
    caption: "Remote Mountain Hamlets of North Sikkim."
  }
];

let index = 0;

setInterval(function () {

  const img = document.getElementById("photo-window");

  img.style.opacity = 0;

  setTimeout(function () {

    index = (index + 1) % gallery.length;

    img.src = gallery[index].src;

    document.getElementById("photo-caption").innerText =
      gallery[index].caption;

    img.style.opacity = 1;

  }, 400);

}, 4000);
</script>

<div style="text-align: justify !important;">
<!-- <p style="text-align: justify;"> -->
<p style="margin-bottom:20px;text-align: justify;">
  Hi there 👋! I am
  <b>
    Agrya
      <span style="font-size:0.95em;"> (অগ্র্য)</span>
    <a href="#"
   onclick="document.getElementById('name-audio').play(); return false;"
   style="text-decoration:none;">
    <img src="/images/speaker.png"
         alt="Pronunciation"
         style="width:16px;height:16px;vertical-align:super;margin-left:0px;border:none;">
    </a>
  </b>

  <audio id="name-audio">
    <source src="/files/agrya_pronunciation.mp3" type="audio/mpeg">
  </audio>

  , a Research Scholar in the Rehabilitation Bioengineering Group (RBG Labs) at Indian Institute of Technology Madras, advised by Prof. <a target="_blank" href="https://ed.iitm.ac.in/~vb/rbg/Home.html">Venkatesh Balasubramanian (IITM)</a>, Prof. <a target="_blank" href="https://experts.deakin.edu.au/41903-farnad-nasirzadeh">Farnad Nasirzadeh (DRA)</a>, and Dr. <a target="_blank" href="https://experts.deakin.edu.au/50940-ahsan-habib">Ahsan Habib (DRA)</a>. My research is supported by <b>IITMadras-Deakin Research Academy</b> Joint Doctoral Program.
</p>

<p style="text-align: justify;">
  <b>Prior</b>. I worked as a <b>research personnel</b> in the Bioinformatics Lab of Machine Intelligence Unit (MIU) at Indian Statistical Institute (ISI) Kolkata, under the guidance of Prof. <a target="_blank" href="https://scholar.google.com/citations?user=mHrEBuUAAAAJ&hl=en">Sanghamitra Bandyopadhyay</a> and Dr. <a target="_blank" href="https://scholar.google.com/citations?user=SU4RiSEAAAAJ&hl=en">Abhik Ghosh</a>. I was also a <b>Senior Research Fellow</b> in the Pattern Recognition Lab of Dept. of Computer Science and Engineering. at <b>Indian Institute of Technology (BHU), Varanasi</b>. My research was focused on building advanced video surveillance algorithms and tracking models in the area of Computer Vision like Multi-Object Tracking, Image De-identification, and Video Prediction. My research was supported by <a target="_blank" href="https://www.serbonline.in/SERB/HomePage">SERB Core Research Fellowship</a> in Image and Video Processing of Machine Learning.
</p>
</div>

<!-- I received a Master degree in Computer Science from [Banaras Hindu University](https://www.bhu.ac.in/) in 2020 and Bachelor degree with Honours from [University of Calcutta](https://www.caluniv.ac.in/) in 2018. During 2021-22, I also worked as a Data Science Intern at [Sciffer Analytics](https://www.sciffer.com/). -->


<!-- <div style="width:704px; max-width:100%; margin:25px auto; border:1px solid #ddd; border-radius:8px; overflow:hidden; background:white;">

  <img id="photo-window"
       src="/images/photoes/photo1.png"
       alt="Photo gallery"
       style="width:100%; height:auto; display:block;">

  <div id="photo-caption"
       style="padding:10px; text-align:center; font-size:0.9em; color:#666;">
    Presenting research at IIT Madras.
  </div>

</div>

<script>
const gallery = [
  {
    src: "/images/photoes/photo1.png",
    caption: "Presenting research at IIT Madras."
  },
  {
    src: "/images/photoes/photo2.png",
    caption: "Participating in an academic conference."
  },
  {
    src: "/images/photoes/photo3.png",
    caption: "Research activities in the laboratory."
  }
];

let index = 0;

setInterval(function () {
  index = (index + 1) % gallery.length;

  document.getElementById("photo-window").src =
      gallery[index].src;

  document.getElementById("photo-caption").innerText =
      gallery[index].caption;

}, 4000);
</script> -->


Research Interests
==================

<!-- <span class="small_font">My interest lies at the intersection of <b>Multi-Object Tracking models and Image De-identification</b>. Specifically, I am interested in designing improved and advanced algorithms in the world of video surveillance to enable individuals being tracked while obfuscating their privacy preserving identities. This way, a person can be de-identified in control manner while achieving a greater frame-to-frame tracking performance. <br>&emsp;&emsp;&emsp;Today, identity of subjects gets disclosed in videos captured by surveillance cameras without their consent. But they are limiting in many ways - they are high dimensional, discrete, and, most importantly, incomplete -- they do not sense the underlying structure and only capture explicit values at specific locations. I am more interested in <b>implicit representations</b> of the world and how to design improved task-specific representations. Ultimately,My research focuses on building advanced video surveillance algorithms and tracking models in the area of [Computer Vision](https://en.wikipedia.org/wiki/Computer_vision) like Multi-Object Tracking, Image De-identification, and Video Prediction!</span> -->

<!-- <span class="small_font">My current research interest focuses on the <b>objective assessment of mental fatigue using multi-modal feature fusion</b>, particularly in safety-critical occupational environments such as construction, transport, and mining. Mental fatigue, resulting from prolonged cognitive demand, physical exertion, or inadequate sleep, poses a significant risk to human performance, decision-making, and workplace safety. In the short term, fatigue increases the likelihood of errors, injuries, and accidents, while prolonged exposure can lead to serious health conditions, including cardiovascular disease, metabolic disorders, and work-related musculoskeletal problems.
My work aims to address the limitations of traditional fatigue assessment approaches, which rely heavily on subjective self-reporting and are often biased and inconsistent. My research proposes integrating facial behavioral cues, physiological signals, and contextual information such as age, experience, and environmental conditions through multi-modal feature fusion and machine learning techniques. This approach seeks to enable accurate, continuous, and robust mental fatigue detection in real-world settings.
Ultimately, my research aims to enhance occupational safety, reduce fatigue-related incidents, and contribute to sustainable human-centered system design across diverse industrial sectors.
</span> -->
<!-- <div class="small_font" style="text-align: justify;"> -->
<div style="text-align: justify !important;">
<p style="text-align: justify;">
My current research interest focuses on the <b>objective assessment of mental fatigue using multi-modal feature fusion</b>, particularly in safety-critical occupational environments such as construction, transport, and mining. Mental fatigue, resulting from prolonged cognitive demand, physical exertion, or inadequate sleep, poses a significant risk to human performance, decision-making, and workplace safety. In the short term, fatigue increases the likelihood of errors, injuries, and accidents, while prolonged exposure can lead to serious health conditions, including cardiovascular disease, metabolic disorders, and work-related musculoskeletal problems.
My work aims to address the limitations of traditional fatigue assessment approaches, which rely heavily on subjective self-reporting and are often biased and inconsistent. My research proposes integrating facial behavioral cues, physiological signals, and contextual information such as age, experience, and environmental conditions through multi-modal feature fusion and machine learning techniques. This approach seeks to enable accurate, continuous, and robust mental fatigue detection in real-world settings.
Ultimately, my research aims to enhance occupational safety, reduce fatigue-related incidents, and contribute to sustainable human-centered system design across diverse industrial sectors.
</p>
</div>
