async function main() {
  const key = "9a7b5b9906e245f1bf7ecb9f10d723a0";
  const host = "www.luminasky.com";

  const urls = [
    "https://www.luminasky.com/",
    "https://www.luminasky.com/about",
    "https://www.luminasky.com/contact",
    "https://www.luminasky.com/faq",
    "https://www.luminasky.com/gallery",
    "https://www.luminasky.com/projects",
    "https://www.luminasky.com/services",
    "https://www.luminasky.com/areas-we-serve",
    "https://www.luminasky.com/privacy-policy",
    "https://www.luminasky.com/winter-ready",
    "https://www.luminasky.com/foggy-windows",
    "https://www.luminasky.com/front-door-glass",
    "https://www.luminasky.com/cranks",
    "https://www.luminasky.com/screen-storm-doors",
    "https://www.luminasky.com/skylights",
    "https://www.luminasky.com/window-screens",
    "https://www.luminasky.com/window-replacement",
    "https://www.luminasky.com/window-repair-ajax",
    "https://www.luminasky.com/window-repair-aurora",
    "https://www.luminasky.com/window-repair-brampton",
    "https://www.luminasky.com/window-repair-burlington",
    "https://www.luminasky.com/window-repair-caledon",
    "https://www.luminasky.com/window-repair-etobicoke",
    "https://www.luminasky.com/window-repair-king-city",
    "https://www.luminasky.com/window-repair-maple",
    "https://www.luminasky.com/window-repair-markham",
    "https://www.luminasky.com/window-repair-milton",
    "https://www.luminasky.com/window-repair-mississauga",
    "https://www.luminasky.com/window-repair-newmarket",
    "https://www.luminasky.com/window-repair-north-york",
    "https://www.luminasky.com/window-repair-oakville",
    "https://www.luminasky.com/window-repair-pickering",
    "https://www.luminasky.com/window-repair-richmond-hill",
    "https://www.luminasky.com/window-repair-scarborough",
    "https://www.luminasky.com/window-repair-thornhill",
    "https://www.luminasky.com/window-repair-toronto",
    "https://www.luminasky.com/window-repair-vaughan",
    "https://www.luminasky.com/window-repair-whitby",
    "https://www.luminasky.com/window-repair-woodbridge",
    "https://www.luminasky.com/foggy-glass-repair-ajax",
    "https://www.luminasky.com/foggy-glass-repair-aurora",
    "https://www.luminasky.com/foggy-glass-repair-brampton",
    "https://www.luminasky.com/foggy-glass-repair-burlington",
    "https://www.luminasky.com/foggy-glass-repair-caledon",
    "https://www.luminasky.com/foggy-glass-repair-etobicoke",
    "https://www.luminasky.com/foggy-glass-repair-king-city",
    "https://www.luminasky.com/foggy-glass-repair-maple",
    "https://www.luminasky.com/foggy-glass-repair-markham",
    "https://www.luminasky.com/foggy-glass-repair-milton",
    "https://www.luminasky.com/foggy-glass-repair-mississauga",
    "https://www.luminasky.com/foggy-glass-repair-newmarket",
    "https://www.luminasky.com/foggy-glass-repair-north-york",
    "https://www.luminasky.com/foggy-glass-repair-oakville",
    "https://www.luminasky.com/foggy-glass-repair-pickering",
    "https://www.luminasky.com/foggy-glass-repair-richmond-hill",
    "https://www.luminasky.com/foggy-glass-repair-scarborough",
    "https://www.luminasky.com/foggy-glass-repair-thornhill",
    "https://www.luminasky.com/foggy-glass-repair-toronto",
    "https://www.luminasky.com/foggy-glass-repair-vaughan",
    "https://www.luminasky.com/foggy-glass-repair-whitby",
    "https://www.luminasky.com/foggy-glass-repair-woodbridge",
  ];

  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      host,
      key,
      keyLocation: `https://${host}/${key}.txt`,
      urlList: urls,
    }),
  });

  console.log(`Status: ${response.status} ${response.statusText}`);
  const text = await response.text();
  console.log(`Response: ${text || "(empty body is normal for IndexNow success)"}`);
  console.log(`Submitted ${urls.length} URLs`);
}

main().catch(console.error);
