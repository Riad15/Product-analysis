import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>
            <div>
                <h1>what is context api and how is it works in react ?</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using .
                    This new API solves one major problem–prop drilling.  React.js app, Prop drilling is the processing of getting data from component A to component Z by passing it through multiple layers of intermediary React components. The component will receive props indirectly and you, the React Developer will have to ensure everything works outright.</p>
            </div>
            <div>
                <h1> what is the meaning of semantic tag in html ?</h1>
                <p>HTML was originally created as a markup language to describe documents on the early internet. As the internet grew and was adopted by more people, its needs changed.

                    Where the internet was originally intended for sharing scientific documents, now people wanted to share other things as well. Very quickly, people started wanting to make the web look nicer.

                    Because the web was not initially built to be designed, programmers used different hacks to get things laid out in different ways. Rather than using the to describe information using a table, programmers would use them to position other elements on a page.

                    As the use of visually designed layouts progressed, programmers started to use a generic “non-semantic” tag like . They would often give these elements a class or id attribute to describe their purpose. For example, instead of

                    As HTML5 is still relatively new, this use of non-semantic elements is still very common on websites today.</p>
            </div>
            <div>
                <h1>Differences between Block and Inline-block :</h1>
                <section className='diffrent'>
                    <div>
                        <h4>Block</h4>
                        <p>A block element begins on a new line.Examples: div, p, li, main, etc.CSS property: display:block</p>
                    </div>
                    <div>
                        <h4>Inline-block</h4>
                        <p>It remains inline with all the text around the element and appears the same as inline.	It has no tag examples as it can be applied to any tag using CSS.CSS property: display:inline-block</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Blogs;