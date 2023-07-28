import React from 'react';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const Blog = () => {
    const ref = React.createRef();
    
    return (
        <div className='px-8 py-4  font-family: sans-serif;
        text-align: center;'>
            <div className='items-center text-center justify-center'>
                <Pdf targetRef={ref} filename="Interview-Question.pdf">
                    {({ toPdf }) => <button className='text-center btn btn-outline btn-success' onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
            </div>

            <div ref={ref}>
                <p className='font-bold text-2xl text-center'>Ans of Given Question</p>

                <p className='font-bold text-2xl '>1. The differences between uncontrolled and controlled components.</p>
                <p className='text-2xl ml-6'>A controlled component receives its current value and an update callback via props, and the parent component manages the state of the component. When the user interacts with the component, the parent component updates the state, which in turn updates the component's value.<br />  An uncontrolled component, maintains its own internal state, and when the user interacts with the component, it updates its own state, which in turn updates the component's value.</p>
                <p className='font-bold text-2xl'>2.How to validate React props using PropTypes?</p>
                <p className='text-2xl ml-6'>Ans: </p>
                <p className='font-bold text-2xl'>3.The difference between nodejs and express js.</p>
                <p className='text-2xl ml-6'>Node.js is a run-time environment created to run JavaScript on the server side.
                    Express.js is a framework for Node.js, so in order to use it, you will use Node.js anyway.<br />  Express.js will help you organize your application better. It provides many features which will speed up the development for example mechanism for middlewares, more efficient REST support or robust routing.</p>
                <p className='font-bold text-2xl'>4.What is a custom hook, and why will you create a custom hook?</p>
                <p className='text-2xl ml-6'>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. <br /> Custom React JS hooks offer three major benefits over standard library hooks: <br /> Reusability, <br /> readability, <br /> and testability.</p>

            </div>


        </div>
    );
};

export default Blog;