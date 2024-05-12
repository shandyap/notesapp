import React from 'react';

class NotesAppInput extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
            title: '',
            body: '',
        }

        this.onTitleEventHandler = this.onTitleEventHandler.bind(this);
        this.onBodyEventHandler = this.onBodyEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleEventHandler(event){
        this.setState(() => {
            return {
                title: event.target.value
            }
        })
    }

    onBodyEventHandler(event){
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onSubmitEventHandler(event){
        event.preventDefault();

        this.props.addNotes(this.state);
    }

    render(){
        return(
            <form className='note-input__body' onSubmit={this.onSubmitEventHandler}>
                <p className='note-input__title__char-limit'>Sisa karakter : 50</p>
                <input type="text" placeholder='Judul catatannya apa?' className='note-input__title' value={this.state.title} onChange={this.onTitleEventHandler}></input>
                <textarea placeholder='Isi catatannya apa?' value={this.state.body} onChange={this.onBodyEventHandler}></textarea>
                <button type='submit'>Catat!</button>
            </form>
        )
    }
}

export default NotesAppInput;