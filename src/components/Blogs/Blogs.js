import React from 'react';

const Blogs = () => {
    return (
        <div>
           <div className="semantic m-3">
                <h2 className='text-3xl text-purple-600 font-serif'>What is semantic tag?</h2>
                <p className='text-xl'>Semantic HTML elements are those that express their meaning in a way that is both human and machine readable. Header, footer, table,form and article elements are all deemed semantic since they accurately explain the element's purpose and the sort of material it contains.</p>
           </div>
           <div className='m-3'>
           <h2 className='text-3xl text-green-600 font-serif'>Difference between block and inline block element?</h2>
           <p className='text-xl'>Block elements are blocks that have many elements in a single line. While inline elements take up the entire width of a line, there will only be one line within the space width. Inline elements do not respect the top and bottom margins, but only the left and right, and they also take padding into account.</p>
           </div>
           <div className='m-3'>
           <h2 className='text-3xl text-orange-600 font-serif'>What is Context API?</h2>
               <p className='text-xl'>The React Context API allows a React app to generate global variables that can be passed around. This is an alternative to "prop drilling," which involves passing props from grandparent to child to parent, and so on. Context is also marketed as a simpler, lighter approach to Redux state management.</p>
           </div>
        </div>
    );
};

export default Blogs;