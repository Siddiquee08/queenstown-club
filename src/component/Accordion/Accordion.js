import React, { useState } from 'react';
import '../Accordion/Accordion.css'
const Accordion = () => {
    const accordionData = {
    title1: 'How does react work',
    content1: ` While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. `, 
    title2: 'What is difference between props and state in React?',
    content2: `Props are used to pass data from one component to another.Whereas the state is a local data storage that is local to the component only and cannot be passed to other components.`, 
    title3: 'How does the useEffect() works?',
    content3: `By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. ` 
    };

    
    return (
        <div>
            <h1 className='text'>Q & A</h1>
            <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title">
            <div>{accordionData.title1}</div>
          </div>
          <div className="accordion-content">{accordionData.content1}</div>
        </div>
        <div className="accordion-item">
          <div className="accordion-title" >
            <div>{accordionData.title2}</div>
          </div>
          <div className="accordion-content">{accordionData.content2}</div>
        </div>
        <div className="accordion-item">
          <div className="accordion-title" >
            <div>{accordionData.title3}</div>
          </div>
          <div className="accordion-content">{accordionData.content3}</div>
        </div>
      </div>
        </div>
    );
};

export default Accordion;