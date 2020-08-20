import MyReact, {Component} from './MyReact';

class App extends Component {
    render() {
        return <div>1</div>
    }
}

MyReact.render(<App />, document.getElementById('#app'))