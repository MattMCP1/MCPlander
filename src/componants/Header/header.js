import Nav from "./nav";
import React from "react";
const Header = () => {
  return (
    <>
      <head>
        <title>KWR</title>
        <link rel="stylesheet" href="../src/styles/index.scss" />
        <link rel="icon" href="./logo.png"></link>

        <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        ></script>
        <React.Fragment>
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '349016657222485');
      fbq('track', 'PageView');`,
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=349016657222485&ev=PageView&noscript=1" />`,
            }}
          />
        </React.Fragment>
      </head>

      <Nav />
    </>
  );
};

export default Header;
