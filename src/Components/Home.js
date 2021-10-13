import React from 'react';
import { Card, CardBody, CardImg, CardText } from 'reactstrap';


function Home(props) {
    console.log(props)
    return(
        <>
            {props.books.map(book => {
                return (
                    <div className='container'>
                        <div className='row'>
                            <div key={book.id} className='col-sm-4 m-1'>
                                <Card onClick={() => this.onSelectedBook(book)}>
                                    <button>remove</button>
                                    <CardImg src={book.image} width='250' height='300' alt={book.title}/>
                                    <CardText>{`Published in ${book.published}`}</CardText>
                                </Card>
                            </div>
                        
                        </div>
                    </div>
                )
                
            })}
       </> 
    )
}

export default Home;