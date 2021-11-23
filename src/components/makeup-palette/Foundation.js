import React, { Component } from "react";
import axios from "axios";
import URIs from "../../utils/URIs"

class Foundation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            light: 1,
            medium: 2,
            cakey: 3,
            current: null,
            foundation_list: [],
        }
    }

    componentDidMount() {

        axios.get(URIs.BASE_URL + URIs.GET_FOUNDATION_LIST)
            .then(response => {
                this.setState({
                    foundation_list: response.data
                })
            })
            .catch(error => {
                console.log('error'); //to be removed
            })
    }

    render(){
        return(
            <div>

            </div>
        );
    }
}

export default Foundation;