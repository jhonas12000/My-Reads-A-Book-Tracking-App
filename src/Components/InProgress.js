import React from 'react'
import { Card, CardImg, CardText } from 'reactstrap';

function InProgress(props) {
    console.log(props.books)
    const inProgress = props.books.filter(book => book.year === "in progress").map(book => {
        return (
            <div  className='col-sm-4 m-1'>
                <Card >
                    <CardImg src={book.image} width='250' height='300' alt={book.title}/>
                    <CardText>{`Published in ${book.published}`}</CardText>
                </Card>
            </div>
        )
    })

    return (
        <div className='container'>
           <div className='row'>
               {inProgress}
           </div>
        </div>
    )
}

export default InProgress
