import React from 'react'; 
import { Card, CardImg, CardText } from 'reactstrap';


function Future (props) {
    const future = props.books.filter((book) => book.year == 'for-future').map(book => {
        return (
            <div key={book.id} className='col-sm-4 m-1' >
                <Card >
                    <CardImg src={book.image} width='250' height='300' alt={book.title}/>
                    <CardText>{`Published in ${book.published}`}</CardText>
                </Card>
            </div>
        )
    })
    return(
        <div className='container'>
            <div className='row'>
                {future}
            </div>
        </div>
    )
}

export default Future;