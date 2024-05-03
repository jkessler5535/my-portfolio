import React from 'react';



export default function Stickman (){
  return(
    <div className="container" id="stickman">
      <h1>Hi, Im Stickman.</h1>

      <pre>
        <code>
          <html>
          <head>
            <title>Stick Man HTML</title>
          </head>
          <body>
            <h1>Stick Man</h1>
            <p>Hello, Please cloth me! Im not picky, just feeling a little uncomfortable.</p>

            <div class="stickman">
              <div class="head"></div>
              <div class="body"></div>
              <div class="arm-left"></div>
              <div class="arm-right"></div>
              <div class="leg-left"></div>
              <div class="leg-right"></div>
            </div>
          </body>
          <footer>I'll be back..</footer>
          </html>
        </code>
      </pre>
    </div>
  )
}