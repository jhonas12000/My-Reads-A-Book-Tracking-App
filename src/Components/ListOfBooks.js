import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText } from 'reactstrap';

 class BooksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBook: null
        };
    }

    onSelectedBook(book) {
        this.setState({selectedBook: book});
    }

    displaySelectedBook(book) {
        if(book) {
            return(
                <Card>
                    <CardImg src={book.image}  alt={book.title}/>
                    <CardBody>
                        <CardText>{`The book was published in ${book.published}, reading ${book.year}`}</CardText>
                    </CardBody>
                </Card>
            )
         } 
        return <div />
        
    }
    render() {
        const list = this.props.books.map(book => {
            return (
                <div key={book.id} className='col-md-3 m-1'>
                    <Card onClick={() => this.onSelectedBook(book)}>
                        <CardImg src={book.image} width='50%' height='100%' alt={book.title}/>
                        <CardText>{`Published in ${book.published}`}</CardText>
                    </Card>
                </div>
            )
        })
        return (
            <div className='container'>
                <div className='row'>
                    {list}
                </div>
                <div className='row'>
                    <div className='col-md-5 m-1'>
                        {this.displaySelectedBook(this.state.selectedBook)}
                    </div>
                </div>
            </div>
        )
    }
 }

 export default BooksList;
 
    

