import { PureComponent } from "react";
import { connect } from "react-redux";
import Loader from "./Spinner";
class Repos extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: [],
            organizationName: ''
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ ...nextProps });
    }

    render() {
        const {
            repos
        } = this.props;
        if (!repos) return <Loader />;
        return <div className="table-column">
            <h3>Repositories</h3>
            <div className="repos-list-holder">
                <ul className="repos-list-wrap">
                    {repos.map((item, i) => (
                        <li key={i} >
                            {/* <img src={item.avatar_url} alt="" className="img" /> */}
                            <p >{item['name'].toLocaleUpperCase()}</p>
                            <div>
                                <input type="checkbox" value={item['login']} />
                            </div>
                        </li>

                    ))}
                </ul>
            </div>
        </div>
    }
}

const mapStateToProps = state => ({
    ...state
  });
  const mapDispatchToProps = dispatch => ({
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(Repos);