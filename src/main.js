import MyReact, {Component} from './MyReact';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
    } 

    render() {
        return <div>1</div>
    }
}

MyReact.render(<App />, document.querySelector('#app'))