// ========== Your links — paste the real URLs here ==========
const LINKS = {
  maps: "https://maps.app.goo.gl/LBWWjUG2cNhsHyP2A",
  instagram: "https://www.instagram.com/nexoragaminglounge/",
  tiktok: "https://www.tiktok.com/@nexoragaminglounge",
  facebook: "https://www.facebook.com/profile.php?id=61594216934378",
};

document.querySelectorAll("[data-link]").forEach((a) => {
  a.href = LINKS[a.dataset.link];
});

// ========== Share button ==========
const shareBtn = document.getElementById("shareBtn");
const shareLabel = document.getElementById("shareLabel");

shareBtn.addEventListener("click", async () => {
  const data = { title: "NEXORA Gaming Lounge", url: location.href.split("#")[0] };

  if (navigator.share) {
    try { await navigator.share(data); } catch (_) { /* user closed the sheet */ }
    return;
  }

  try {
    await navigator.clipboard.writeText(data.url);
    shareLabel.textContent = "COPIED";
  } catch (_) {
    shareLabel.textContent = "COPY FAILED";
  }
  setTimeout(() => (shareLabel.textContent = "SHARE"), 1800);
});
