import React from 'react'
import { component } from 'react'
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../Redux/actions/actionCreators'

class TodoAdd extends component {
    state = {
        todo: "",
    }

    render() {
        return (
            <div>
                <InputGroup>
                    <Input
                        onChange={(e) => this.setState({ todo: e.target.value })}
                        placeholder="todo"
                    />
                    <InputGroupAddon>
                        <Button color="success"
                            onClick={() => this.props.actions.add(this.state.todo)}
                        >
                            ekle
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            add: bindActionCreators(actionCreators.todoAdd, dispatch)
        }
    }
}

export default connect(null, mapDispatchToProps)(TodoAdd)