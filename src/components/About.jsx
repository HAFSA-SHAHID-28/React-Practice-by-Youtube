import React, { useState } from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })






    return (
        <>

            <div className="container" style={myStyle}>
                <h1 className='my-3'>About Us</h1>
                <div className="accordion">
                    <details className="accordion-item" name="accordionExample" open>
                        <summary className="accordion-header" style={myStyle}>
                            Accordion Item #1
                            <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m2 5 6 6 6-6" /></svg>
                        </summary>
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the first item’s accordion body.</strong> It is shown by default because the <code>open</code> attribute is present. The native <code>&lt;details&gt;</code> element handles all the show/hide logic without any JavaScript. You can put any HTML content within the <code>.accordion-body</code>.
                        </div>
                    </details>
                    <details className="accordion-item" name="accordionExample" style={myStyle}>
                        <summary className="accordion-header" style={myStyle}>
                            Accordion Item #2
                            <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m2 5 6 6 6-6" /></svg>
                        </summary>
                        <div className="accordion-body"style={myStyle}>
                            <strong>This is the second item’s accordion body.</strong> The <code>name</code> attribute groups this with other accordion items. When you open this item, any other open item in the same group will close automatically.
                        </div>
                    </details>
                    <details className="accordion-item" name="accordionExample">
                        <summary className="accordion-header" style={myStyle}>
                            Accordion Item #3
                            <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m2 5 6 6 6-6" /></svg>
                        </summary>
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the third item’s accordion body.</strong> This exclusive accordion behavior is built into the browser—no Bootstrap JavaScript required. Just use matching <code>name</code> attributes on your <code>&lt;details&gt;</code> elements.
                        </div>
                    </details>
                </div>
               
            </div>


        </>
    )
}
