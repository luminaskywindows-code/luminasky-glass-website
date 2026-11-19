import Script from "next/script";

const CLARITY_PROJECT_ID = "z3jx92wo61";

export function ClarityInit() {
  return (
    <Script id="clarity-deferred" strategy="lazyOnload">
      {`(function(){var d=false;function l(){if(d)return;d=true;(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","${CLARITY_PROJECT_ID}")}["click","scroll","keydown"].forEach(function(e){document.addEventListener(e,l,{once:true,passive:true})});setTimeout(l,7000)})();`}
    </Script>
  );
}
