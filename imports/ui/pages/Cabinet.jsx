import React, {Component} from 'react'
import AddAdvertaisment from './cabinet/AddAdvertaisment'
class Cabinet extends Component {
    state = {
        menuCategory: ''
    }
    render() {
        if(!Meteor.user()){
            this.props.history.push('/login')
        }
        const showContent = () =>{
            if(this.state.menuCategory == 'addAdvertaisment') {
                return <AddAdvertaisment />
            }
        }
        return (
            <React.Fragment>
                <main>
                    <section className="hero_in general">
                        <div className="wrapper">
                            <div className="container">
                                <h1 className="fadeInUp">
                                    <span></span>Faq Section</h1>
                            </div>
                        </div>
                    </section>
                    <div className="container margin_60_35">
                        <div className="row">
                            <aside className="col-lg-3" id="sidebar">
                                <div className="box_style_cat" id="faq_box">
                                    <ul id="cat_nav">
                                        <li>
                                            <a href="#payment" className="active"
                                                onClick={(e)=>{
                                                    e.preventDefault()
                                                    this.setState({
                                                        menuCategory: 'addAdvertaisment'
                                                    })
                                                }}
                                            >
                                                <i className="icon_document_alt"></i>Add advertaisment</a>
                                        </li>
                                        <li>
                                            <a href="#payment" className="active"
                                                onClick={(e)=>{
                                                    e.preventDefault()
                                                    Accounts.logout((err, suc) => {
                                                        if(!err) {
                                                            this.props.history.push('/login')
                                                        }
                                                    })
                                                }}
                                            >
                                                <i className="icon_document_alt"></i>Logout</a>
                                        </li>
                                    </ul>
                                </div>

                            </aside>
                            <div className="col-lg-9" id="faq">
                                {showContent()}
                            </div>

                        </div>
                    </div>
                </main>
            </React.Fragment>
        )
    }
}

export default Cabinet