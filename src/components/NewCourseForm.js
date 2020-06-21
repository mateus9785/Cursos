import React, { Component } from 'react';

class NewCourseForm extends Component {
    static defaultProps = {
        categories: [],
        onSubmit: () => {}
    }
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            category: '',
            image: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const newCourse = this.state;

        if(newCourse.name && newCourse.image && newCourse.category){
            this.props.onSubmit(newCourse);
            this.setState({
                name: '',
                image: ''
            })
        }
    }

    handleChange(event){
        const { target } = event,
            { name, value } = target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { props, state } = this;
        return (
            <form className="course-form" onSubmit={this.handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input name="name" value={state.name} onChange={this.handleChange}/>
                </div>
                <div>
                    <label>Imagem:</label>
                    <input name="image" value={state.image} onChange={this.handleChange}/>
                </div>
                <div>
                    <label>Categoria</label>
                    <select name="category" value={state.category} onChange={this.handleChange}>
                        <option value='' >Selecionar</option>
                        {
                            props.categories.map(category => (
                                <option value={category.name}>{category.name}</option>
                            ))
                        }
                    </select>
                </div>
                <button type="submit" >Criar Curso</button>
            </form>
        )
    }
}

export default NewCourseForm;