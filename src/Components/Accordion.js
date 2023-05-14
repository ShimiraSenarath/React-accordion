import React, { useState } from "react";
import "../Components/Accordion.css"

const dataCollection = [
    {
      question: 'Section 1',
      answer: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      question: 'Section 2',
      answer: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      question: 'Section 3',
      answer: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];



function Accordion(){

    const [accordion, setActiveAccordion] = useState(0);

    function toggleAccordion(index){
        // if(index === accordion){
        //     setActiveAccordion(-1)
        //     return
        // }
        setActiveAccordion(index);
    }


    return(
        <>
        <div className="accordion-container">
            <div>
                <span className="accordion-title">Asked Questions</span>
                <h1>Let answer some of your question</h1>
            </div>
            <div className="accordion-faq">
                {dataCollection.map((item, index) =>
                    <div key={index} onClick={()=> toggleAccordion(index)} className="accordion-wrap">
                        <div className="accordion-faq-heading-wrap">
                            <div className="accordion-faq-heading">
                                <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
                            </div>
                            <div>
                                {accordion === index ? (
                                    <>
                                        <span className="verticle">-</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="verticle">+</span>
                                    </>
                                )}
                                
                            </div>
                        </div>
                        <div>
                            <p className={accordion === index ? "active" : "inactive"}>{item.answer}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>

        </>
    )
}
export default Accordion