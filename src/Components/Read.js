import React, { Component} from 'react';
import { Card, CardImg, CardText } from 'reactstrap';


class Read extends Component {

    render () {

        const filteredBooks = this.props.books.filter((book) => book.read == true ).map(book => {
            return (
                <div className='col-sm-4 m-1'>
                   <Card >
                        <CardImg src={book.image} width='250' height='300' alt={book.title}/>
                        <CardText>{`Published in ${book.published}`}</CardText>
                   </Card> 
                </div>
            )
        })
        // console.log(this.props.books)
        // console.log(filteredBooks, "filtered books")
        return (
            <div className='container'>
                <div className='row'>
                    {filteredBooks}
                </div>
                
            </div>
            
        )
    }
}

export default Read;