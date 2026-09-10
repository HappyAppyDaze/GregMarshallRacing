const posts = [
  {
    title:"Best result of season for Greg Marshall at Donington Park",
    date:"13 July 2026",
    img:"https://gregmarshallracing.com/wp-content/uploads/2026/07/whatsapp-image-2026-07-13-at-09.35.51.jpeg",
    text:"Greg Marshall produced his best result of the 2026 Yamaha R3 BLU CRU World Cup season at his home round at Donington Park."
  },
  {
    title:"Back to Back Yamaha R3 World Cup points for Greg Marshall",
    date:"1 June 2026",
    img:"https://gregmarshallracing.com/wp-content/uploads/2026/06/3b75fb08-dcc2-0997-453e-49f5d133da43.jpg",
    text:"Greg continued to impress in the Yamaha R3 BLU CRU World Cup with back-to-back points finishes at MotorLand Aragon."
  },
  {
    title:"Greg Marshall bags Yamaha R3 World Cup points on debut at Balaton Park",
    date:"4 May 2026",
    img:"https://gregmarshallracing.com/wp-content/uploads/2026/05/a27a0f74-19df-d4cd-5ad5-e6608e70b10f.jpg",
    text:"A point-scoring debut in the 2026 FIM Yamaha BLU CRU World Cup at Balaton Park gave Greg a strong start to the season."
  },
  {
    title:"Greg announces launch of new website",
    date:"22 April 2026",
    img:"https://gregmarshallracing.com/wp-content/uploads/2026/04/2026_r3_blu_cru_cremona_test_thursday-0424_preview.jpg",
    text:"The new Greg Marshall Racing website launched ahead of the 2026 World Cup campaign."
  },
  {
    title:"Greg Marshall’s 2026 Season gets underway at Cremona",
    date:"10 April 2026",
    img:"https://gregmarshallracing.com/wp-content/uploads/bfi_thumb/greg-marshall-cremona-2026-1-rm1craxdhfozgni7t4tjnnvl3guydjtjyvtsunm20o.jpg",
    text:"Testing at Cremona marked the start of Greg's 2026 campaign with AG Motorsport Italia."
  },
  {
    title:"Greg Marshall joins AG Motorsport Italia for 2026 FIM R3 BLU CRU World Cup campaign",
    date:"16 November 2025",
    img:"https://gregmarshallracing.com/wp-content/uploads/2025/11/logo.png",
    text:"Greg joined AG Motorsport Italia for his 2026 Yamaha R3 BLU CRU World Cup campaign."
  }
];

const albums = [
  ["#DoningtonWorldSBK 2026","https://gregmarshallracing.com/wp-content/uploads/bfi_thumb/greg-marshall-aragon-worldsbk-2026-6-rof0a4dwf7nr0jwpyfwmlh97aadqxh70nmefewp2uw.jpg"],
  ["#AragonWorldSBK 2026","https://gregmarshallracing.com/wp-content/uploads/bfi_thumb/greg-marshall-aragon-worldsbk-2026-6-rof0a4dwf7nr0jwpyfwmlh97aadqxh70nmefewp2uw.jpg"],
  ["#HungarianWorldSBK 2026","https://gregmarshallracing.com/wp-content/uploads/bfi_thumb/55242466281_1e9f5f318c_o-rn0kvjwck26jbj2eqkig7h6fs6qfpg338jdvkmkfqw.jpg"],
  ["Cremona Test 2026","https://gregmarshallracing.com/wp-content/uploads/bfi_thumb/greg-marshall-cremona-2026-1-rm1craxdhfozgni7t4tjnnvl3guydjtjyvtsunm20o.jpg"],
  ["2026 BLU CRU launch","https://gregmarshallracing.com/wp-content/uploads/bfi_thumb/2026_r3_blu_cru_cremona_test_thursday-3465_preview-rlsztgsa6gzjvg9bt5c00jlhj3gqb08kgd9agj1ubc.jpg"],
  ["2025","https://gregmarshallracing.com/wp-content/uploads/bfi_thumb/greg-marshall-2025-4-rdiztid6jbesoov30mu42ryrptblahf8ggqoelfquw.jpg"],
  ["Moto3 Wildcards 2023-2024","https://gregmarshallracing.com/wp-content/uploads/bfi_thumb/greg-marshall-moto3-5-rdizvaa7g1uam6a8negqsbu440kjtwgzd93p1esz3s.jpg"],
  ["2024","https://gregmarshallracing.com/wp-content/uploads/bfi_thumb/greg-marshall-2024-3-rdizrdaeywha8nz1ipipebez07vhrax8tv8v1wm114.jpg"],
  ["2023","https://gregmarshallracing.com/wp-content/uploads/bfi_thumb/greg-marshall-2023-8-rdiw7ptgtvqfj3e7x13oa12erf1zf35jm1rzs3vs1k.jpg"],
  ["2022","https://gregmarshallracing.com/wp-content/uploads/bfi_thumb/greg-marshall-2022-6-rdiw53tlug5ra36r5wgzcosbcvxa1csdx4jfsfr5bs.jpg"]
];

const sponsors = [
  ["https://gregmarshallracing.com/wp-content/uploads/2025/11/greg-marshall-racing-sponsors-_0015_vector-smart-object.png","HEL"],
  ["https://gregmarshallracing.com/wp-content/uploads/2026/04/helmet-city-.png","Helmet City"],
  ["https://gregmarshallracing.com/wp-content/uploads/2025/11/greg-marshall-racing-sponsors-_0014_layer-1.png","R&G"],
  ["https://gregmarshallracing.com/wp-content/uploads/2026/01/greg-marshall-racing-sponsors-_4sr.png","4SR"],
  ["https://gregmarshallracing.com/wp-content/uploads/2025/11/greg-marshall-racing-sponsors-_0000_vector-smart-object.png","Team Marshall Racing"],
  ["https://gregmarshallracing.com/wp-content/uploads/2025/11/greg-marshall-racing-sponsors-_0011_layer-4.png","51's"],
  ["https://gregmarshallracing.com/wp-content/uploads/2025/11/greg-marshall-racing-sponsors-_0001_vector-smart-object.png","Michael Hill Promotions"],
  ["https://gregmarshallracing.com/wp-content/uploads/2025/11/greg-marshall-racing-sponsors-_0000_vector-smart-object-1.png","Vroom Media"]
];

const app = document.getElementById("app");
const nav = document.querySelector(".nav");
const menuToggle = document.querySelector(".menu-toggle");

function shell(content){ return content; }

function home(){
  return shell(`
  <section class="hero">
    <img src="https://gregmarshallracing.com/wp-content/uploads/2026/04/2026_r3_blu_cru_cremona_test_thursday-0424_preview.jpg" alt="Greg Marshall on Yamaha R3">
    <div class="hero-content">
      <div class="hero-kicker">#95 • AG Motorsport Italia</div>
      <h1>Greg <span>Marshall</span></h1>
      <div class="hero-sub">2026 Yamaha R3 BLU CRU World Cup</div>
      <div class="hero-team">FIM Superbike World Championship paddock</div>
      <a class="cta" href="#news">LATEST NEWS</a>
    </div>
  </section>
  <section class="section">
    <h2 class="section-title">Latest <span>News</span></h2>
    <p class="section-intro">Race reports, results and updates from Greg's 2026 Yamaha R3 BLU CRU World Cup campaign.</p>
    <div class="news-grid">${posts.slice(0,3).map(postCard).join("")}</div>
  </section>
  <section class="section-dark">
    <div class="section-inner">
      <h2 class="section-title">Official <span>Merchandise</span></h2>
      <p class="section-intro" style="color:#aaa">Get Greg Marshall official merchandise online today.</p>
      <div class="merch-grid">
        ${["GM95 Crop Hoodie","GM95 Hoodie","GM Bobble Hat","GM Cap","95 Bobble Hat","GM95 Cotton T-Shirt","GM95 Sports T-Shirt"].map((x,i)=>`
          <a class="product" href="https://gregmarshall95.myshopify.com/" target="_blank" rel="noopener">
            <div class="product-art">${i%2?"GM95":"95"}</div><h3>${x}</h3><p>Shop online ↗</p>
          </a>`).join("")}
      </div>
    </div>
  </section>
  <section class="section">
    <h2 class="section-title">Thanks to my <span>Sponsors & Suppliers</span></h2>
    <div class="sponsor-grid">${sponsors.map(sponsorCard).join("")}</div>
  </section>`);
}

function postCard(p){
  return `<article class="card"><img class="card-img" src="${p.img}" alt="" onerror="this.style.visibility='hidden'"><div class="card-body"><div class="date">${p.date}</div><h3>${p.title}</h3><p>${p.text}</p><a class="read-more" href="#news">Read more →</a></div></article>`;
}
function sponsorCard(s){
  return `<div class="sponsor"><img src="${s[0]}" alt="${s[1]}" onerror="this.outerHTML='<div class=&quot;sponsor-text&quot;>${s[1]}</div>'"></div>`;
}

function news(){
  return `<section class="section"><h1 class="section-title">Latest <span>News + Race Reports</span></h1>
  <p class="section-intro">Follow Greg's 2026 season with race reports and team updates.</p>
  <div class="news-grid">${posts.map(postCard).join("")}</div></section>`;
}

function photos(){
  return `<section class="section"><h1 class="section-title">Photo <span>Albums</span></h1>
  <p class="section-intro">Images from Greg's racing career, from the 2026 BLU CRU World Cup back through his early championship seasons.</p>
  <div class="album-grid">${albums.map(a=>`<figure class="album" data-img="${a[1]}"><img src="${a[1]}" alt="${a[0]}"><figcaption>${a[0]}</figcaption></figure>`).join("")}</div></section>`;
}

function about(){
  return `<section class="section"><div class="about-grid">
    <div><h1 class="section-title">About <span>Greg</span></h1>
      <div class="about-copy">
      <p>Yorkshire rider Greg Marshall has been racing motorbikes since he was nine years old. Beginning his racing career within the FAB-Racing series in 2017, he progressed through the AC40-Pro minimoto, GP70 and Extreme200 classes.</p>
      <p>In 2022 he stepped up to the ACU Team Green Junior Cup. In 2023 Greg competed in the British Junior Supersport Championship and also made a wildcard appearance in the British Talent Cup.</p>
      <p>In 2024 he ran independently under his own Team Marshall Racing banner. In 2025 the #95 joined the ROKiT Rookies team, finishing sixth overall and taking his first British Championship podium.</p>
      <p>For 2026 Greg is competing in the Yamaha R3 BLU CRU World Cup with AG Motorsport Italia, racing alongside the FIM Superbike World Championship.</p>
      </div>
    </div>
    <div><h2 class="section-title">Career <span>Stats</span></h2>
      <div class="stats-grid">
        <div class="stat"><strong>2025</strong><span>BSB British Superteen · 6th overall · Best 3rd</span></div>
        <div class="stat"><strong>2024</strong><span>BSB British Superteen · 11th · Best 5th</span></div>
        <div class="stat"><strong>2023</strong><span>British Junior Supersport · 20th · Best 10th</span></div>
        <div class="stat"><strong>2022</strong><span>Team Green Junior Cup · 10th · Best 4th</span></div>
        <div class="stat"><strong>2021</strong><span>FAB-Racing GP70 / Extreme 200 · Best 3rd</span></div>
        <div class="stat"><strong>2017–20</strong><span>FAB-Racing minimotos · Winter Series champion 2018–19</span></div>
      </div>
    </div>
  </div></section>`;
}

function season2026(){
  return `<section class="section"><h1 class="section-title">The <span>2026 Season</span></h1>
    <p class="section-intro">Yamaha R3 BLU CRU World Cup with AG Motorsport Italia.</p>
    <div class="timeline">
      <div class="timeline-item"><h3>Cremona — Pre-season testing</h3><p>Testing and preparation for Greg's first BLU CRU World Cup campaign.</p></div>
      <div class="timeline-item"><h3>Balaton Park — Hungary</h3><p>World Cup debut. Greg scored his first championship point with a 15th-place finish in race two.</p></div>
      <div class="timeline-item"><h3>MotorLand Aragón — Spain</h3><p>Back-to-back points finishes and a strong weekend in the World Superbike paddock.</p></div>
      <div class="timeline-item"><h3>Donington Park — UK</h3><p>Greg's home round and his best result of the season to date.</p></div>
    </div>
    <table class="schedule"><thead><tr><th>Campaign</th><th>Class</th><th>Team</th><th>Bike</th></tr></thead>
    <tbody><tr><td>2026</td><td>Yamaha R3 BLU CRU World Cup</td><td>AG Motorsport Italia</td><td>Yamaha R3</td></tr></tbody></table>
  </section>`;
}

function sponsorPage(){
  return `<section class="section"><h1 class="section-title">Sponsors & <span>Suppliers</span></h1>
    <p class="section-intro">Greg Marshall Racing is proud to work with the businesses supporting the #95.</p>
    <div class="sponsor-grid">${sponsors.map(sponsorCard).join("")}</div>
  </section>`;
}

function render(){
  const route = location.hash.replace("#","") || "home";
  const routes = {home,news,photos,about,"2026":season2026,sponsors:sponsorPage};
  app.innerHTML = (routes[route] || home)();
  document.querySelectorAll(".nav a").forEach(a=>{
    const href=a.getAttribute("href").replace("#","");
    a.classList.toggle("active",href===route);
  });
  nav.classList.remove("open"); menuToggle.setAttribute("aria-expanded","false");
  document.querySelectorAll(".album").forEach(el=>el.addEventListener("click",()=>{
    document.getElementById("lightbox-img").src=el.dataset.img;
    document.getElementById("lightbox").classList.add("open");
    document.getElementById("lightbox").setAttribute("aria-hidden","false");
  }));
  window.scrollTo({top:0,behavior:"instant"});
}
menuToggle.addEventListener("click",()=>{nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",nav.classList.contains("open"))});
window.addEventListener("hashchange",render);
document.querySelector(".lightbox-close").addEventListener("click",closeLightbox);
document.getElementById("lightbox").addEventListener("click",e=>{if(e.target.id==="lightbox")closeLightbox()});
function closeLightbox(){document.getElementById("lightbox").classList.remove("open");document.getElementById("lightbox").setAttribute("aria-hidden","true")}
render();
