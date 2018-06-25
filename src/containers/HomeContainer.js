import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import CustomersActions from './../components/CustomersActions';

class HomeContainer extends Component {

    handleOnClick = () => {
        //console.log("handleOnClick");
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <AppFrame 
                    header='Inicio' 
                    body={
                        <div>
                            <img src="https://www.tablexi.com/wp-content/uploads/2017/12/ReactNative.png" alt=""/>
                            <CustomersActions>
                                <button onClick={this.handleOnClick}>Listado de clientes</button>
                            </CustomersActions>
                        </div>
                    }>
                </AppFrame>
            </div>
        );
    }
}

export default withRouter(HomeContainer);