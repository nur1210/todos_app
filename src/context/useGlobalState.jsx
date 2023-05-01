import React from "react";

const initialGlobalState = {
    count: 0,
    todos: [
        {
            id: 1,
            name: "buy milk",
            complete: false,
            count: 3,
        },
        {
            id: 2,
            name: "find internship",
            complete: false,
            count: 1,
        },
    ],
    deletedTodos: [
        {
            id: 3,
            name: "wash dishes",
            complete: true,
            count: 5,
        }
    ],
};

// Create a Context for the (global) State
export const GlobalState = React.createContext();

export class Global extends React.Component {
    constructor(props) {
        super(props);

        // Set the initial (global) State
        this.state = {
            globals: initialGlobalState || {},
        };
    }

    // Expose the setGlobals function to the Globals object
    componentDidMount() {
        GlobalState.set = this.setGlobalState;
    }

    setGlobalState = (data = {}) => {
        const { globals } = this.state;

        // Loop over the data items by key, only updating those which have changed
        Object.keys(data).forEach((key) => {
            globals[key] = data[key];
        });

        // Update the state with the new State
        this.setState(globals);
    };

    render() {
        const { globals } = this.state;
        const { Root } = this.props;

        return (
            // Pass the current value of GlobalState, based on this components' State, down
            <GlobalState.Provider value={globals}>
                <Root />
            </GlobalState.Provider>
        );
    }
}

// Create a shorthand Hook for using the GlobalState
export const useGlobalState = () => React.useContext(GlobalState);

window.GlobalState = GlobalState;
