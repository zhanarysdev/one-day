import React, {Component} from 'react'
import {Meteor} from 'meteor/meteor'
import Categories from '../../../utils/Categories'
import SubCategories from '../../../utils/SubCategories'
import FileUpload from '../../../utils/FileUpload'
class AddAdvertaisment extends Component {
    state = {
        curCat: 'Art',
        title: '',
        description: '',
        fileId: '',
        coverImg: null,
        age: '',
        reqLvl: '',
        city: '',
        date: '',
    }
    render() {
        const fileId = (id) => {

            this.setState({fileId: id})
        }
        const coverImgm = (data) => {
            Meteor.call('get.link.id', data, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    this.setState({coverImg: result})

                }
            })
        }
        const chooseCat = () => {
            return Categories.map(item => {
                return <option key={item}>
                    {item}
                </option>
            })
        }
        const chooseSubCat = () => {
            let matched = SubCategories.filter(item => item.name == this.state.curCat)
            let arMatched = matched.map(i => i.subCat)
            return arMatched
                ? arMatched[0].map(i => {
                    return <option key={i}>
                        {i}
                    </option>
                })
                : ''
        }
        const saveAdvertaisment = () => {
            let data;
            data = {
                title: this.state.title,
                description: this.state.description,
                img: this.state.coverImg,
                rating: 0
            }
            Meteor.call('MainCollection.insert', data, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    alert('saved')
                }
            })
        }
        return (
            <React.Fragment>
                <h4 className="nomargin_top">Payments</h4>
                <div className="card">
                    <div className="card-header">Add advertaisment</div>
                    <div className="card-body">
                        <select
                            name=""
                            id=""
                            onChange={(e) => {
                            this.setState({curCat: e.target.value})
                        }}>
                            {chooseCat()}
                        </select>
                        <select name="" id="">
                            {chooseSubCat()}
                        </select>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="city"></label>
                            <input
                                type="text"
                                id="city"
                                onClick={(e) => {
                                this.setState({city: e.target.value})
                            }}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="date">Date of start</label>
                            <input
                                type="text"
                                id="date"
                                onClick={(e) => {
                                this.setState({date: e.target.value})
                            }}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="reqLvl">Required level for students</label>
                            <input
                                type="text"
                                id="reqLvl"
                                onClick={(e) => {
                                this.setState({reqLvl: e.target.value})
                            }}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="age">Age range for students</label>
                            <input
                                type="text"
                                id="age"
                                onClick={(e) => {
                                this.setState({age: e.target.value})
                            }}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label htmlFor="title">
                                Add title
                            </label>
                            <input
                                type="text"
                                id="title"
                                onChange={(e) => {
                                this.setState({title: e.target.value})
                            }}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">
                                Add cover image
                            </label>
                            <FileUpload id="coverImg" fFile={fileId} coverImgm={coverImgm}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">
                                Add description
                            </label>
                            <input
                                type="text"
                                id="description"
                                onChange={(e) => {
                                this.setState({description: e.target.value})
                            }}/>
                        </div>
                        <a
                            href=""
                            className="btn"
                            onClick={(e) => {
                            e.preventDefault()
                            saveAdvertaisment()
                        }}>
                            Save
                        </a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default AddAdvertaisment