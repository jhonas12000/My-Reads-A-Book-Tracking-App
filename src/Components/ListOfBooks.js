 import React, { Component } from 'react';


 class BooksList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: 'Audacity of Hope',
                    author: 'Barack Obama',
                    year: 'Published 2006',
                    image: 'images/Audacity-of-Hope.jpg',
                    read: true
                },
                {
                    id: 2,
                    title: 'If Tomorrow Comes',
                    author: 'Sidney Sheldon',
                    year: 'Published 1985',
                    image: 'images/if-tomorrow-comes.jpg',
                    read: true
                },
                {
                    id: 3,
                    title: 'Sememn',
                    author: 'Sisay Negusu',
                    year: 'Published 1978',
                    image: 'images/Sememen.jpg',
                    read: true
                },
                {
                    id: 4,
                    title: 'Time To Kill',
                    author: 'John Grisham',
                    year: 'Published 1989',
                    image: 'images/time-to-kill.jpg',
                    read: true
                },
                {
                    id: 5,
                    title: 'Project Babylon',
                    author: 'Kibreab Fire',
                    year: 'Published 2005',
                    image: 'images/Babylon.jpg',
                    read: true
                },
                {
                    id: 6,
                    title: 'Rich Dad Poor Dad',
                    author: 'Robert Kiyosaki',
                    year: 'Published 1997',
                    image: 'images/Rich-Dad-Poor-Dad.jpg',
                    read: 'in-progress'
                },
                {
                    id: 7,
                    title: 'Lightning',
                    author: 'Daniella Steel',
                    year: 'Published 1988',
                    image: 'images/Lightning.jpg',
                    read: true
                },
                {
                    id: 8,
                    title: 'Rozan Selen',
                    author: 'Daniella Steel',
                    year: 'Published 2002',
                    image: 'images/Rosan-Selen.jpg',
                    read: true
                }
            ]
        };
    }

    render() {
        const list = this.state.books.map(book => {
            return (
                <div className='col'>
                    <img src={book.image} width='300' height='300' alt={book.title} />
                    <p>{book.year}</p>

                </div>
            )
        })
        return (
            <div className='container'>
                <div className='row'>
                    {list}
                </div>
            </div>
        )
    }
 }

 export default BooksList;
 
//  export const books = [
//     

