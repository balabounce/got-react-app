import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';


export default class App extends Component { 

    state = {
        loading: true,
        error: false
    };

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    toggleRandChar = () => {
        this.setState((state) => {
            return {
                loading: !state.loading
            }
        });
    }

    

    render() {
        const randomCharWindow = this.state.loading ? <RandomChar/> : null;
        if(this.state.error) {
            return <ErrorMessage/>
        }
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            <Button onClick={() => this.toggleRandChar()} className='ToggleRandomChar' color="primary">ToggleRandomChar</Button>{''}
                            {randomCharWindow}
                        </Col>
                    </Row>
                    <Row>
                        <CharacterPage/>
                    </Row>
                </Container>
            </>
        );
    }
    
}
