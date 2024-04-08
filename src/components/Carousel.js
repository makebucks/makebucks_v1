import { useState } from 'react';
import faqData from '../utils/data';
const Carousle = () =>{
    const [questions, setQuestions] = useState(faqData)
    return(
        <>
            <h2>Carousel</h2>
        </>
    )
}
export default Carousle;