const modal = document.querySelector(`.modal`);
const loginBtn = document.querySelector(`.login-btn`);
const closeBtn = document.querySelector(`.close`);
const liveSports = document.querySelector(`.live-sports`);

loginBtn.addEventListener(`click`, () => {
  modal.style.display = "block";
});

closeBtn.addEventListener(`click`, () => {
  modal.style.display = "none";
});

window.addEventListener(`click`, (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

liveSports.addEventListener(`click`, (e) => {
  e.preventDefault();
  if (e.target.tagName == "A") {
    if (e.target.textContent == "Breaking News") {
      liveSports.innerHTML = `<div class="live-sports-content">
      <div class="live-categories">
        <a href="#">Live Sports</a><a href="#">Breaking News</a
        ><a href="">Biggest Events</a>
      </div>
      <div class="text-xl">Breaking News</div>
      <div class="sub-text">
      Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.
      </div>

      <div class="live-sports-logos">
        <div>
          <img src="/img/breaking-news-logo-1.png" alt="Logo 1" />
        </div>

        <div><img src="/img/breaking-news-logo-2.svg" alt="Logo 2" /></div>
        <div><img src="/img/breaking-news-logo-3.png" alt="Logo 3" /></div>
        <div><img src="/img/breaking-news-logo-4.svg" alt="Logo 4" /></div>
      </div>

      <div class="legal-text">
        Live TV plan required. Regional restrictions, blackouts and additional
        terms apply. <a href="#" class="sub-link">See details</a>
      </div>
    </div>`;

      liveSports.style.backgroundImage = "url(/img/breaking-news.jpg)";
    } else if (e.target.textContent == "Biggest Events") {
      liveSports.innerHTML = ` <div class="live-sports-content">
      <div class="live-categories">
        <a href="#">Live Sports</a><a href="#">Breaking News</a
        ><a href="">Biggest Events</a>
      </div>
      <div class="text-xl">Biggest Events</div>
      <div class="sub-text">
      Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.
      </div>

      <div class="live-sports-logos">
        <div>
          <img src="/img/biggest-events-logo-1.png" alt="Logo 1" />
        </div>

        <div><img src="/img/biggest-events-logo-2.png" alt="Logo 2" /></div>
        <div><img src="/img/biggest-events-logo-3.png" alt="Logo 3" /></div>
        <div><img src="/img/biggest-events-logo-4.png" alt="Logo 4" /></div>
      </div>

      <div class="legal-text">
        Live TV plan required. Regional restrictions, blackouts and additional
        terms apply. <a href="#" class="sub-link">See details</a>
      </div>
    </div>`;

      liveSports.style.backgroundImage = "url(/img/biggest-events.jpg)";
    } else if (e.target.textContent == "Live Sports") {
      liveSports.innerHTML = ` <div class="live-sports-content">
      <div class="live-categories">
        <a href="#">Live Sports</a><a href="#">Breaking News</a
        ><a href="">Biggest Events</a>
      </div>
      <div class="text-xl">Live Sports</div>
      <div class="sub-text">
        Catch your games at home or on the go. Stream live games from major
        college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.
      </div>

      <div class="live-sports-logos">
        <div>
          <img src="/img/live-sports-logo-1.png" alt="Logo 1" />
        </div>

        <div><img src="/img/live-sports-logo-2.png" alt="Logo 2" /></div>
        <div><img src="/img/live-sports-logo-3.svg" alt="Logo 3" /></div>
        <div><img src="/img/live-sports-logo-4.png" alt="Logo 4" /></div>
      </div>

      <div class="legal-text">
        Live TV plan required. Regional restrictions, blackouts and additional
        terms apply. <a href="#" class="sub-link">See details</a>
      </div>
    </div>`;

      liveSports.style.backgroundImage = "url(/img/live-sports.jpg)";
    }
  }
});
