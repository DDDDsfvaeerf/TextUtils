import React from 'react'
export default function About(props) {

    // const[myStyle, setMyStyle] = useState({
    //     color: '#13175d',
    //     backgroundColor: 'white',
    //     border: '0.5px solid white'
    // }) 
    
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark'? 'rgb(36 74 104)':'white',
    }

    return (
        <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h2 className='mt-4'>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils gives a way to analyze your text quickly and efficiently. Be it word count or count of characters.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free To use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. It reports the number of words and characters . Thus, it is suitable for writing texts within word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            This word counter works in any web browsers such as Chrome, Brave, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook posts, blogs, books, word & excel documents, pdfs, essays and many more.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container mt-4">
                <button type="button" className="btn btn-primary" onClick={toggleStyle}>{button}</button>
            </div> */}
        </div>
    )
}
